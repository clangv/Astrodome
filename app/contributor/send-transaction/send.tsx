'use client'
import { useWalletContext } from '@coinbase/onchainkit/wallet'
import { useState, useEffect } from 'react'

export default function SendTx() {
  // Cast wallet context to any to avoid TypeScript errors for missing props
  const walletContext: any = useWalletContext()

  const address = walletContext.address
  // If `status` is not defined, we fallback to simple connected check
  const isConnected = !!address

  // Try to get provider from context or fallback to window.ethereum
  const provider = walletContext.provider || (typeof window !== 'undefined' ? (window as any).ethereum : null)

  const [toAddress, setToAddress] = useState('')
  const [amount, setAmount] = useState('0.01')
  const [txStatus, setTxStatus] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log('Wallet context:', walletContext)
    console.log('Provider:', provider)
    console.log('Address:', address)
    console.log('Connected:', isConnected)
  }, [walletContext, provider, address, isConnected])

  async function sendTransaction() {
    if (!isConnected) {
      setTxStatus('Please connect your wallet first.')
      return
    }
    if (!provider) {
      setTxStatus('Wallet provider not found. Please make sure your wallet is connected.')
      return
    }
    if (!toAddress) {
      setTxStatus('Please enter recipient address.')
      return
    }

    setLoading(true)
    setTxStatus('')

    try {
      const ethAmount = parseFloat(amount)
      if (isNaN(ethAmount) || ethAmount <= 0) {
        setTxStatus('Please enter a valid amount greater than 0')
        setLoading(false)
        return
      }
      const weiValue = '0x' + BigInt(Math.floor(ethAmount * 1e18)).toString(16)

      const txHash = await provider.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: address,
            to: toAddress,
            value: weiValue,
          },
        ],
      })

      setTxStatus('Transaction sent! Tx Hash: ' + txHash)
    } catch (error: any) {
      setTxStatus('Error sending transaction: ' + (error?.message || String(error)))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto p-4 space-y-4 border rounded">
      <h2 className="text-lg font-bold">Send ETH Transaction</h2>

      <div>
        <label className="block mb-1 font-semibold">Your Wallet Address (sender)</label>
        <code className="block p-2 bg-gray-100 rounded break-all">{address || 'Not connected'}</code>
      </div>

      <label className="block">
        Recipient Address
        <input
          type="text"
          value={toAddress}
          onChange={e => setToAddress(e.target.value)}
          placeholder="0xabc123..."
          className="w-full border p-2 rounded mt-1"
          spellCheck={false}
        />
      </label>

      <label className="block">
        Amount (ETH)
        <input
          type="number"
          step="0.0001"
          min="0"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          className="w-full border p-2 rounded mt-1"
        />
      </label>

      <button
        onClick={sendTransaction}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Send ETH'}
      </button>

      {txStatus && <p className="mt-2 text-sm">{txStatus}</p>}
    </div>
  )
}
