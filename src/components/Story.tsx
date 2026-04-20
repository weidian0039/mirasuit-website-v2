export default function Story() {
  return (
    <section id="story" className="section-padding bg-cream">
      <div className="container-narrow mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-accent/20" />
            <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6">
              <p className="font-serif text-3xl mb-1">132</p>
              <p className="text-xs tracking-wider">年传承</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">
              三代传承，匠心定制
            </h2>
            <div className="space-y-4 text-charcoal/80 text-sm leading-relaxed">
              <p>
                1892 年，Giuseppe Saracco 在米兰创立了 Saracco Tailor，专为贵族和企业家定制西装。
                一个世纪以来，我们始终坚持手工裁剪，每一针每一线都承载着匠人的心血。
              </p>
              <p>
                2020 年，第三代传承人将这份意式定制工艺带入上海，
                在保持传统工艺的同时，融入现代设计理念，为中国精英打造专属的定制体验。
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <p className="font-serif text-2xl text-accent">132+</p>
                <p className="text-xs text-charcoal/60">年历史</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-accent">5000+</p>
                <p className="text-xs text-charcoal/60">客户</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-accent">98%</p>
                <p className="text-xs text-charcoal/60">满意度</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
