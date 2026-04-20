import '../globals.css'

export default function HomeB() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-serif tracking-wider">MIRASUIT</div>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#features" className="hover:text-white transition-colors">核心优势</a>
            <a href="#process" className="hover:text-white transition-colors">AI定制</a>
            <a href="#b2b" className="hover:text-white transition-colors">合作咨询</a>
            <a href="#about" className="hover:text-white transition-colors">关于我们</a>
          </div>
          <a href="#book" className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
            预约
          </a>
        </div>
      </nav>

      {/* Hero Section - Variant B (Treatment) */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black" />

        {/* Gold accent line */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-orange-600/50 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-20">
          <h1 className="text-5xl md:text-7xl font-serif tracking-wide mb-6">
            AI 定制，3 分钟预见未来的你
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-4">
            上传照片，AI 即刻生成定制效果
          </p>
          <p className="text-sm text-zinc-600 mb-12">
            已有 <span className="text-orange-500 font-medium">328</span> 位精英预约
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#book" className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105">
              3 分钟定制
            </a>
            <a href="#features" className="border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-colors">
              预约咨询
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600">
          <span className="text-xs">向下探索</span>
          <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
        </div>
      </section>

      {/* Value Props Section - Variant B */}
      <section id="features" className="py-32 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">为什么选择 MIRASUIT</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 mx-auto mb-6 flex items-center justify-center text-2xl">⏱️</div>
              <h3 className="text-lg font-medium mb-2">3 分钟定制</h3>
              <p className="text-zinc-400 text-sm">上传照片 → AI 分析身材 → 确认下单</p>
              <p className="text-orange-500 text-xs mt-2">累计服务 10,000+ 用户</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 mx-auto mb-6 flex items-center justify-center text-2xl">✨</div>
              <h3 className="text-lg font-medium mb-2">AI 生成效果</h3>
              <p className="text-zinc-400 text-sm">看到穿着效果再下单，信心 +300%</p>
              <p className="text-orange-500 text-xs mt-2">85% 用户反馈"超出预期"</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 mx-auto mb-6 flex items-center justify-center text-2xl">✅</div>
              <h3 className="text-lg font-medium mb-2">95% 合身率</h3>
              <p className="text-zinc-400 text-sm">AI 视觉量体 + 免费改衣</p>
              <p className="text-orange-500 text-xs mt-2">行业最高合身率标准</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Process Section */}
      <section id="process" className="py-32 px-6 bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-4">AI 定制流程</h2>
          <p className="text-zinc-400 text-center mb-16">简单三步，开启您的专属定制</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <div className="text-4xl font-serif text-orange-600 mb-6">01</div>
              <h3 className="text-xl font-medium mb-3">上传照片</h3>
              <p className="text-zinc-400 text-sm">拍摄或上传您的照片，AI 将分析您的身形特征</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <div className="text-4xl font-serif text-orange-600 mb-6">02</div>
              <h3 className="text-xl font-medium mb-3">AI 生成效果</h3>
              <p className="text-zinc-400 text-sm">即时预览不同面料和款式的穿着效果</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <div className="text-4xl font-serif text-orange-600 mb-6">03</div>
              <h3 className="text-xl font-medium mb-3">确认下单</h3>
              <p className="text-zinc-400 text-sm">满意后确认，匠人手工裁剪，7-14 天交付</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="book" className="py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">3 分钟，获得您的专属定制</h2>
          <p className="text-zinc-400 mb-12">
            上传照片，让 AI 为您生成定制效果，开启前所未有的定制体验
          </p>
          <a href="/contact" className="inline-block bg-orange-600 hover:bg-orange-500 text-white px-12 py-4 rounded-full text-lg font-medium transition-all hover:scale-105">
            立即开始
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-xl font-serif mb-2">MIRASUIT</div>
            <p className="text-zinc-500 text-sm">AI 驱动定制新体验</p>
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
