import './globals.css'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-serif tracking-wider">MIRASUIT</div>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#story" className="hover:text-white transition-colors">品牌故事</a>
            <a href="#process" className="hover:text-white transition-colors">定制流程</a>
            <a href="#b2b" className="hover:text-white transition-colors">合作咨询</a>
            <a href="#about" className="hover:text-white transition-colors">关于我们</a>
          </div>
          <a href="#book" className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
            预约
          </a>
        </div>
      </nav>

      {/* Hero Section - Variant A (Control) */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black" />
        
        {/* Gold accent line */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-orange-600/50 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-20">
          <h1 className="text-5xl md:text-7xl font-serif tracking-wide mb-6">
            意式定制西装的艺术
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-4">
            从 Milan 到上海，匠心传承三代
          </p>
          <p className="text-sm text-zinc-600 mb-12">
            已有 <span className="text-orange-500 font-medium">328</span> 位精英预约
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#book" className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105">
              立即体验
            </a>
            <a href="#process" className="border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-colors">
              了解定制流程
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600">
          <span className="text-xs">向下探索</span>
          <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
        </div>
      </section>

      {/* Brand Story Section */}
      <section id="story" className="py-32 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">三代传承，匠心定制</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 mx-auto mb-6 flex items-center justify-center text-2xl">🇮🇹</div>
              <h3 className="text-lg font-medium mb-2">Milan 工艺</h3>
              <p className="text-zinc-400 text-sm">1924年于米兰开设首家工坊，传承意大利裁艺精髓</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 mx-auto mb-6 flex items-center justify-center text-2xl">🇨🇳</div>
              <h3 className="text-lg font-medium mb-2">上海精裁</h3>
              <p className="text-zinc-400 text-sm">2018年登陆上海，为中国新贵打造专属定制</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 mx-auto mb-6 flex items-center justify-center text-2xl">✨</div>
              <h3 className="text-lg font-medium mb-2">匠心独运</h3>
              <p className="text-zinc-400 text-sm">每一针每一线，皆为您的故事而生</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 px-6 bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-4">定制流程</h2>
          <p className="text-zinc-400 text-center mb-16">从量体到交付，5步专属体验</p>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: '01', title: '量体', desc: '专业裁缝为您精确测量' },
              { step: '02', title: '选料', desc: '来自意大利精选面料' },
              { step: '03', title: '设计', desc: '专属您的定制方案' },
              { step: '04', title: '裁剪', desc: '手工精细裁剪' },
              { step: '05', title: '交付', desc: '完美成衣送至您手' },
            ].map((item) => (
              <div key={item.step} className="text-center p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <div className="text-3xl font-serif text-orange-600 mb-4">{item.step}</div>
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="book" className="py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">预约您的专属定制</h2>
          <p className="text-zinc-400 mb-12">
            立即预约，与我们的裁艺大师面对面交流，开启您的专属定制之旅
          </p>
          <a href="/contact" className="inline-block bg-orange-600 hover:bg-orange-500 text-white px-12 py-4 rounded-full text-lg font-medium transition-all hover:scale-105">
            立即预约
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-xl font-serif mb-2">MIRASUIT</div>
            <p className="text-zinc-500 text-sm">意式定制西装艺术</p>
          </div>
          <div className="text-zinc-500 text-sm text-center">
            <p>上海市静安区南京西路1788号</p>
            <p className="mt-1">Milan Via della Spiga 26</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
