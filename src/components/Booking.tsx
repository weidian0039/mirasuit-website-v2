'use client'

import { useState } from 'react'

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    package: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle booking submission
    console.log('Booking submitted:', formData)
  }

  return (
    <section id="booking" className="section-padding bg-primary text-white">
      <div className="container-narrow mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">预约您的专属定制</h2>
            <p className="text-white/60 mb-8">
              专业量体师将在您选择的时间和地点为您提供一对一咨询服务。
            </p>
            <div className="space-y-4 text-sm text-white/80">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full" />
                <span>上海 · 静安区 · 铜仁路 88 号</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full" />
                <span>Milan · Via Monte Napoleone 8</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full" />
                <span>周一至周六 10:00 - 19:00</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white/5 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs tracking-wider mb-2">您的姓名</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent"
                  placeholder="请输入姓名"
                />
              </div>

              <div>
                <label className="block text-xs tracking-wider mb-2">联系电话</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent"
                  placeholder="138-xxxx-xxxx"
                />
              </div>

              <div>
                <label className="block text-xs tracking-wider mb-2">预约套餐</label>
                <select
                  value={formData.package}
                  onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-accent"
                >
                  <option value="" className="text-primary">请选择套餐</option>
                  <option value="classic" className="text-primary">经典商务套装 ¥8,800</option>
                  <option value="wedding" className="text-primary">婚礼定制西装 ¥12,800</option>
                  <option value="casual" className="text-primary">休闲时尚套装 ¥6,800</option>
                </select>
              </div>

              <button type="submit" className="w-full btn-primary">
                确认预约
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
