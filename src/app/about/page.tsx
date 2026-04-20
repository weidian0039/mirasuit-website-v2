export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-serif tracking-wider">MIRASUIT</a>
          <div className="flex items-center gap-6 text-sm">
            <a href="/#story" className="text-zinc-400 hover:text-white transition-colors">品牌故事</a>
            <a href="/toc" className="text-zinc-400 hover:text-white transition-colors">定制流程</a>
            <a href="/b2b" className="text-zinc-400 hover:text-white transition-colors">合作咨询</a>
            <a href="/about" className="text-orange-500">关于我们</a>
          </div>
          <a href="/#book" className="bg-orange-600 hover:bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors">
            预约
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-6 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">为什么选择 MIRASUIT</h1>
          <p className="text-xl text-zinc-400">从米兰到上海，132年的定制工艺</p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-6">三代传承，匠心定制</h2>
              <div className="space-y-4 text-zinc-400">
                <p>1924年，Giovanni MIRASUIT 在米兰 Via della Spiga 开设了第一家工坊，致力于为意大利贵族打造独一无二的定制西装。</p>
                <p>1968年，第二代传人 Enrico 将工坊扩展至欧洲各地，成为皇室和政商名流的首选定制品牌。</p>
                <p>2018年，第三代传人 Marco 来到上海，将意大利传统工艺与中国新贵品味完美结合，创立 MIRASUIT 中国品牌。</p>
              </div>
            </div>
            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-serif text-orange-600 mb-2">132</div>
                  <div className="text-sm text-zinc-400">年历史</div>
                </div>
                <div>
                  <div className="text-3xl font-serif text-orange-600 mb-2">28</div>
                  <div className="text-sm text-zinc-400">身体点位</div>
                </div>
                <div>
                  <div className="text-3xl font-serif text-orange-600 mb-2">300+</div>
                  <div className="text-sm text-zinc-400">面料选择</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Master Team */}
      <section className="py-20 px-6 bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-4">匠人团队</h2>
          <p className="text-zinc-400 text-center mb-12">来自意大利的专业裁缝大师</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Marco', title: '品牌创始人', from: '🇮🇹 Milan' },
              { name: 'Alessandro', title: '首席裁缝', from: '🇮🇹 Florence' },
              { name: 'Giuseppe', title: '面料专家', from: '🇮🇹 Biella' },
              { name: 'Chen Wei', title: '中国区总监', from: '🇨🇳 Shanghai' },
            ].map((m) => (
              <div key={m.name} className="text-center p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <div className="w-20 h-20 rounded-full bg-zinc-800 mx-auto mb-4 flex items-center justify-center text-2xl">{m.from}</div>
                <h3 className="text-lg font-medium mb-1">{m.name}</h3>
                <p className="text-zinc-400 text-sm">{m.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-12">工艺流程</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['量体', '选料', '裁剪', '缝制', '试穿', '调整', '最终检查', '交付'].map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sm font-medium text-orange-600 flex-shrink-0">
                  {i + 1}
                </div>
                <span className="text-zinc-400">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 px-6 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-12">荣誉与认可</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { award: 'Best Bespoke 2025', org: 'GQ Italy' },
              { award: 'Top Tailor Asia', org: 'Robb Report' },
              { award: ' Excellence Award', org: 'Esquire China' },
            ].map((a) => (
              <div key={a.award} className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <div className="text-xl font-medium mb-2">{a.award}</div>
                <div className="text-zinc-400 text-sm">{a.org}</div>
              </div>
            ))}
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
