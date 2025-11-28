import Link from 'next/link';

export default function FoodPage() {
  return (
    <div className="min-h-screen pt-20" style={{
      background: 'linear-gradient(135deg, #fff5e6 0%, #ffd700 100%)',
      backgroundImage: `url('/images/背景图.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {/* 导航栏 */}
      <nav className="bg-cover bg-center bg-no-repeat shadow-md border-b-2 border-chinese-gold fixed top-0 left-0 right-0 z-50" style={{ backgroundImage: `url('/images/背景图.jpg')` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-chinese-red font-serif">中国旅游景点</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-700 hover:text-chinese-red font-medium">首页</Link>
              <Link href="/attractions" className="text-gray-700 hover:text-chinese-red font-medium">景点详情</Link>
              <Link href="/food" className="text-gray-700 hover:text-chinese-red font-medium">美食推荐</Link>
              <Link href="/transport" className="text-gray-700 hover:text-chinese-red font-medium">交通指南</Link>
              <Link href="/wuhan" className="text-gray-700 hover:text-chinese-red font-medium">黄鹤楼</Link>
              <Link href="/game" className="text-gray-700 hover:text-chinese-red font-medium">翻牌游戏</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="chinese-title mb-6">美食推荐</h2>
          <div className="chinese-card p-8">
            <h3 className="text-2xl font-semibold text-chinese-red-dark mb-4 font-serif">中国美食文化</h3>
            <p className="text-gray-600 mb-6">中国美食历史悠久，菜系丰富多样，每个地区都有其独特的风味和特色小吃。</p>
            {/* 中国美食主题图片 */}
            <div className="relative h-64 overflow-hidden rounded-lg mb-8">
              <img 
                src="/images/中国美食.jpg" 
                alt="中国美食" 
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="chinese-card p-6 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-chinese-red-dark mb-3 font-[var(--font-ma-shan-zheng)]">北京烤鸭</h4>
                <div className="h-40 overflow-hidden">
                  <img 
                    src="/images/北京烤鸭.jpg" 
                    alt="北京烤鸭" 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-gray-600">北京烤鸭是北京的传统名菜，以色泽红艳、肉质细嫩、味道醇厚而闻名。</p>
              </div>
              <div className="chinese-card p-6 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-chinese-red-dark mb-3 font-[var(--font-ma-shan-zheng)]">上海生煎包</h4>
                <div className="h-40 overflow-hidden">
                  <img 
                    src="/images/上海生煎包.jpg" 
                    alt="上海生煎包" 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-gray-600">上海生煎包是上海的传统小吃，外皮底部煎得金黄酥脆，内部汤汁丰富。</p>
              </div>
              <div className="chinese-card p-6 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-chinese-red-dark mb-3 font-[var(--font-ma-shan-zheng)]">河北驴肉火烧</h4>
                <div className="h-40 overflow-hidden">
                  <img 
                    src="/images/河北驴肉火烧.jpg" 
                    alt="河北驴肉火烧" 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-gray-600">河北驴肉火烧是河北的传统名吃，以新鲜驴肉夹入酥脆的火烧中，口感丰富。</p>
              </div>
              <div className="chinese-card p-6 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-chinese-red-dark mb-3 font-[var(--font-ma-shan-zheng)]">湖北热干面</h4>
                <div className="h-40 overflow-hidden">
                  <img 
                    src="/images/湖北热干面.jpg" 
                    alt="湖北热干面" 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-gray-600">湖北热干面是武汉的特色小吃，以面条筋道、芝麻酱香浓而著称。</p>
              </div>

              <div className="chinese-card p-6 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-chinese-red-dark mb-3 font-[var(--font-ma-shan-zheng)]">吉林冷面</h4>
                <div className="h-40 overflow-hidden">
                  <img 
                    src="/images/吉林冷面.jpg" 
                    alt="吉林冷面" 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-gray-600">吉林冷面是东北地区的特色美食，以凉爽的口感和酸甜的味道而受到喜爱。</p>
              </div>
              <div className="chinese-card p-6 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-chinese-red-dark mb-3 font-[var(--font-ma-shan-zheng)]">广西螺蛳粉</h4>
                <div className="h-40 overflow-hidden">
                  <img 
                    src="/images/广西螺蛳粉.jpg" 
                    alt="广西螺蛳粉" 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-gray-600">广西螺蛳粉是广西壮族自治区的传统名吃，以独特的风味和丰富的配料著称。</p>
              </div>
              <div className="chinese-card p-6 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-chinese-red-dark mb-3 font-[var(--font-ma-shan-zheng)]">河南胡辣汤</h4>
                <div className="h-40 overflow-hidden">
                  <img 
                    src="/images/河南胡辣汤.jpg" 
                    alt="河南胡辣汤" 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-gray-600">河南胡辣汤是河南地区的传统早餐，以其麻辣鲜香的口感而闻名。</p>
              </div>
              <div className="chinese-card p-6 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-chinese-red-dark mb-3 font-[var(--font-ma-shan-zheng)]">浙江金华火腿</h4>
                <div className="h-40 overflow-hidden">
                  <img 
                    src="/images/浙江金华火腿.jpg" 
                    alt="浙江金华火腿" 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-gray-600">浙江金华火腿是中国传统的腌肉制品，以色泽鲜艳、香气浓郁而著称。</p>
              </div>
              <div className="chinese-card p-6 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-chinese-red-dark mb-3 font-[var(--font-ma-shan-zheng)]">辽宁鸡架</h4>
                <div className="h-40 overflow-hidden">
                  <img 
                    src="/images/辽宁鸡架.jpg" 
                    alt="辽宁鸡架" 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-gray-600">辽宁鸡架是东北地区的特色小吃，以其独特的腌制和烹饪方法而受到欢迎。</p>
              </div>
              <div className="chinese-card p-6 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-chinese-red-dark mb-3 font-[var(--font-ma-shan-zheng)]">四川火锅</h4>
                <div className="h-40 overflow-hidden">
                  <img 
                    src="/images/火锅.jpg" 
                    alt="四川火锅" 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-gray-600">四川火锅是中国著名的传统美食，以麻辣鲜香的味道和丰富的食材搭配而闻名。</p>
              </div>
              <div className="chinese-card p-6 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-chinese-red-dark mb-3 font-[var(--font-ma-shan-zheng)]">中国美食</h4>
                <div className="h-40 overflow-hidden">
                  <img 
                    src="/images/中国美食.jpg" 
                    alt="中国美食" 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-gray-600">中国美食文化博大精深，各地特色美食汇聚了中华饮食的精髓。</p>
              </div>
            </div>
            <Link 
              href="/" 
              className="chinese-button mt-8" 
            >
              返回首页
            </Link>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-chinese-red-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-serif">中国旅游景点</h3>
              <p className="text-gray-400">
                提供中国著名旅游景点的详细介绍，包括历史文化、景点特色、旅游信息等。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-serif">快速链接</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">首页</Link></li>
                <li><Link href="/attractions" className="text-gray-400 hover:text-white transition-colors duration-300">景点详情</Link></li>
                <li><Link href="/food" className="text-gray-400 hover:text-white transition-colors duration-300">美食推荐</Link></li>
                <li><Link href="/transport" className="text-gray-400 hover:text-white transition-colors duration-300">交通指南</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-serif">联系我们</h3>
              <p className="text-gray-400 mb-2">电话：123-4567-8910</p>
              <p className="text-gray-400 mb-2">邮箱：info@huangshan-tour.com</p>
              <p className="text-gray-400">地址：安徽省黄山市黄山区汤口镇</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© 2023 中国旅游景点. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}