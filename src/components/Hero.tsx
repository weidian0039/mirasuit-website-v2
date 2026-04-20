export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundColor: '#1A1A1A',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        {/* A/B Test Headline */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
          意式定制西装的艺术
        </h1>

        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          每一针每一线，皆为您的故事而生。从 Milan 到上海，匠心传承三代。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#booking" className="bg-accent hover:bg-accent-hover text-white px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300">
            立即体验
          </a>
          <a href="#products" className="border border-white/30 hover:border-accent hover:text-accent text-white px-8 py-4 text-sm tracking-wider transition-all duration-300">
            了解定制
          </a>
        </div>

        {/* Social Proof */}
        <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
          </svg>
          <span>已有 <strong className="text-accent">328</strong> 位精英预约</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
