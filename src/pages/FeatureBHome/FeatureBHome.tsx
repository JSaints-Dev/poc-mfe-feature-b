import { Sidebar } from '@app/components/Sidebar/Sidebar'

export function FeatureBHome() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-semibold">Feature B</h1>
        <p className="mt-2 text-muted-foreground">Bem-vindo à Feature B.</p>
      </main>
    </div>
  )
}
