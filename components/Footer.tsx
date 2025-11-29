import Link from 'next/link'

export default function Footer() {
  return (
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
              <li><Link href="/game" className="text-gray-400 hover:text-white transition-colors duration-300">互动游戏</Link></li>
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
  )
}