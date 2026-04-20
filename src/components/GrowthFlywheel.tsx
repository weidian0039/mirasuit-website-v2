const flywheelSteps = [
  { icon: '📏', label: '精准量体' },
  { icon: '🧵', label: '精选面料' },
  { icon: '✂️', label: '匠心裁剪' },
  { icon: '👔', label: '试穿调整' },
  { icon: '✨', label: '精致交付' },
]

export default function GrowthFlywheel() {
  return (
    <section className="bg-primary text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">定制之旅</h2>
          <p className="text-white/60">从量体到交付，五步专属体验</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {flywheelSteps.map((step, index) => (
            <div key={step.label} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center text-3xl group-hover:bg-accent transition-colors duration-300">
                {step.icon}
              </div>
              <p className="text-sm tracking-wide">{step.label}</p>
              {index < flywheelSteps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 text-white/20">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
