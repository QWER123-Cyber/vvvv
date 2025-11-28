import Link from 'next/link';

export default function ForbiddenCityPage() {
  return (
    <div className="min-h-screen bg-xuanzhi" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b7892b' fill-opacity='0.08'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    }}>
      {/* 导航栏 */}
      <nav className="bg-xuanzhi shadow-md border-b-2 border-chinese-gold fixed top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-chinese-red font-serif">故宫博物院</span>
              </div>
              <div className="flex items-center space-x-6">
                <Link href="/" className="text-gray-600 hover:text-chinese-red font-medium">网站首页</Link>
                <Link href="/forbidden-city" className="text-chinese-red hover:text-chinese-red-dark font-medium">故宫首页</Link>
                <Link href="#introduction" className="text-gray-600 hover:text-chinese-red font-medium">景点简介</Link>
                <Link href="#history" className="text-gray-600 hover:text-chinese-red font-medium">历史沿革</Link>
                <Link href="#attractions" className="text-gray-600 hover:text-chinese-red font-medium">主要景点</Link>
                <Link href="#beauty" className="text-gray-600 hover:text-chinese-red font-medium">故宫之美</Link>
                <Link href="#experience" className="text-gray-600 hover:text-chinese-red font-medium">特色体验</Link>
                <Link href="#visit-info" className="text-gray-600 hover:text-chinese-red font-medium">旅游信息</Link>
              </div>
            </div>
          </div>
        </nav>

      {/* 封面图 */}
      <div className="mt-16 relative">
        <div className="h-[600px] w-full overflow-hidden">
          <img 
            src="/images/故宫午门.jpg" 
            alt="故宫博物院" 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg animate-fade-in-up">故宫博物院</h1>
              <p className="text-2xl md:text-3xl text-white drop-shadow-md animate-fade-in-up delay-100">世界文化遗产 · 中国明清皇宫</p>
              <div className="mt-8 animate-fade-in-up delay-200">
                <Link 
                  href="#introduction" 
                  className="inline-block bg-red-700 hover:bg-red-800 text-white font-medium py-3 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  了解详情
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 景点简介 */}
        <section id="introduction" className="mb-20">
          <h2 className="chinese-title mb-10 text-center">故宫简介</h2>
          <div className="chinese-card p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
              src="/images/故宫午门.jpg" 
              alt="故宫全景" 
              className="h-[400px] w-full object-cover rounded-lg shadow-lg"
            />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-700 leading-relaxed mb-4">
                故宫博物院，旧称紫禁城，位于北京中轴线的中心，是中国明清两代的皇家宫殿，是世界上现存规模最大、保存最为完整的木质结构古建筑之一。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                故宫于明成祖永乐四年（1406年）开始建设，以南京故宫为蓝本营建，到永乐十八年（1420年）建成，成为明清两朝二十四位皇帝的皇宫。
              </p>
              <p className="text-gray-700 leading-relaxed">
                1987年，故宫被联合国教科文组织列为世界文化遗产。2021年，故宫博物院全年接待观众超过1500万人次，是世界上参观人数最多的博物馆之一。
              </p>
            </div>
          </div>
        </section>

        {/* 历史沿革 */}
        <section id="history" className="mb-20">
          <h2 className="chinese-title mb-10 text-center">历史沿革</h2>
          <div className="chinese-card p-8">
            <div className="space-y-8">
              {/* 明朝时期 */}
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3">
                  <img 
                  src="/images/明宫城图.jpg" 
                  alt="明朝时期的故宫" 
                  className="h-[200px] w-full object-cover rounded-lg shadow-md"
                />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold text-chinese-red mb-3 font-serif">明朝时期（1406-1644）</h3>
                  <p className="text-gray-700 leading-relaxed">
                    明成祖朱棣在永乐四年（1406年）下令营建紫禁城，以南京故宫为蓝本，历时14年建成。明朝共有14位皇帝在此居住和执政，见证了明朝的兴衰荣辱。
                  </p>
                </div>
              </div>

              {/* 清朝时期 */}
              <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
                <div className="md:w-1/3">
                  <img 
                  src="/images/康熙南巡图.jpg" 
                  alt="清朝时期的故宫" 
                  className="h-[200px] w-full object-cover rounded-lg shadow-md"
                />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold text-chinese-red mb-3 font-serif">清朝时期（1644-1912）</h3>
                  <p className="text-gray-700 leading-relaxed">
                    清朝入关后，顺治皇帝成为紫禁城的第一位清朝皇帝。清朝共有10位皇帝在此居住，包括康乾盛世的缔造者康熙、雍正、乾隆三位皇帝。
                  </p>
                </div>
              </div>

              {/* 现代时期 */}
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3">
                  <img 
                  src="/images/故宫午门.jpg" 
                  alt="现代时期的故宫" 
                  className="h-[200px] w-full object-cover rounded-lg shadow-md"
                />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold text-chinese-red mb-3 font-serif">现代时期（1912至今）</h3>
                  <p className="text-gray-700 leading-relaxed">
                    1912年，溥仪退位，清朝结束。1925年，故宫博物院成立，对公众开放。经过多次修缮和扩建，如今的故宫博物院已成为世界著名的文化遗产和旅游胜地。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 主要景点 */}
        <section id="attractions" className="mb-20">
          <h2 className="chinese-title mb-10 text-center">主要景点</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 太和殿 */}
            <div className="chinese-card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="h-[200px] overflow-hidden">
                <img 
                  src="/images/太和殿.jpg" 
                  alt="太和殿" 
                  className="w-full h-full object-cover rounded-lg shadow-md transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <span className="inline-block bg-red-700 text-white px-3 py-1 rounded-full text-sm font-medium">故宫核心建筑</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-chinese-red-dark mb-2 group-hover:text-chinese-red transition-colors duration-300 font-serif">太和殿</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">故宫最大的宫殿，明清皇帝举行大典的地方，俗称“金銮殿”。</p>
                <div className="flex items-center text-yellow-600">
                  <span className="mr-1">⭐⭐⭐⭐⭐</span>
                  <span className="text-sm text-gray-500">(必看景点)</span>
                </div>
              </div>
            </div>

            {/* 中和殿 */}
            <div className="chinese-card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="h-[200px] overflow-hidden">
                <img 
                  src="/images/斗拱.jpg" 
                  alt="中和殿" 
                  className="w-full h-full object-cover rounded-lg shadow-md transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <span className="inline-block bg-red-700 text-white px-3 py-1 rounded-full text-sm font-medium">过渡建筑</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-chinese-red-dark mb-2 group-hover:text-chinese-red transition-colors duration-300 font-serif">中和殿</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">皇帝在太和殿举行大典前休息和接受朝拜的地方。</p>
                <div className="flex items-center text-yellow-600">
                  <span className="mr-1">⭐⭐⭐⭐</span>
                  <span className="text-sm text-gray-500">(推荐景点)</span>
                </div>
              </div>
            </div>

            {/* 保和殿 */}
            <div className="chinese-card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="h-[200px] overflow-hidden">
                <img 
                  src="/images/金銮宝座.jpg" 
                  alt="保和殿" 
                  className="w-full h-full object-cover rounded-lg shadow-md transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <span className="inline-block bg-red-700 text-white px-3 py-1 rounded-full text-sm font-medium">殿试场所</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-chinese-red-dark mb-2 group-hover:text-chinese-red transition-colors duration-300 font-serif">保和殿</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">皇帝举行殿试和宴请外藩使节的地方。</p>
                <div className="flex items-center text-yellow-600">
                  <span className="mr-1">⭐⭐⭐⭐</span>
                  <span className="text-sm text-gray-500">(推荐景点)</span>
                </div>
              </div>
            </div>

            {/* 乾清宫 */}
            <div className="chinese-card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="h-[200px] overflow-hidden">
                <img 
                  src="/images/乾清宫.jpg" 
                  alt="乾清宫" 
                  className="h-full w-full object-cover rounded-lg shadow-md transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <span className="inline-block bg-red-700 text-white px-3 py-1 rounded-full text-sm font-medium">皇帝寝宫</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-chinese-red-dark mb-2 font-serif">乾清宫</h3>
                <p className="text-gray-600 mb-4">明清皇帝居住的正宫，“正大光明”匾额悬挂于此。</p>
                <div className="flex items-center text-yellow-600">
                  <span className="mr-1">⭐⭐⭐⭐</span>
                  <span className="text-sm text-gray-500">(推荐景点)</span>
                </div>
              </div>
            </div>

            {/* 御花园 */}
            <div className="chinese-card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="h-[200px] overflow-hidden">
                <img 
                  src="/images/御花园.jpg" 
                  alt="御花园" 
                  className="h-full w-full object-cover rounded-lg shadow-md transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <span className="inline-block bg-red-700 text-white px-3 py-1 rounded-full text-sm font-medium">皇家园林</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-chinese-red-dark mb-2 font-serif">御花园</h3>
                <p className="text-gray-600 mb-4">皇帝和后妃游乐的地方，保存了众多古木和奇石。</p>
                <div className="flex items-center text-yellow-600">
                  <span className="mr-1">⭐⭐⭐⭐</span>
                  <span className="text-sm text-gray-500">(推荐景点)</span>
                </div>
              </div>
            </div>

            {/* 钟表馆 */}
            <div className="chinese-card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="h-[200px] overflow-hidden">
                <img 
                  src="/images/金銮宝座.jpg" 
                  alt="钟表馆" 
                  className="h-full w-full object-cover rounded-lg shadow-md transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <span className="inline-block bg-red-700 text-white px-3 py-1 rounded-full text-sm font-medium">珍宝收藏</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-chinese-red-dark mb-2 font-serif">钟表馆</h3>
                <p className="text-gray-600 mb-4">收藏了众多精美绝伦的中外钟表，展现了古代工艺的精湛。</p>
                <div className="flex items-center text-yellow-600">
                  <span className="mr-1">⭐⭐⭐⭐</span>
                  <span className="text-sm text-gray-500">(推荐景点)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 故宫之美 */}
        <section id="beauty" className="mb-20">
          <h2 className="chinese-title mb-10 text-center">故宫之美</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="chinese-card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-80 bg-[url('/images/故宫雪景.jpg')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-chinese-red-dark mb-2 font-serif">故宫雪景</h3>
                <p className="text-gray-600">雪后的故宫银装素裹，红墙黄瓦与白雪交相辉映，呈现出一种静谧而庄严的美，仿佛穿越回了明清时代。</p>
              </div>
            </div>
            <div className="chinese-card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-80 bg-[url('/images/故宫夜景.jpg')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-chinese-red-dark mb-2 font-serif">故宫夜景</h3>
                <p className="text-gray-600">夜晚的故宫灯火辉煌，古老的建筑在现代灯光的映衬下焕发出新的生机，展现出与白天截然不同的神秘魅力。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 特色体验 */}
        <section id="experience" className="mb-20">
          <h2 className="chinese-title mb-10 text-center">特色体验</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="chinese-card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-40 bg-[url('/images/太和殿.jpg')] bg-cover bg-center"></div>
              <div className="p-6 border-l-4 border-red-600">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 rounded-full p-3">
                    <span className="text-red-600 text-2xl">📸</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-chinese-red-dark mb-2 font-serif">摄影打卡</h3>
                    <p className="text-gray-600">在故宫的红墙黄瓦间留下美好瞬间，太和殿、角楼都是绝佳的摄影地点。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="chinese-card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-40 bg-[url('/images/金銮宝座.jpg')] bg-cover bg-center"></div>
              <div className="p-6 border-l-4 border-blue-600">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <span className="text-blue-600 text-2xl">🎨</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-chinese-red-dark mb-2 font-serif">文创体验</h3>
                    <p className="text-gray-600">购买故宫特色文创产品，如口红、笔记本、印章等，把故宫文化带回家。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="chinese-card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-40 bg-[url('/images/御花园.jpg')] bg-cover bg-center"></div>
              <div className="p-6 border-l-4 border-green-600">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <span className="text-green-600 text-2xl">🍵</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-chinese-red-dark mb-2 font-serif">品茶赏景</h3>
                    <p className="text-gray-600">在故宫内的茶馆品尝传统名茶，一边休息一边欣赏皇家园林的美景。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="chinese-card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-40 bg-[url('/images/明宫城图.jpg')] bg-cover bg-center"></div>
              <div className="p-6 border-l-4 border-purple-600">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-full p-3">
                    <span className="text-purple-600 text-2xl">🎭</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-chinese-red-dark mb-2 font-serif">宫廷文化体验</h3>
                    <p className="text-gray-600">参加故宫举办的传统文化活动，如书法、绘画、刺绣等，感受宫廷文化的魅力。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 旅游信息 */}
        <section id="visit-info" className="mb-20">
          <h2 className="chinese-title mb-10 text-center">旅游信息</h2>
          <div className="chinese-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 开放时间 */}
              <div>
                <h3 className="text-2xl font-semibold text-chinese-red-dark mb-4 flex items-center gap-2 font-serif">
                  <span className="text-red-600">⏰</span>
                  开放时间
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>旺季（4月1日-10月31日）</span>
                    <span className="font-medium">8:30-17:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>淡季（11月1日-3月31日）</span>
                    <span className="font-medium">8:30-16:30</span>
                  </li>
                  <li className="flex justify-between">
                    <span>停止检票时间</span>
                    <span className="font-medium">旺季16:10，淡季15:40</span>
                  </li>
                </ul>
              </div>

              {/* 门票信息 */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-red-600">🎫</span>
                  门票信息
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>旺季门票</span>
                    <span className="font-medium">60元/人</span>
                  </li>
                  <li className="flex justify-between">
                    <span>淡季门票</span>
                    <span className="font-medium">40元/人</span>
                  </li>
                  <li className="flex justify-between">
                    <span>珍宝馆、钟表馆</span>
                    <span className="font-medium">各10元/人</span>
                  </li>
                  <li className="text-sm text-gray-500 mt-2">
                    注：需提前在官网或官方APP预约购票
                  </li>
                </ul>
              </div>

              {/* 交通指南 */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-red-600">🚇</span>
                  交通指南
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">地铁：</span>
                    <span>1号线天安门东站B口，2号线前门站C口</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">公交：</span>
                    <span>1、2、10、20、82、120、37、52、126等路公交车</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-600">自驾：</span>
                    <span>故宫周边无停车场，建议乘坐公共交通</span>
                  </li>
                </ul>
              </div>

              {/* 参观须知 */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-red-600">📝</span>
                  参观须知
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 需携带有效身份证件，配合安检</li>
                  <li>• 请勿携带打火机、尖锐物品等违禁品</li>
                  <li>• 请勿触摸文物和古建筑</li>
                  <li>• 请勿在禁烟区域吸烟</li>
                  <li>• 请保持安静，文明参观</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 预约按钮 */}
        <section className="text-center mb-20">
          <h2 className="text-3xl font-bold text-chinese-red-dark mb-6 font-serif">立即预约参观</h2>
          <p className="text-gray-600 mb-8">故宫博物院实行全网预约制度，请提前在官网或官方APP预约购票</p>
          <Link 
            href="https://gugong.228.com.cn/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="chinese-button"
          >
            官网预约购票
          </Link>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-chinese-red-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-serif">故宫博物院</h3>
              <p className="text-gray-400">
                世界文化遗产，中国明清两代的皇家宫殿，世界五大宫之一。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-serif">快速链接</h3>
              <ul className="space-y-2">
                <li><Link href="#introduction" className="text-gray-400 hover:text-white transition-colors duration-300">景点简介</Link></li>
                <li><Link href="#history" className="text-gray-400 hover:text-white transition-colors duration-300">历史沿革</Link></li>
                <li><Link href="#attractions" className="text-gray-400 hover:text-white transition-colors duration-300">主要景点</Link></li>
                <li><Link href="#experience" className="text-gray-400 hover:text-white transition-colors duration-300">特色体验</Link></li>
                <li><Link href="#visit-info" className="text-gray-400 hover:text-white transition-colors duration-300">旅游信息</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-serif">联系方式</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <span>📍</span>
                  <span>北京市东城区景山前街4号</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📞</span>
                  <span>010-85007421</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📧</span>
                  <span>info@dpm.org.cn</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>🌐</span>
                  <Link href="https://www.dpm.org.cn/" className="hover:text-white transition-colors duration-300">www.dpm.org.cn</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-serif">社交媒体</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <span className="text-2xl">📘</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <span className="text-2xl">🐦</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <span className="text-2xl">📷</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <span className="text-2xl">🎵</span>
                </Link>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-400">关注我们，获取最新活动信息</p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© {new Date().getFullYear()} 故宫博物院. 保留所有权利.</p>
            <p className="text-sm mt-1">本网站仅用于旅游信息展示，实际信息以官方网站为准</p>
          </div>
        </div>
      </footer>
    </div>
  );
}