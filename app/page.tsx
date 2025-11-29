'use client';

import Link from 'next/link';
import React from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* 导航栏 */}
      <nav className="bg-cover bg-center bg-no-repeat shadow-md fixed top-0 left-0 right-0 z-50 border-b-2 border-chinese-gold" style={{ backgroundImage: `url('/images/背景图.jpg')` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-chinese-red chinese-text-shadow">中国旅游文化网</span>
            </div>
            {/* 桌面端导航 */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-chinese-ink hover:text-chinese-red font-medium border-b-2 border-transparent hover:border-chinese-red transition-all">首页</Link>
              <Link href="/attractions" className="text-chinese-ink hover:text-chinese-red font-medium border-b-2 border-transparent hover:border-chinese-red transition-all">景点详情</Link>
              <Link href="/food" className="text-chinese-ink hover:text-chinese-red font-medium border-b-2 border-transparent hover:border-chinese-red transition-all">美食推荐</Link>
              <Link href="/transport" className="text-chinese-ink hover:text-chinese-red font-medium border-b-2 border-transparent hover:border-chinese-red transition-all">交通指南</Link>
              <Link href="/wuhan" className="text-chinese-ink hover:text-chinese-red font-medium border-b-2 border-transparent hover:border-chinese-red transition-all">黄鹤楼</Link>
              <Link href="/game" className="text-chinese-ink hover:text-chinese-red font-medium border-b-2 border-transparent hover:border-chinese-red transition-all">翻牌游戏</Link>
            </div>
            {/* 移动端汉堡菜单按钮 */}
            <div className="md:hidden flex items-center">
              <button 
                className="text-chinese-ink hover:text-chinese-red focus:outline-none"
                onClick={toggleMenu}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 移动端导航菜单 */}
      {isMenuOpen && (
        <div className="md:hidden bg-chinese-light fixed inset-0 z-50">
          <div className="flex flex-col h-full p-4">
            <div className="flex justify-end mb-8">
              <button 
                className="text-chinese-ink hover:text-chinese-red focus:outline-none"
                onClick={toggleMenu}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col space-y-6 items-center justify-start pt-8 flex-1">
              <Link 
                href="/" 
                className="text-2xl font-medium text-chinese-ink hover:text-chinese-red transition-colors"
                onClick={closeMenu}
              >
                首页
              </Link>
              <Link 
                href="/attractions" 
                className="text-2xl font-medium text-chinese-ink hover:text-chinese-red transition-colors"
                onClick={closeMenu}
              >
                景点详情
              </Link>
              <Link 
                href="/food" 
                className="text-2xl font-medium text-chinese-ink hover:text-chinese-red transition-colors"
                onClick={closeMenu}
              >
                美食推荐
              </Link>
              <Link 
                href="/transport" 
                className="text-2xl font-medium text-chinese-ink hover:text-chinese-red transition-colors"
                onClick={closeMenu}
              >
                交通指南
              </Link>
              <Link 
                href="/wuhan" 
                className="text-2xl font-medium text-chinese-ink hover:text-chinese-red transition-colors"
                onClick={closeMenu}
              >
                黄鹤楼
              </Link>
              <Link 
                href="/game" 
                className="text-2xl font-medium text-chinese-ink hover:text-chinese-red transition-colors"
                onClick={closeMenu}
              >
                翻牌游戏
              </Link>
            </div>
          </div>
        </div>
      )}

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
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg animate-fade-in-up tracking-tight font-[var(--font-ma-shan-zheng)]">中国旅游文化网</h1>
              <p className="text-2xl md:text-3xl text-white drop-shadow-md animate-fade-in-up delay-100 max-w-3xl mx-auto font-[var(--font-noto-serif-sc)]">探索千年文明，感受壮丽山河</p>
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
          <h2 className="text-3xl font-bold text-chinese-ink mb-4 text-center">
            <span className="chinese-title">热门景点</span>
          </h2>
          <div className="floral-divider mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/forbidden-city" className="block">
              <div className="chinese-card rounded-xl overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/故宫午门.jpg" 
                    alt="故宫" 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <span className="seal">世界文化遗产</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-chinese-ink mb-2 group-hover:text-chinese-red transition-colors duration-300 font-[var(--font-ma-shan-zheng)]">故宫博物院</h3>
                  <p className="text-chinese-ink line-clamp-3">北京故宫，旧称紫禁城，是中国明清两代的皇家宫殿，世界五大宫之一。</p>
                  <div className="mt-4 flex items-center text-yellow-600">
                    <span className="mr-1">⭐⭐⭐⭐⭐</span>
                    <span className="text-sm text-gray-500">(世界文化遗产)</span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="#" className="block">
              <div className="chinese-card rounded-xl overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/黄山.jpg" 
                    alt="黄山" 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <span className="seal">世界文化与自然双重遗产</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-chinese-ink mb-2 group-hover:text-chinese-green transition-colors duration-300 font-[var(--font-ma-shan-zheng)]">黄山</h3>
                  <p className="text-chinese-ink line-clamp-3">位于安徽省南部，以奇松、怪石、云海、温泉、冬雪“五绝”著称。</p>
                  <div className="mt-4 flex items-center text-yellow-600">
                    <span className="mr-1">⭐⭐⭐⭐⭐</span>
                    <span className="text-sm text-gray-500">(世界文化与自然双重遗产)</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="#" className="block">
              <div className="chinese-card rounded-xl overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/八达岭长城.jpg" 
                    alt="长城" 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <span className="seal">世界文化遗产</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-chinese-ink mb-2 group-hover:text-chinese-red transition-colors duration-300 font-[var(--font-ma-shan-zheng)]">长城</h3>
                  <p className="text-chinese-ink line-clamp-3">中国古代的军事防御工程，世界七大奇迹之一。</p>
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
          <h2 className="text-3xl font-bold text-chinese-ink mb-4 text-center">
            <span className="chinese-title">主要景点</span>
          </h2>
          <div className="floral-divider mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/attractions?spot=huangshan-pine" className="block">
              <div className="chinese-card rounded-lg overflow-hidden">
                <img 
                  src="/images/奇松.jpg" 
                  alt="黄山松" 
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-chinese-ink mb-2 font-[var(--font-ma-shan-zheng)]">黄山松</h3>
                  <p className="text-chinese-ink">黄山松是由黄山独特地貌、气候而形成的中国松树的一种变种。</p>
                </div>
              </div>
            </Link>

            <Link href="/attractions?spot=stone" className="block">
              <div className="chinese-card rounded-lg overflow-hidden">
                <img 
                  src="/images/怪石.jpg" 
                  alt="怪石" 
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-chinese-ink mb-2 font-[var(--font-ma-shan-zheng)]">怪石</h3>
                  <p className="text-chinese-ink">以奇取胜，以多著称。已被命名的怪石有120多处。</p>
                </div>
              </div>
            </Link>

            <Link href="/attractions?spot=sea-of-clouds" className="block">
              <div className="chinese-card rounded-lg overflow-hidden">
                <img 
                  src="/images/云海.jpg" 
                  alt="云海" 
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-chinese-ink mb-2 font-[var(--font-ma-shan-zheng)]">云海</h3>
                  <p className="text-chinese-ink">自古黄山云成海，黄山是云雾之乡，以峰为体，以云为衣。</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* 特色体验 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-chinese-ink mb-4 text-center">
            <span className="chinese-title">特色体验</span>
          </h2>
          <div className="floral-divider mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="chinese-card rounded-lg overflow-hidden hover:-translate-y-1 ruyi-decoration">
              <img 
                src="/images/黄山.jpg" 
                alt="黄山" 
                className="h-40 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-start">
                  <div className="bg-chinese-red/10 rounded-full p-3 mr-4">
                    <span className="text-chinese-red text-xl font-bold">🍜</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-chinese-ink mb-2 font-[var(--font-ma-shan-zheng)]">特色美食</h3>
                    <p className="text-chinese-ink mb-4">黄山美食文化源远流长，徽菜是中国八大菜系之一，以鲜、嫩、香、脆著称。</p>
                    <Link href="/food" className="chinese-button">
                      了解更多
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="chinese-card rounded-lg overflow-hidden hover:-translate-y-1 ruyi-decoration">
              <img 
                src="/images/八达岭长城.jpg" 
                alt="八达岭长城" 
                className="h-40 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <span className="text-blue-600 text-xl font-bold">🚗</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-chinese-ink mb-2 font-[var(--font-ma-shan-zheng)]">交通指南</h3>
                    <p className="text-chinese-ink mb-4">黄山交通便利，可通过飞机、火车、汽车等多种方式到达。</p>
                    <Link href="/transport" className="chinese-button">
                      了解更多
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="chinese-card rounded-lg overflow-hidden hover:-translate-y-1 ruyi-decoration md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img 
                  src="/images/北京烤鸭.jpg" 
                  alt="特色美食" 
                  className="h-full w-full object-cover"
                />
                <div className="flex flex-col justify-center p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-green-100 rounded-full p-3 mr-4">
                      <span className="text-green-600 text-xl font-bold">🏮</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-chinese-ink mb-2 font-[var(--font-ma-shan-zheng)]">中国美食文化</h3>
                  </div>
                  <p className="text-chinese-ink mb-4">中国饮食文化博大精深，八大菜系各具特色，从北京烤鸭到四川火锅，从上海生煎包到广东早茶，每一道美食都蕴含着深厚的文化底蕴。</p>
                  <div className="grid grid-cols-3 gap-4">
                    <img 
                      src="/images/上海生煎包.jpg" 
                      alt="上海生煎包" 
                      className="h-24 w-full object-cover rounded-lg"
                    />
                    <img 
                      src="/images/火锅.jpg" 
                      alt="火锅" 
                      className="h-24 w-full object-cover rounded-lg"
                    />
                    <img 
                      src="/images/中国美食.jpg" 
                      alt="中国美食" 
                      className="h-24 w-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="mt-6">
                    <Link href="/food" className="chinese-button">
                      探索更多美食
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
