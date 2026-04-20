export default function TocPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-serif tracking-wider">MIRASUIT</a>
          <div className="flex items-center gap-6 text-sm">
            <a href="/#story" className="text-zinc-400 hover:text-white transition-colors">品牌故事</a>
            <a href="/toc" className="text-orange-500">定制流程</a>
            <a href="/b2b" className="text-zinc-400 hover:text-white transition-colors">合作咨询</a>
            <a href="/contact" className="text-zinc-400 hover:text-white transition-colors">联系我们</a>
          </div>
          <a href="/#book" className="bg-orange-600 hover:bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors">
            预约
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-6 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">您的专属定制之旅</h1>
          <p className="text-xl text-zinc-400">三代传承，四大承诺</p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-16">从量体到交付，5步专属体验</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform -translate-x-1/2" />
            
            <div className="space-y-12">
              {[
                { step: '01', title: '量体', desc: '专业裁缝为您精确测量28个身体点位，记录身形特点', time: '约30分钟' },
                { step: '02', title: '选料', desc: '来自意大利、英国、日本的300+款精选面料', time: '约20分钟' },
                { step: '03', title: '设计', desc: '与设计大师一对一沟通，确定款式细节', time: '约45分钟' },
                { step: '04', title: '裁剪', desc: '资深裁缝手工精细裁剪，确保完美合身', time: '3-4周' },
                { step: '05', title: '交付', desc: '试穿调整，完美成衣送至您手', time: '约1小时' },
              ].map((item, i) => (
                <div key={item.step} className={`flex items-center gap-8 ${i % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex-1 ${i % 2 === 1 ? 'text-right' : ''}`}>
                    <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                      <div className="text-3xl font-serif text-orange-600 mb-2">{item.step}</div>
                      <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                      <p className="text-zinc-400 mb-2">{item.desc}</p>
                      <p className="text-sm text-zinc-600">⏱ {item.time}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-orange-600 border-4 border-black relative z-10 flex-shrink-0" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fabric Collection */}
      <section className="py-20 px-6 bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-4">面料系列</h2>
          <p className="text-zinc-400 text-center mb-12">来自意大利、英国、日本的顶级面料</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: '意大利经典', origin: '🇮🇹', desc: 'VBC, Zegna, Loro Piana', count: '120+款' },
              { name: '英伦优雅', origin: '🇬🇧', desc: 'Scabal, Holland & Sherry', count: '80+款' },
              { name: '东方精致', origin: '🇯🇵', desc: 'Toyoshima, Ishikawa', count: '60+款' },
            ].map((f) => (
              <div key={f.name} className="text-center p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <div className="text-4xl mb-4">{f.origin}</div>
                <h3 className="text-xl font-medium mb-2">{f.name}</h3>
                <p className="text-zinc-400 text-sm mb-2">{f.desc}</p>
                <p className="text-orange-500 font-medium">{f.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-6">开始您的定制之旅</h2>
          <p className="text-zinc-400 mb-8">预约免费量体咨询，体验意式定制服务</p>
          <a href="/#book" className="inline-block bg-orange-600 hover:bg-orange-500 text-white px-10 py-4 rounded-full text-lg font-medium transition-all hover:scale-105">
            预约量体
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto text-center text-zinc-500 text-sm">
          <p>上海市静安区南京西路1788号 | Milan Via della Spiga 26</p>
        </div>
      </footer>
    </main>
  )
}
