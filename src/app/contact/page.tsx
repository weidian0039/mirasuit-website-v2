export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-serif tracking-wider">MIRASUIT</a>
          <div className="flex items-center gap-6 text-sm">
            <a href="/#story" className="text-zinc-400 hover:text-white transition-colors">品牌故事</a>
            <a href="/toc" className="text-zinc-400 hover:text-white transition-colors">定制流程</a>
            <a href="/b2b" className="text-zinc-400 hover:text-white transition-colors">合作咨询</a>
            <a href="/about" className="text-zinc-400 hover:text-white transition-colors">关于我们</a>
          </div>
          <a href="/#book" className="bg-orange-600 hover:bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors">
            预约
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-6 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">预约您的专属定制顾问</h1>
          <p className="text-xl text-zinc-400">期待与您相遇，开启定制之旅</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-serif text-center mb-8">立即预约</h2>
          <form className="space-y-4">
            <input type="text" placeholder="姓名 *" required className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-orange-600 focus:outline-none transition-colors" />
            <input type="tel" placeholder="手机号 *" required className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-orange-600 focus:outline-none transition-colors" />
            <input type="email" placeholder="邮箱" className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-orange-600 focus:outline-none transition-colors" />
            <select className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-orange-600 focus:outline-none transition-colors text-zinc-400">
              <option value="">选择咨询类型</option>
              <option value="personal">个人定制</option>
              <option value="corporate">企业定制</option>
              <option value="wedding">婚礼定制</option>
              <option value="other">其他</option>
            </select>
            <textarea placeholder="您的需求（选填）" rows={4} className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-orange-600 focus:outline-none transition-colors resize-none" />
            <button type="submit" className="w-full bg-orange-600 hover:bg-orange-500 text-white py-4 rounded-full font-medium transition-colors">
              获取报价
            </button>
          </form>
        </div>
      </section>

      {/* Store Locations */}
      <section className="py-20 px-6 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-12">门店地址</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <h3 className="text-xl font-medium mb-4">上海旗舰店</h3>
              <div className="space-y-2 text-zinc-400">
                <p>📍 上海市静安区南京西路1788号国际中心</p>
                <p>📞 400-888-9999</p>
                <p>🕐 周一至周日 10:00 - 21:00</p>
              </div>
              <div className="mt-6 p-4 bg-zinc-800 rounded-lg">
                <p className="text-sm text-zinc-500">二维码</p>
                <div className="w-24 h-24 bg-zinc-700 rounded-lg mt-2 flex items-center justify-center text-zinc-500">🟩</div>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <h3 className="text-xl font-medium mb-4">Milan 工坊</h3>
              <div className="space-y-2 text-zinc-400">
                <p>📍 Via della Spiga 26, 20121 Milano MI, Italy</p>
                <p>📞 +39 02 1234 5678</p>
                <p>🕐 周一至周五 09:00 - 19:00</p>
              </div>
              <div className="mt-6 p-4 bg-zinc-800 rounded-lg">
                <p className="text-sm text-zinc-500">预约制</p>
                <p className="text-sm text-zinc-400 mt-2">请提前2天预约</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto text-center text-zinc-500 text-sm">
          <p>上海市静安区南京西路1788号 | Milan Via della Spiga 26</p>
        </div>
      </footer>
    </main>
  )
}
