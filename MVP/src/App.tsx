import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import GuideReciboVerde from './pages/GuideReciboVerde'
import GuideFaturaTypes from './pages/GuideFaturaTypes'
import GuideVatArticle53 from './pages/GuideVatArticle53'
import GuideSocialSecurity from './pages/GuideSocialSecurity'
import GuideIrsTaxReturn from './pages/GuideIrsTaxReturn'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/guide/recibo-verde-english" element={<GuideReciboVerde />} />
        <Route path="/guide/fatura-vs-fatura-recibo-vs-recibo" element={<GuideFaturaTypes />} />
        <Route path="/guide/vat-exemption-article-53-portugal" element={<GuideVatArticle53 />} />
        <Route path="/guide/social-security-freelancer-portugal" element={<GuideSocialSecurity />} />
        <Route path="/guide/irs-tax-return-freelancer-portugal" element={<GuideIrsTaxReturn />} />
      </Routes>
    </BrowserRouter>
  )
}
