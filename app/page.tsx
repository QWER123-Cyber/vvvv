import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-red-800">中国旅游景点</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-700 hover:text-red-600 font-medium">首页</Link>
              <Link href="/attractions" className="text-gray-700 hover:text-red-600 font-medium">景点详情</Link>
              <Link href="/food" className="text-gray-700 hover:text-red-600 font-medium">美食推荐</Link>
              <Link href="/transport" className="text-gray-700 hover:text-red-600 font-medium">交通指南</Link>
              <Link href="/wuhan" className="text-gray-700 hover:text-red-600 font-medium">黄鹤楼</Link>
              <Link href="/game" className="text-gray-700 hover:text-red-600 font-medium">翻牌游戏</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 封面图 */}
      <div className="mt-16 relative group">
        <div className="h-[600px] w-full overflow-hidden">
          <img 
            src="/images/故宫午门.jpg" 
            alt="中国旅游景点" 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg animate-fade-in-up tracking-tight">中国旅游景点</h1>
              <p className="text-2xl md:text-3xl text-white drop-shadow-md animate-fade-in-up delay-100 max-w-3xl mx-auto">探索千年文明，感受壮丽山河</p>
              <div className="mt-8 animate-fade-in-up delay-200">
                <Link 
                  href="/forbidden-city" 
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                >
                  探索故宫
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 热门景点 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 relative inline-block">
            <span className="relative z-10">热门景点</span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-red-200 rounded-full -z-10"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/forbidden-city" className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/故宫午门.jpg" 
                    alt="故宫" 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">世界文化遗产</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-red-600 transition-colors duration-300">故宫博物院</h3>
                  <p className="text-gray-600 line-clamp-3">北京故宫，旧称紫禁城，是中国明清两代的皇家宫殿，世界五大宫之一。</p>
                  <div className="mt-4 flex items-center text-yellow-600">
                    <span className="mr-1">⭐⭐⭐⭐⭐</span>
                    <span className="text-sm text-gray-500">(世界文化遗产)</span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="#" className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/黄山.jpg" 
                    alt="黄山" 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">世界文化与自然双重遗产</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">黄山</h3>
                  <p className="text-gray-600 line-clamp-3">位于安徽省南部，以奇松、怪石、云海、温泉、冬雪“五绝”著称。</p>
                  <div className="mt-4 flex items-center text-yellow-600">
                    <span className="mr-1">⭐⭐⭐⭐⭐</span>
                    <span className="text-sm text-gray-500">(世界文化与自然双重遗产)</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="#" className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/八达岭长城.jpg" 
                    alt="长城" 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">世界文化遗产</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">长城</h3>
                  <p className="text-gray-600 line-clamp-3">中国古代的军事防御工程，世界七大奇迹之一。</p>
                  <div className="mt-4 flex items-center text-yellow-600">
                    <span className="mr-1">⭐⭐⭐⭐⭐</span>
                    <span className="text-sm text-gray-500">(世界文化遗产)</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* 主要景点推荐 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">主要景点</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/attractions?spot=huangshan-pine" className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src="/images/奇松.jpg" 
                  alt="黄山松" 
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">黄山松</h3>
                  <p className="text-gray-600">黄山松是由黄山独特地貌、气候而形成的中国松树的一种变种。</p>
                </div>
              </div>
            </Link>

            <Link href="/attractions?spot=stone" className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 bg-[url('/images/怪石.jpg')] bg-cover bg-center"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">怪石</h3>
                  <p className="text-gray-600">以奇取胜，以多著称。已被命名的怪石有120多处。</p>
                </div>
              </div>
            </Link>

            <Link href="/attractions?spot=sea-of-clouds" className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 bg-[url('/images/云海.jpg')] bg-cover bg-center"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">云海</h3>
                  <p className="text-gray-600">自古黄山云成海，黄山是云雾之乡，以峰为体，以云为衣。</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* 特色体验 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">特色体验</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-40 bg-[url('/images/黄山.jpg')] bg-cover bg-center"></div>
              <div className="p-6">
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full p-3 mr-4">
                    <span className="text-red-600 text-xl font-bold">🍜</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">特色美食</h3>
                    <p className="text-gray-600 mb-4">黄山美食文化源远流长，徽菜是中国八大菜系之一，以鲜、嫩、香、脆著称。</p>
                    <Link href="/food" className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300">
                      了解更多
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-40 bg-[url('/images/八达岭长城.jpg')] bg-cover bg-center"></div>
              <div className="p-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <span className="text-blue-600 text-xl font-bold">🚗</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">交通指南</h3>
                    <p className="text-gray-600 mb-4">黄山交通便利，可通过飞机、火车、汽车等多种方式到达。</p>
                    <Link href="/transport" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300">
                      了解更多
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </main>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">中国旅游景点</h3>
              <p className="text-gray-400">
                提供中国著名旅游景点的详细介绍，包括历史文化、景点特色、旅游信息等。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">快速链接</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">首页</Link></li>
                <li><Link href="/attractions" className="text-gray-400 hover:text-white transition-colors duration-300">景点详情</Link></li>
                <li><Link href="/food" className="text-gray-400 hover:text-white transition-colors duration-300">美食推荐</Link></li>
                <li><Link href="/transport" className="text-gray-400 hover:text-white transition-colors duration-300">交通指南</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">联系我们</h3>
              <p className="text-gray-400 mb-2">电话：123-4567-8910</p>
              <p className="text-gray-400 mb-2">邮箱：info@huangshan-tour.com</p>
              <p className="text-gray-400">地址：安徽省黄山市黄山区汤口镇</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© 2023 黄山旅游. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
