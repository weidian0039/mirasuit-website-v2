export default function BookingConfirm() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-narrow mx-auto text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
          <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 className="font-serif text-2xl md:text-3xl text-primary mb-4">
          预约成功
        </h2>
        <p className="text-charcoal/60 mb-8 max-w-md mx-auto">
          我们的客服将在 24 小时内与您联系，确认预约细节。
        </p>

        <div className="inline-flex flex-col items-center gap-4">
          <div className="bg-white p-6 shadow-sm w-64">
            <p className="text-xs text-charcoal/60 mb-2">预约编号</p>
            <p className="font-mono text-lg text-primary">MS-2026-XXXX</p>
          </div>
          <a href="/" className="btn-secondary text-xs">
            返回首页
          </a>
        </div>
      </div>
    </section>
  )
}
