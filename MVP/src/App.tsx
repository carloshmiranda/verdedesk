import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import GuideReciboVerde from './pages/GuideReciboVerde'
import GuideFaturaTypes from './pages/GuideFaturaTypes'
import GuideVatArticle53 from './pages/GuideVatArticle53'
import GuideSocialSecurity from './pages/GuideSocialSecurity'
import GuideIrsTaxReturn from './pages/GuideIrsTaxReturn'
import GuideD8VisaTaxes from './pages/GuideD8VisaTaxes'
import GuidesIndex from './pages/GuidesIndex'
import TaxCalculator from './pages/TaxCalculator'
import NhrChecker from './pages/NhrChecker'
import GuideTaxDeadlines from './pages/GuideTaxDeadlines'
import GuideFreelancerRegistration from './pages/GuideFreelancerRegistration'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/guides" element={<GuidesIndex />} />
        <Route path="/guide/recibo-verde-english" element={<GuideReciboVerde />} />
        <Route path="/guide/fatura-vs-fatura-recibo-vs-recibo" element={<GuideFaturaTypes />} />
        <Route path="/guide/vat-exemption-article-53-portugal" element={<GuideVatArticle53 />} />
        <Route path="/guide/social-security-freelancer-portugal" element={<GuideSocialSecurity />} />
        <Route path="/guide/irs-tax-return-freelancer-portugal" element={<GuideIrsTaxReturn />} />
        <Route path="/guide/d8-visa-portugal-taxes" element={<GuideD8VisaTaxes />} />
        <Route path="/guide/tax-deadlines-2026" element={<GuideTaxDeadlines />} />
        <Route path="/guide/register-freelancer-portugal" element={<GuideFreelancerRegistration />} />
        <Route path="/tools/tax-calculator" element={<TaxCalculator />} />
        <Route path="/tools/nhr-checker" element={<NhrChecker />} />
      </Routes>
    </BrowserRouter>
  )
}
