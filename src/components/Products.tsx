const products = [
  {
    name: '经典商务套装',
    description: '沉稳内敛，彰显专业风范',
    price: '¥8,800 起',
  },
  {
    name: '婚礼定制西装',
    description: '专属时刻，定制一生回忆',
    price: '¥12,800 起',
  },
  {
    name: '休闲时尚套装',
    description: '意式优雅，日常工作首选',
    price: '¥6,800 起',
  },
]

export default function Products() {
  return (
    <section id="products" className="section-padding bg-cream">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">精选定制套餐</h2>
          <p className="text-charcoal/60">三种套餐，满足不同场景需求</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-primary/5 to-accent/10 mb-6" />
              <h3 className="font-serif text-xl mb-2">{product.name}</h3>
              <p className="text-sm text-charcoal/60 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-accent font-medium">{product.price}</span>
                <a href="#booking" className="btn-secondary text-xs">
                  预约
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
