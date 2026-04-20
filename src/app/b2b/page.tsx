export default function B2BPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-serif tracking-wider">MIRASUIT</a>
          <div className="flex items-center gap-6 text-sm">
            <a href="/#story" className="text-zinc-400 hover:text-white transition-colors">品牌故事</a>
            <a href="/toc" className="text-zinc-400 hover:text-white transition-colors">定制流程</a>
            <a href="/b2b" className="text-orange-500">合作咨询</a>
            <a href="/contact" className="text-zinc-400 hover:text-white transition-colors">联系我们</a>
          </div>
          <a href="#contact" className="bg-orange-600 hover:bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors">
            获取方案
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-6 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">打造您的企业名片</h1>
          <p className="text-xl text-zinc-400">20+ 品牌的共同选择</p>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-12">为什么选择 MIRASUIT 企业定制</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '💼', title: '品牌提升', desc: '统一着装展现企业形象，提升客户信任感' },
              { icon: '🎯', title: '精准定制', desc: '根据企业文化和员工特点，打造专属设计方案' },
              { icon: '✂️', title: '匠心品质', desc: '意大利工艺，三代传承，品质保证' },
            ].map((p) => (
              <div key={p.title} className="text-center p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-xl font-medium mb-2">{p.title}</h3>
                <p className="text-zinc-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6 bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-4">服务案例</h2>
          <p className="text-zinc-400 text-center mb-12">已为20+知名企业提供定制服务</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: '投行精英', count: '120+套', desc: '为投资银行团队打造专业形象' },
              { name: '法律顾问', count: '80+套', desc: '为律所合伙人定制正装' },
              { name: '科技新贵', count: '200+套', desc: '为互联网公司高管定制商务装' },
            ].map((c) => (
              <div key={c.name} className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <div className="text-2xl font-medium mb-2">{c.name}</div>
                <div className="text-3xl font-serif text-orange-600 mb-2">{c.count}</div>
                <p className="text-zinc-400 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-12">企业定制方案</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: '基础版', price: '¥3,800/套', features: ['经典款式', 'VBC面料', '2周交付', '1次修改'] },
              { name: '标准版', price: '¥5,800/套', features: ['定制款式', 'Zegna面料', '3周交付', '2次修改', 'logo定制'], popular: true },
              { name: '尊享版', price: '¥9,800/套', features: ['全定制', 'Loro Piana面料', '4周交付', '无限修改', '专属顾问', '上门量体'] },
            ].map((t) => (
              <div key={t.name} className={`p-8 rounded-2xl border ${t.popular ? 'bg-zinc-900 border-orange-600' : 'bg-zinc-900/50 border-zinc-800'}`}>
                {t.popular && <div className="text-xs text-orange-500 mb-2">最受欢迎</div>}
                <h3 className="text-xl font-medium mb-2">{t.name}</h3>
                <div className="text-2xl font-serif text-orange-600 mb-6">{t.price}</div>
                <ul className="space-y-2 text-sm text-zinc-400">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-orange-600">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`mt-6 block text-center py-3 rounded-full font-medium transition-colors ${t.popular ? 'bg-orange-600 hover:bg-orange-500 text-white' : 'border border-zinc-700 hover:border-zinc-500 text-zinc-300'}`}>
                  咨询详情
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-6 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-4">获取企业方案</h2>
          <p className="text-zinc-400 text-center mb-8">留下联系方式，我们的顾问将在24小时内与您联系</p>
          <form className="space-y-4">
            <input type="text" placeholder="公司名称" className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-orange-600 focus:outline-none transition-colors" />
            <input type="text" placeholder="联系人" className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-orange-600 focus:outline-none transition-colors" />
            <input type="tel" placeholder="联系电话" className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-orange-600 focus:outline-none transition-colors" />
            <input type="email" placeholder="邮箱" className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-orange-600 focus:outline-none transition-colors" />
            <textarea placeholder="需求描述（员工人数、定制套数等）" rows={4} className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-orange-600 focus:outline-none transition-colors resize-none" />
            <button type="submit" className="w-full bg-orange-600 hover:bg-orange-500 text-white py-4 rounded-full font-medium transition-colors">
              提交咨询
            </button>
          </form>
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
