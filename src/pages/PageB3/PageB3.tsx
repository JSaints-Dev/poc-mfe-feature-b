import { Sidebar } from '@app/components/Sidebar/Sidebar'

export function PageB3() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-semibold">Página B3</h1>
        <p className="mt-2 text-muted-foreground">Conteúdo da Página B3.</p>
      </main>
    </div>
  )
}
