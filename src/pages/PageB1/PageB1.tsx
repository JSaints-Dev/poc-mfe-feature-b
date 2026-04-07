import { Sidebar } from '@app/components/Sidebar/Sidebar'

export function PageB1() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-semibold">Página B1</h1>
        <p className="mt-2 text-muted-foreground">Conteúdo da Página B1.</p>
      </main>
    </div>
  )
}
