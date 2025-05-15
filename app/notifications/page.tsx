import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function Notifications() {
  return (
    <Card className='m-6'>
      <CardHeader><CardTitle>Notifications</CardTitle></CardHeader>
      <CardContent className='space-y-2'>
        <p className='text-muted-foreground'>No notifications yet</p>
      </CardContent>
    </Card>
  )
}