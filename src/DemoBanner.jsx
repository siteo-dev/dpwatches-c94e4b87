import { useState } from 'react'
import { Info, X, Zap, ArrowRight, Pencil, Headphones, Clock, MessageCircle, Server, Shield, Search, Gauge, Lock, Globe, Phone, Sparkles, Check, Minus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const ACCENT = '#3b82f6'
const ACCENT_RGB = '59,130,246'
const CHECKOUT_URL = 'https://vnckxwbzbmtdqsvgrnfg.supabase.co/functions/v1/create-checkout?submission_id=c94e4b87-d763-4673-9ef5-4bfb30745ae6'

const features = [
  { label: 'Included monthly editing hours', starter: '2h', growth: '4h', icon: Pencil },
  { label: 'Extra editing hours', starter: '45&euro;/hr', growth: '40&euro;/hr', icon: Clock },
  { label: 'Support hours', starter: '10:00 - 18:00', growth: '24/7', icon: Headphones },
  { label: 'Response time', starter: 'Max 24h', growth: 'Priority', icon: Clock },
  { label: 'WhatsApp & direct calls', starter: false, growth: true, icon: MessageCircle },
  { label: 'High-speed premium hosting', starter: 'Performant hosting', growth: true, icon: Server },
  { label: '24/7 security monitoring', starter: true, growth: true, icon: Shield },
  { label: 'SEO scan & health check', starter: true, growth: true, icon: Search },
  { label: 'Loading speed optimization', starter: false, growth: true, icon: Gauge },
  { label: 'SSL certificate included', starter: true, growth: true, icon: Lock },
  { label: 'Domain .com included', starter: true, growth: true, icon: Globe },
]

function FeatureRow({ icon: Icon, label, value, included }) {
  const active = included !== false && value !== false
  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      <Icon className={cn("w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0", active ? "" : "text-zinc-600")} style={active ? { color: ACCENT } : undefined} />
      <span className={cn("text-sm sm:text-base", active ? "text-zinc-200" : "text-zinc-500")}>
        {typeof value === 'string' ? value : label}
      </span>
    </div>
  )
}

export default function DemoBanner() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="dark">
      <div className="fixed left-1/2 -translate-x-1/2 overflow-hidden bottom-2 p-3 px-3 z-[99] bg-black/50 backdrop-blur-sm text-white/50 rounded-full flex items-center gap-2 max-w-[calc(100vw-1rem)]" style={{ borderRight: `2px solid ${ACCENT}` }}>
        <div className="absolute right-0 top-0 h-full w-40 rounded-l-full pointer-events-none" style={{ background: `linear-gradient(to left, rgba(${ACCENT_RGB},0.3), rgba(${ACCENT_RGB},0))` }} />
        <Info className="w-4 h-4 flex-shrink-0" />
        <span className="whitespace-nowrap hidden sm:inline">This is a demo. To work with us, check our offer</span>
        <span className="whitespace-nowrap sm:hidden text-sm">This is a demo.</span>
        <Button
          onClick={() => setModalOpen(true)}
          className="ml-2 rounded-full font-semibold transition-all ease-in-out hover:px-6 whitespace-nowrap relative z-10 text-sm sm:text-base"
          style={{ backgroundColor: ACCENT, color: '#fff' }}
        >
          See offer
        </Button>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md animate-fade-in" />
          <Card
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border-white/10 bg-zinc-950/80 backdrop-blur-2xl shadow-2xl animate-modal-in"
          >
            <div className="absolute top-0 left-0 w-72 h-72 rounded-full blur-[100px] pointer-events-none" style={{ backgroundColor: `rgba(${ACCENT_RGB}, 0.2)` }} />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[120px] pointer-events-none" style={{ backgroundColor: `rgba(${ACCENT_RGB}, 0.1)` }} />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </Button>
            <CardContent className="relative z-10 p-5 sm:p-10">
              <div className="mb-5 sm:mb-8">
                <Badge variant="outline" className="uppercase tracking-widest mb-4" style={{ backgroundColor: `rgba(${ACCENT_RGB}, 0.1)`, borderColor: `rgba(${ACCENT_RGB}, 0.2)`, color: ACCENT }}>
                  <Zap className="w-3.5 h-3.5 mr-2" />
                  Exclusive Offer
                </Badge>
                <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">
                  Premium Website at an
                  <span style={{ background: `linear-gradient(to right, ${ACCENT}, ${ACCENT})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> Unbeatable Price</span>
                </h2>
                <p className="text-base sm:text-lg text-zinc-400">
                  Everything you need for a professional online presence, at a fraction of the cost of a traditional agency.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-5 sm:mb-8">
                <Card className="rounded-2xl border-white/10 bg-white/[0.02]">
                  <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                    <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Starter</div>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-3xl sm:text-4xl font-black text-white">89&euro;</span>
                      <span className="text-zinc-500">/ month</span>
                    </div>
                    <div className="text-sm sm:text-base text-zinc-500 mb-4 sm:mb-5">199&euro; setup</div>
                    <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                      {features.map((f) => (
                        <FeatureRow key={f.label} icon={f.icon} label={f.label} value={f.starter} included={f.starter} />
                      ))}
                    </div>
                    <Button variant="outline" asChild className="w-full rounded-full border-white/10 text-white hover:bg-white/5 mt-auto">
                      <a href={`${CHECKOUT_URL}&plan=starter`} rel="noopener noreferrer">
                        Choose Starter
                      </a>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="rounded-2xl relative overflow-hidden" style={{ borderColor: `rgba(${ACCENT_RGB}, 0.3)`, backgroundColor: `rgba(${ACCENT_RGB}, 0.05)` }}>
                  <div className="absolute top-0 right-0 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl" style={{ backgroundColor: ACCENT, color: '#fff' }}>
                    Best seller
                  </div>
                  <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                    <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: ACCENT }}>Growth</div>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-3xl sm:text-4xl font-black text-white">119&euro;</span>
                      <span className="text-zinc-500">/ month</span>
                    </div>
                    <div className="text-sm sm:text-base text-zinc-500 mb-4 sm:mb-5">199&euro; setup</div>
                    <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                      {features.map((f) => (
                        <FeatureRow key={f.label} icon={f.icon} label={f.label} value={f.growth} included={f.growth} />
                      ))}
                    </div>
                    <div className="relative mt-auto">
                      <div className="absolute -inset-[1px] rounded-full overflow-hidden">
                        <div className="absolute inset-0 animate-border-beam" style={{ background: `conic-gradient(from 0deg, transparent 0%, transparent 70%, rgba(${ACCENT_RGB},0.8) 80%, white 85%, rgba(${ACCENT_RGB},0.8) 90%, transparent 100%)` }} />
                      </div>
                      <Button asChild className="relative w-full rounded-full font-semibold" style={{ backgroundColor: ACCENT, color: '#fff' }}>
                        <a href={`${CHECKOUT_URL}&plan=growth`} rel="noopener noreferrer">
                          Choose Growth
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="relative rounded-2xl mb-5 sm:mb-8 overflow-hidden">
                <div className="absolute -inset-[1px] rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 animate-border-beam" style={{ background: `conic-gradient(from 0deg, transparent 0%, transparent 60%, rgba(${ACCENT_RGB},0.6) 70%, white 75%, rgba(${ACCENT_RGB},0.6) 80%, transparent 90%)` }} />
                </div>
                <Card className="relative rounded-2xl border-0 bg-zinc-950">
                  <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] pointer-events-none" style={{ backgroundColor: `rgba(${ACCENT_RGB}, 0.15)` }} />
                  <CardContent className="relative p-5 sm:p-7">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `rgba(${ACCENT_RGB}, 0.1)` }}>
                        <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: ACCENT }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-bold text-white mb-2">Need a fully custom website or advanced features?</h3>
                        <p className="text-sm sm:text-base text-zinc-400 mb-2">If your business requires more than a standard setup — such as unique design, complex integrations, or tailored functionality — we've got you covered.</p>
                        <p className="text-sm sm:text-base text-zinc-300 mb-4">Schedule a quick discovery call and we'll prepare a solution built specifically for your goals.</p>
                        <Button asChild className="rounded-full font-semibold gap-2" style={{ backgroundColor: ACCENT, color: '#fff' }}>
                          <a href="tel:+40757289370">
                            <Phone className="w-4 h-4" />
                            Schedule a call — +40 757 289 370
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-5 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                  Why choose
                  <span style={{ color: ACCENT }}> us?</span>
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { label: 'Setup cost', others: '800&euro;+', us: '199&euro;' },
                    { label: 'Monthly maintenance', others: '150&euro;+', us: 'from 89&euro;' },
                    { label: 'Included edits', others: false, us: true },
                    { label: 'Dedicated support', others: false, us: true },
                  ].map((row) => (
                    <Card key={row.label} className="rounded-xl border-white/5 bg-white/[0.02]">
                      <CardContent className="p-3 sm:p-4">
                        <div className="text-xs text-zinc-500 mb-2 font-medium">{row.label}</div>
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] uppercase tracking-wider text-zinc-600 font-medium">Others</span>
                            {typeof row.others === 'string' ? (
                              <span className="text-sm text-zinc-500 line-through decoration-red-400/60" dangerouslySetInnerHTML={{ __html: row.others }} />
                            ) : (
                              <Minus className="w-4 h-4 text-zinc-600" />
                            )}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] uppercase tracking-wider font-medium" style={{ color: ACCENT }}>With Us</span>
                            {typeof row.us === 'string' ? (
                              <span className="text-sm text-white font-semibold" dangerouslySetInnerHTML={{ __html: row.us }} />
                            ) : (
                              <Check className="w-4 h-4" style={{ color: ACCENT }} />
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-3 text-center">
                  <span className="text-sm sm:text-base text-emerald-400 font-medium">You save 1,300&euro;+ per year</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-zinc-500 text-base">
                  Questions? Call us directly at{' '}
                  <Button variant="link" asChild className="p-0 h-auto font-medium" style={{ color: ACCENT }}>
                    <a href="tel:0746294445">0746 294 445</a>
                  </Button>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modal-in { from { opacity: 0; transform: scale(0.95) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes border-beam { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-fade-in { animation: fade-in 0.2s ease-out; }
        .animate-modal-in { animation: modal-in 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
        .animate-border-beam { animation: border-beam 3s linear infinite; }
      `}</style>
    </div>
  )
}
