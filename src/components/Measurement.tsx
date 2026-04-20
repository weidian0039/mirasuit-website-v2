const measurementSteps = [
  { step: '01', title: '肩宽测量', description: '从左肩点到右肩点' },
  { step: '02', title: '胸围测量', description: '胸部最丰满处' },
  { step: '03', title: '腰围测量', description: '腰部最细处' },
  { step: '04', title: '袖长测量', description: '肩点到手腕' },
  { step: '05', title: '裤长测量', description: '腰点到脚踝' },
]

export default function Measurement() {
  return (
    <section id="measurement" className="section-padding bg-charcoal text-white">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">精准量体系统</h2>
          <p className="text-white/60">18项专业测量，确保每一件西装都完美贴合</p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {measurementSteps.map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full border border-accent flex items-center justify-center">
                <span className="text-accent font-mono text-sm">{item.step}</span>
              </div>
              <h3 className="font-medium mb-2">{item.title}</h3>
              <p className="text-xs text-white/50">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#booking" className="btn-primary">
            预约量体
          </a>
        </div>
      </div>
    </section>
  )
}
