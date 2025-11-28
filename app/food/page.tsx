import Link from 'next/link';

export default function FoodPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
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

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">美食推荐</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">中国美食文化</h3>
            <p className="text-gray-600 mb-6">中国美食历史悠久，菜系丰富多样，每个地区都有其独特的风味和特色小吃。</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">北京烤鸭</h4>
                <div className="h-40 bg-[url('/images/北京烤鸭.jpg')] bg-cover bg-center rounded-lg mb-3"></div>
                <p className="text-gray-600">北京烤鸭是北京的传统名菜，以色泽红艳、肉质细嫩、味道醇厚而闻名。</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">上海生煎包</h4>
                <div className="h-40 bg-[url('/images/上海生煎包.jpg')] bg-cover bg-center rounded-lg mb-3"></div>
                <p className="text-gray-600">上海生煎包是上海的传统小吃，外皮底部煎得金黄酥脆，内部汤汁丰富。</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">河北驴肉火烧</h4>
                <div className="h-40 bg-[url('/images/河北驴肉火烧.jpg')] bg-cover bg-center rounded-lg mb-3"></div>
                <p className="text-gray-600">河北驴肉火烧是河北的传统名吃，以新鲜驴肉夹入酥脆的火烧中，口感丰富。</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">湖北热干面</h4>
                <div className="h-40 bg-[url('/images/湖北热干面.jpg')] bg-cover bg-center rounded-lg mb-3"></div>
                <p className="text-gray-600">湖北热干面是武汉的特色小吃，以面条筋道、芝麻酱香浓而著称。</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">螺蛳粉</h4>
                <div className="h-40 bg-[url('/images/螺蛳粉.jpg')] bg-cover bg-center rounded-lg mb-3"></div>
                <p className="text-gray-600">螺蛳粉是广西柳州的特色小吃，以其独特的酸辣味和螺蛳汤的鲜味而闻名。</p>
              </div>
            </div>
            <Link 
              href="/" 
              className="inline-block mt-8 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg" 
            >
              返回首页
            </Link>
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
            <p>© 2023 中国旅游景点. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}