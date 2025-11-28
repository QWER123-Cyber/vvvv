import Link from 'next/link';
import Image from 'next/image';

export default function WuhanPage() {
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
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">黄鹤楼</h2>
          <h3 className="text-xl text-gray-600 mb-12 text-center">天下绝景 · 天下江山第一楼</h3>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* 主图区域 */}
            <div className="relative h-96 overflow-hidden">
              <Image 
                src="/images/黄鹤楼.jpg" 
                alt="黄鹤楼" 
                fill 
                className="object-cover"
              />
            </div>
            
            {/* 内容区域 */}
            <div className="p-8">
              {/* 历史背景 */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-red-600 pb-2">历史背景与变迁</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      黄鹤楼位于湖北省武汉市武昌区蛇山之巅，濒临万里长江，是江南三大名楼之一（另两座为岳阳楼、滕王阁）。
                      这座名楼始建于三国吴黄武二年（223年），最初是作为军事瞭望塔而建，用于观察长江水面的敌情。
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      自唐代以来，黄鹤楼逐渐演变为观赏风景的胜地，吸引了无数文人墨客前来登临赋诗。
                      然而，这座名楼命运多舛，在历史上曾屡毁屡建，据记载共经历了27次重建。
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      现存的黄鹤楼是1985年以清代“同治楼”为原型重建的，楼高51.4米，共5层，建筑面积3219平方米。
                      它采用了中国传统的木质结构形式，飞檐翘角，气势恢宏，与长江美景交相辉映。
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-bold text-gray-800 mb-3">黄鹤楼大事记</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-red-600 font-bold mr-2">•</span>
                        <span>223年：三国吴黄武二年，始建黄鹤楼</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 font-bold mr-2">•</span>
                        <span>723年：唐代诗人崔颢作《黄鹤楼》诗</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 font-bold mr-2">•</span>
                        <span>1080年：北宋文学家苏轼登临黄鹤楼</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 font-bold mr-2">•</span>
                        <span>1884年：清代黄鹤楼被大火焚毁</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 font-bold mr-2">•</span>
                        <span>1985年：黄鹤楼重建完成并对外开放</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* 著名诗句 */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-red-600 pb-2">千古绝唱 · 诗句名篇</h3>
                
                {/* 崔颢《黄鹤楼》 */}
                <div className="mb-8 p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">崔颢《黄鹤楼》</h4>
                  <p className="text-gray-700 text-lg mb-2 font-medium">
                    昔人已乘黄鹤去，此地空余黄鹤楼。<br />
                    黄鹤一去不复返，白云千载空悠悠。<br />
                    晴川历历汉阳树，芳草萋萋鹦鹉洲。<br />
                    日暮乡关何处是？烟波江上使人愁。
                  </p>
                  <p className="text-gray-600 italic mt-4">
                    这首诗被誉为“唐人七律第一”，据说李白登黄鹤楼时看到此诗，感叹道：“眼前有景道不得，崔颢题诗在上头。”
                  </p>
                </div>
                
                {/* 其他诗句 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h4 className="text-lg font-bold text-gray-800 mb-3">李白《黄鹤楼送孟浩然之广陵》</h4>
                    <p className="text-gray-700">
                      故人西辞黄鹤楼，烟花三月下扬州。<br />
                      孤帆远影碧空尽，唯见长江天际流。
                    </p>
                  </div>
                  
                  <div className="p-5 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <h4 className="text-lg font-bold text-gray-800 mb-3">李白《与史郎中钦听黄鹤楼上吹笛》</h4>
                    <p className="text-gray-700">
                      一为迁客去长沙，西望长安不见家。<br />
                      黄鹤楼中吹玉笛，江城五月落梅花。
                    </p>
                  </div>
                  
                  <div className="p-5 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <h4 className="text-lg font-bold text-gray-800 mb-3">白居易《卢侍御与崔评事为予于黄鹤楼置宴，宴罢同望》</h4>
                    <p className="text-gray-700">
                      江边黄鹤古时楼，劳置华筵待我游。<br />
                      楚思淼茫云水冷，商声清脆管弦秋。<br />
                      白花浪溅头陀寺，红叶林笼鹦鹉洲。
                    </p>
                  </div>
                  
                  <div className="p-5 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <h4 className="text-lg font-bold text-gray-800 mb-3">陆游《黄鹤楼》</h4>
                    <p className="text-gray-700">
                      苍龙阙角归何晚，黄鹤楼中醉不知。<br />
                      汉江交流波渺渺，晋唐遗迹草离离。
                    </p>
                  </div>
                </div>
              </div>
              
              {/* 名人名言 */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-red-600 pb-2">名人评说</h3>
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="text-4xl text-gray-400 mr-4">"</div>
                    <div className="flex-1">
                      <p className="text-gray-700 italic mb-2">
                        黄鹤楼是中国古代建筑艺术的杰出代表，它不仅是一座楼，更是中华民族精神的象征。
                      </p>
                      <p className="text-right text-gray-500">— 建筑学家 梁思成</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-4xl text-gray-400 mr-4">"</div>
                    <div className="flex-1">
                      <p className="text-gray-700 italic mb-2">
                        黄鹤楼的魅力不仅在于它的建筑之美，更在于它承载了千年的文化积淀和文人墨客的情怀。
                      </p>
                      <p className="text-right text-gray-500">— 文学家 余秋雨</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-4xl text-gray-400 mr-4">"</div>
                    <div className="flex-1">
                      <p className="text-gray-700 italic mb-2">
                        登黄鹤楼，望长江，感受的是天地之辽阔，历史之悠远，文化之厚重。
                      </p>
                      <p className="text-right text-gray-500">— 诗人 余光中</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 建筑特色 */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-red-600 pb-2">建筑特色</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-bold text-gray-800 mb-3">结构设计</h4>
                    <p className="text-gray-600">
                      黄鹤楼内部由72根圆柱支撑，象征着黄鹤楼历经的72个春秋；外部有60个翘角向外伸展，寓意着天地六合。
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-bold text-gray-800 mb-3">外观装饰</h4>
                    <p className="text-gray-600">
                      屋面用10多万块黄色琉璃瓦覆盖，在阳光照耀下金碧辉煌。每层楼都有精美的木雕和壁画，展现了中国传统文化的精髓。
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-bold text-gray-800 mb-3">地理位置</h4>
                    <p className="text-gray-600">
                      坐落在海拔61.7米的蛇山顶，京广铁路的列车从楼下呼啸而过。登楼远眺，可以看到武汉三镇的全貌和长江的壮丽景色。
                    </p>
                  </div>
                </div>
              </div>
              
              {/* 返回按钮 */}
              <div className="text-center mt-12">
                <Link 
                  href="/" 
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg" 
                >
                  返回首页
                </Link>
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
            <p>© 2023 中国旅游景点. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}