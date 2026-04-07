import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import { ProtectedRoute } from '@app/components/ProtectedRoute/ProtectedRoute'

const FeatureBHome = lazy(() => import('@app/pages/FeatureBHome/FeatureBHome').then((m) => ({ default: m.FeatureBHome })))
const PageB1       = lazy(() => import('@app/pages/PageB1/PageB1').then((m) => ({ default: m.PageB1 })))
const PageB2       = lazy(() => import('@app/pages/PageB2/PageB2').then((m) => ({ default: m.PageB2 })))
const PageB3       = lazy(() => import('@app/pages/PageB3/PageB3').then((m) => ({ default: m.PageB3 })))

export function Router() {
  return (
    <BrowserRouter basename="/feature-b">
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/"        element={<FeatureBHome />} />
            <Route path="/page-b1" element={<PageB1 />} />
            <Route path="/page-b2" element={<PageB2 />} />
            <Route path="/page-b3" element={<PageB3 />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
