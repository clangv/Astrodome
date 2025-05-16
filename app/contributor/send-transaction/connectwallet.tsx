// 'use client'
// import { useWalletContext } from '@coinbase/onchainkit/wallet'

// export default function ConnectWallet() {
//   const { address } = useWalletContext()

//   async function connectWallet() {
//     if (typeof window !== 'undefined' && (window as any).ethereum) {
//       try {
//         await (window as any).ethereum.request({ method: 'eth_requestAccounts' })
//         // Coinbase Wallet or MetaMask will pop up
//       } catch (error) {
//         console.error('User rejected wallet connection')
//       }
//     } else {
//       alert('Please install MetaMask or Coinbase Wallet extension')
//     }
//   }

//   return (
//     <div>
//       {address ? (
//         <p>Connected wallet: <code>{address}</code></p>
//       ) : (
//         <button
//           onClick={connectWallet}
//           className="bg-green-600 text-white px-4 py-2 rounded"
//         >
//           Connect Wallet
//         </button>
//       )}
//     </div>
//   )
// }
