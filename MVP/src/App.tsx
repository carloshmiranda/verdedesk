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
import GuideWithholdingTax from './pages/GuideWithholdingTax'
import GuideSimplifiedVsOrganized from './pages/GuideSimplifiedVsOrganized'
import GuidePortalDasFinancas from './pages/GuidePortalDasFinancas'
import GuideTaxDeductions from './pages/GuideTaxDeductions'
import GuideEFatura from './pages/GuideEFatura'
import GuideNifPortugal from './pages/GuideNifPortugal'
import GuideAnexoB from './pages/GuideAnexoB'
import CalculadoraReciboVerde from './pages/CalculadoraReciboVerde'
import ComparisonPage from './pages/ComparisonPage'
import BlogIrsFilingGuide2026 from './pages/BlogIrsFilingGuide2026'
import GuideInvoiceForeignClients from './pages/GuideInvoiceForeignClients'
import GuideAccountantPortugal from './pages/GuideAccountantPortugal'
import VsRauva from './pages/VsRauva'
import VsInvoiceXpress from './pages/VsInvoiceXpress'
import GuideCancelReciboVerde from './pages/GuideCancelReciboVerde'
import GuideMovingPortugalFreelancer from './pages/GuideMovingPortugalFreelancer'

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
        <Route path="/guide/withholding-tax-portugal" element={<GuideWithholdingTax />} />
        <Route path="/guide/simplified-vs-organized-regime" element={<GuideSimplifiedVsOrganized />} />
        <Route path="/guide/portal-das-financas-english" element={<GuidePortalDasFinancas />} />
        <Route path="/guide/tax-deductions-freelancer-portugal" element={<GuideTaxDeductions />} />
        <Route path="/guide/e-fatura-portugal-english" element={<GuideEFatura />} />
        <Route path="/guide/nif-portugal-foreigner" element={<GuideNifPortugal />} />
        <Route path="/guide/anexo-b-irs-freelancer-portugal" element={<GuideAnexoB />} />
        <Route path="/tools/tax-calculator" element={<TaxCalculator />} />
        <Route path="/tools/nhr-checker" element={<NhrChecker />} />
        <Route path="/calculadora" element={<CalculadoraReciboVerde />} />
        <Route path="/comparison" element={<ComparisonPage />} />
        <Route path="/blog/portugal-freelancer-tax-return-2026" element={<BlogIrsFilingGuide2026 />} />
        <Route path="/guide/invoice-foreign-clients-portugal" element={<GuideInvoiceForeignClients />} />
        <Route path="/guide/accountant-freelancer-portugal" element={<GuideAccountantPortugal />} />
        <Route path="/vs/rauva" element={<VsRauva />} />
        <Route path="/vs/invoicexpress" element={<VsInvoiceXpress />} />
        <Route path="/guide/cancel-recibo-verde-portugal" element={<GuideCancelReciboVerde />} />
        <Route path="/guide/moving-to-portugal-freelancer" element={<GuideMovingPortugalFreelancer />} />
      </Routes>
    </BrowserRouter>
  )
}
