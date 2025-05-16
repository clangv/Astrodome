import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fromAddress, toAddress, amount, currency } = body

    if (!fromAddress || !toAddress || !amount || !currency) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Simulate sending tx
    const fakeTxId = '0xFAKE_TX_ID_1234567890'

    return NextResponse.json({ txId: fakeTxId }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
