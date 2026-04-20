export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-serif text-xl tracking-wider mb-4">MIRASUIT</p>
            <p className="text-sm text-white/60">
              意式定制西装，传承三代匠心。
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-wider mb-4">快速链接</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#products" className="hover:text-accent transition-colors">定制套餐</a></li>
              <li><a href="#story" className="hover:text-accent transition-colors">品牌故事</a></li>
              <li><a href="#booking" className="hover:text-accent transition-colors">预约体验</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-wider mb-4">联系我们</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>上海 · 静安区 · 铜仁路 88 号</li>
              <li>+86 21 6288 8888</li>
              <li>hello@mirasuit.com</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs tracking-wider mb-4">关注我们</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
                <span className="text-xs">微</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
                <span className="text-xs">小</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© 2026 MIRASUIT. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">隐私政策</a>
            <a href="#" className="hover:text-accent transition-colors">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
