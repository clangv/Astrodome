interface Params { conversationId: string }

export default function ChatThread({ params }: { params: Params }) {
  return (
    <div className='p-6 space-y-4'>
      <h1 className='text-2xl font-semibold'>Chat #{params.conversationId}</h1>
      <div className='border rounded-md p-4 h-96 overflow-y-auto'>
        <p className='text-muted-foreground'>Messages load here</p>
      </div>
    </div>
  )
}