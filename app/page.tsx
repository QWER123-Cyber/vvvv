'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
      <Navbar />

      {/* 封面图 */}
      <div className="relative group overflow-hidden">
        <div className="h-[70vh] w-full overflow-hidden">
          <Image 
            src="/images/故宫午门.jpg" 
            alt="中国旅游景点" 
            fill 
            className="object-cover transform group-hover:scale-105 transition-transform duration-1500 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex items-center justify-center">
            <div className="text-center px-4 animate-fade-in-up">
              <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl tracking-tight font-[var(--font-ma-shan-zheng)]">中国旅游文化网</h1>
              <p className="text-2xl md:text-4xl text-white drop-shadow-lg max-w-4xl mx-auto font-[var(--font-noto-serif-sc)]">探索千年文明，感受壮丽山河</p>
              <div className="mt-8">
                <Link href="/attractions" className="inline-block bg-chinese-red hover:bg-chinese-red-dark text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105">
                  开始探索
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>
      </div>

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 热门景点 */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-chinese-ink mb-6 text-center">
            <span className="chinese-title">热门景点与特色内容</span>
          </h2>
          <div className="floral-divider mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Link href="/forbidden-city" className="block group">
              <div className="chinese-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-72 overflow-hidden relative">
                  <Image 
                    src="/images/故宫午门.jpg" 
                    alt="故宫" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                    <div className="p-6 text-white">
                      <span className="seal">世界遗产文化</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-chinese-ink mb-3 group-hover:text-chinese-red transition-colors duration-300 font-[var(--font-ma-shan-zheng)]">故宫博物院</h3>
                  <p className="text-chinese-ink line-clamp-3">北京故宫，旧称紫禁城，是中国明清两代的皇家宫殿，世界五大宫之一，拥有丰富的历史遗产。</p>
                  <div className="mt-5 flex items-center text-yellow-600">
                    <span className="mr-1">⭐⭐⭐⭐⭐</span>
                    <span className="text-sm text-gray-500">(世界遗产文化)</span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/wuhan" className="block group">
              <div className="chinese-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-72 overflow-hidden relative">
                  <Image 
                    src="/images/黄鹤楼.jpg" 
                    alt="黄鹤楼" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                    <div className="p-6 text-white">
                      <span className="seal">江南三大名楼之一</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-chinese-ink mb-3 group-hover:text-chinese-red transition-colors duration-300 font-[var(--font-ma-shan-zheng)]">黄鹤楼</h3>
                  <p className="text-chinese-ink line-clamp-3">江南三大名楼之一，位于湖北省武汉市长江南岸的武昌蛇山之巅，享有“天下江山第一楼”的美誉。</p>
                  <div className="mt-5 flex items-center text-yellow-600">
                    <span className="mr-1">⭐⭐⭐⭐⭐</span>
                    <span className="text-sm text-gray-500">(江南三大名楼)</span>
                  </div>
                </div>
              </div>
            </Link>



            <Link href="/attractions" className="block group">
              <div className="chinese-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-72 overflow-hidden relative">
                  <Image 
                    src="/images/八达岭长城.jpg" 
                    alt="长城" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                    <div className="p-6 text-white">
                      <span className="seal">世界遗产文化</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-chinese-ink mb-3 group-hover:text-chinese-red transition-colors duration-300 font-[var(--font-ma-shan-zheng)]">更多景点</h3>
                  <p className="text-chinese-ink line-clamp-3">探索中国更多著名景点，包括黄山、张家界、兵马俑等世界知名的旅游胜地。</p>
                  <div className="mt-5 flex items-center text-yellow-600">
                    <span className="mr-1">🏞️</span>
                    <span className="text-sm text-gray-500">(探索更多)</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* 主要景点推荐 */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-chinese-ink mb-6 text-center">
            <span className="chinese-title">中国名胜</span>
          </h2>
          <div className="floral-divider mb-12"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* 自然景观 */}
            <Link href="/attractions?spot=zhangjiajie" className="block group">
              <div className="chinese-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src="/images/张家界天门山（独特的石英砂岩峰林地貌）.jpg" 
                    alt="张家界天门山" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-chinese-ink mb-2 font-[var(--font-ma-shan-zheng)]">张家界天门山</h3>
                  <p className="text-chinese-ink">独特的石英砂岩峰林地貌，被誉为"天空之城"。</p>
                </div>
              </div>
            </Link>

            <Link href="/attractions?spot=jiuzhaigou" className="block group">
              <div className="chinese-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src="/images/九寨沟（多彩的湖泊和瀑布）.jpg" 
                    alt="九寨沟" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-chinese-ink mb-2 font-[var(--font-ma-shan-zheng)]">九寨沟</h3>
                  <p className="text-chinese-ink">多彩的湖泊和瀑布，被誉为"人间仙境"。</p>
                </div>
              </div>
            </Link>

            <Link href="/attractions?spot=guilin" className="block group">
              <div className="chinese-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src="/images/桂林山水（喀斯特地貌代表）.jpg" 
                    alt="桂林山水" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-chinese-ink mb-2 font-[var(--font-ma-shan-zheng)]">桂林山水</h3>
                  <p className="text-chinese-ink">典型的喀斯特地貌，山水相依，如诗如画。</p>
                </div>
              </div>
            </Link>

            <Link href="/attractions?spot=kanas" className="block group">
              <div className="chinese-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src="/images/新疆喀纳斯（高山湖泊和森林）.jpg" 
                    alt="喀纳斯" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-chinese-ink mb-2 font-[var(--font-ma-shan-zheng)]">喀纳斯</h3>
                  <p className="text-chinese-ink">高山湖泊与原始森林完美结合，被誉为"人间净土"。</p>
                </div>
              </div>
            </Link>

            {/* 历史文化 */}
            <Link href="/attractions?spot=terracotta" className="block group">
              <div className="chinese-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src="/images/兵马俑（世界第八大奇迹）.jpg" 
                    alt="兵马俑" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-chinese-ink mb-2 font-[var(--font-ma-shan-zheng)]">兵马俑</h3>
                  <p className="text-chinese-ink">世界第八大奇迹，展示了中国古代的军事与艺术成就。</p>
                </div>
              </div>
            </Link>

            <Link href="/attractions?spot=potala" className="block group">
              <div className="chinese-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src="/images/布达拉宫（藏区建筑瑰宝）.jpg" 
                    alt="布达拉宫" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-chinese-ink mb-2 font-[var(--font-ma-shan-zheng)]">布达拉宫</h3>
                  <p className="text-chinese-ink">藏区建筑瑰宝，体现了藏汉合璧的建筑艺术。</p>
                </div>
              </div>
            </Link>

            <Link href="/attractions?spot=mogao" className="block group">
              <div className="chinese-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src="/images/莫高窟（敦煌壁画艺术）.jpg" 
                    alt="莫高窟" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-chinese-ink mb-2 font-[var(--font-ma-shan-zheng)]">莫高窟</h3>
                  <p className="text-chinese-ink">东方艺术宝库，保存了大量精美的壁画和雕塑。</p>
                </div>
              </div>
            </Link>

            <Link href="/attractions?spot=summer-palace" className="block group">
              <div className="chinese-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src="/images/颐和园（皇家园林典范）.jpg" 
                    alt="颐和园" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-chinese-ink mb-2 font-[var(--font-ma-shan-zheng)]">颐和园</h3>
                  <p className="text-chinese-ink">中国古典园林艺术的巅峰之作，皇家园林典范。</p>
                </div>
              </div>
            </Link>

            {/* 现代景观 */}
            <Link href="/attractions?spot=shanghai" className="block group">
              <div className="chinese-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src="/images/上海外滩（现代都市风光）.jpg" 
                    alt="上海外滩" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-chinese-ink mb-2 font-[var(--font-ma-shan-zheng)]">上海外滩</h3>
                  <p className="text-chinese-ink">现代都市风光的代表，展示了中国的快速发展。</p>
                </div>
              </div>
            </Link>

            <Link href="/attractions?spot=hongkong-bridge" className="block group">
              <div className="chinese-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src="/images/港珠澳大桥（现代工程奇迹）.jpg" 
                    alt="港珠澳大桥" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-chinese-ink mb-2 font-[var(--font-ma-shan-zheng)]">港珠澳大桥</h3>
                  <p className="text-chinese-ink">现代工程奇迹，连接香港、珠海和澳门的超级工程。</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* 特色体验 */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-chinese-ink mb-6 text-center">
            <span className="chinese-title">特色体验</span>
          </h2>
          <div className="floral-divider mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="chinese-card rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-500 ruyi-decoration">
              <div className="relative h-52 w-full">
                <Image 
                  src="/images/黄山.jpg" 
                  alt="黄山" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-7">
                <div className="flex items-start">
                  <div className="bg-chinese-red/10 rounded-full p-4 mr-5">
                    <span className="text-chinese-red text-2xl font-bold">🍜</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-chinese-ink mb-3 font-[var(--font-ma-shan-zheng)]">特色美食</h3>
                    <p className="text-chinese-ink mb-5">黄山美食文化源远流长，徽菜是中国八大菜系之一，以鲜、嫩、香、脆著称。</p>
                    <Link href="/food" className="chinese-button">
                      了解更多
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="chinese-card rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-500 ruyi-decoration">
              <div className="relative h-52 w-full">
                <Image 
                  src="/images/八达岭长城.jpg" 
                  alt="八达岭长城" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-7">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-4 mr-5">
                    <span className="text-blue-600 text-2xl font-bold">🚗</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-chinese-ink mb-3 font-[var(--font-ma-shan-zheng)]">交通指南</h3>
                    <p className="text-chinese-ink mb-5">中国各大景点交通便利，可通过飞机、火车、汽车等多种方式到达。</p>
                    <Link href="/transport" className="chinese-button">
                      了解更多
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="chinese-card rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-500 ruyi-decoration md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative h-full min-h-[300px] w-full overflow-hidden">
                  <Image 
                    src="/images/北京烤鸭.jpg" 
                    alt="北京烤鸭 - 中国传统名菜" 
                    fill 
                    className="object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex flex-col justify-center p-8">
                  <div className="flex items-start mb-5">
                    <div className="bg-green-100 rounded-full p-4 mr-5">
                      <span className="text-green-600 text-2xl font-bold">🏮</span>
                    </div>
                    <h3 className="text-3xl font-semibold text-chinese-ink mb-3 font-[var(--font-ma-shan-zheng)]">中国美食文化</h3>
                  </div>
                  <p className="text-chinese-ink mb-6 leading-relaxed">中国饮食文化博大精深，八大菜系各具特色，从北京烤鸭到四川火锅，从上海生煎包到广东早茶，每一道美食都蕴含着深深的文化底蕴。</p>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="relative h-32 w-full overflow-hidden rounded-lg group">
                      <Image 
                        src="/images/上海生煎包.jpg" 
                        alt="上海生煎包 - 上海特色小吃" 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="relative h-32 w-full overflow-hidden rounded-lg group">
                      <Image 
                        src="/images/火锅.jpg" 
                        alt="四川火锅 - 中国传统美食" 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="relative h-32 w-full overflow-hidden rounded-lg group">
                      <Image 
                        src="/images/中国美食.jpg" 
                        alt="中国美食集锦" 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div>
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

      {/* 翻牌游戏彩蛋 */}
       <Link 
         href="/game" 
         className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-chinese-red hover:bg-chinese-red-dark overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 group"
         aria-label="中国景点翻牌游戏 (彩蛋)"
       >
         <div className="relative w-full h-full">
           <Image 
             src="/images/八达岭长城.jpg" 
             alt="中国景点翻牌游戏" 
             fill 
             className="object-cover group-hover:scale-125 transition-transform duration-700"
           />
           <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60 flex items-center justify-center">
             <span className="text-white text-xl font-bold">🎮</span>
           </div>
         </div>
       </Link>

      {/* 页脚 */}
      <Footer />
    </div>
  );
}