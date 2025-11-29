'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function WuhanPage() {
  return (
    <div className="min-h-screen pt-20" style={{
      backgroundImage: `linear-gradient(135deg, rgba(255, 245, 238, 0.9) 0%, rgba(255, 222, 173, 0.8) 50%, rgba(224, 255, 255, 0.7) 100%), url('/images/背景图.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {/* 导航栏 */}
      <Navbar />

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="chinese-title mb-8 text-center">黄鹤楼</h2>
          <h3 className="text-xl text-chinese-red-dark mb-12 text-center font-serif">天下绝景 · 天下江山第一楼</h3>
          
          <div className="chinese-card overflow-hidden">
            {/* 主图区域 */}
            <div className="relative h-96 overflow-hidden group">
              <Image 
                src="/images/黄鹤楼.jpg" 
                alt="中国武汉黄鹤楼全景" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center">
                <div className="text-center p-6">
                  <h3 className="text-3xl font-bold text-white font-serif mb-2">天下江山第一楼</h3>
                  <p className="text-white/90">中国江南三大名楼之一</p>
                </div>
              </div>
            </div>
            
            {/* 内容区域 */}
            <div className="p-8">
              {/* 历史背景 */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-chinese-red-dark mb-4 border-b-2 border-chinese-red pb-2 font-serif">历史背景与变迁</h3>
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
                  <div className="chinese-card p-6">
                    <h4 className="text-lg font-bold text-chinese-red-dark mb-3 font-serif">黄鹤楼大事记</h4>
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
                <h3 className="text-2xl font-bold text-chinese-red-dark mb-6 border-b-2 border-chinese-red pb-2 font-serif">千古绝唱 · 诗句名篇</h3>
                
                {/* 崔颢《黄鹤楼》 */}
                <div className="chinese-card p-8 mb-8 relative overflow-hidden group">
                  {/* 半透明背景图 */}
                  <div className="absolute inset-0 opacity-15">
                    <Image 
                      src="/images/《黄鹤楼》 - 崔颢（唐）.jpg" 
                      alt="崔颢《黄鹤楼》诗意图" 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {/* 文本内容 */}
                  <div className="relative z-10">
                    <h4 className="text-lg font-bold text-chinese-red-dark mb-4 border-b-2 border-chinese-red/30 pb-2 font-serif text-center">《黄鹤楼》 - 崔颢（唐）</h4>
                    <div className="text-center text-2xl font-serif leading-relaxed space-y-2 text-gray-700">
                      <p>昔人已乘黄鹤去，此地空余黄鹤楼。</p>
                      <p>黄鹤一去不复返，白云千载空悠悠。</p>
                      <p>晴川历历汉阳树，芳草萋萋鹦鹉洲。</p>
                      <p>日暮乡关何处是？烟波江上使人愁。</p>
                    </div>
                  </div>
                </div>
                
                {/* 李白《黄鹤楼送孟浩然之广陵》 */}
                <div className="chinese-card p-8 relative overflow-hidden group">
                  {/* 半透明背景图 */}
                  <div className="absolute inset-0 opacity-15">
                    <Image 
                      src="/images/《黄鹤楼送孟浩然之广陵》 - 李白（唐）.jpg" 
                      alt="李白《黄鹤楼送孟浩然之广陵》诗意图" 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {/* 文本内容 */}
                  <div className="relative z-10">
                    <h4 className="text-lg font-bold text-chinese-red-dark mb-4 border-b-2 border-chinese-red/30 pb-2 font-serif text-center">《黄鹤楼送孟浩然之广陵》 - 李白（唐）</h4>
                    <div className="text-center text-2xl font-serif leading-relaxed space-y-2 text-gray-700">
                      <p>故人西辞黄鹤楼，烟花三月下扬州。</p>
                      <p>孤帆远影碧空尽，唯见长江天际流。</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 建筑特色 */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-chinese-red-dark mb-6 border-b-2 border-chinese-red pb-2 font-serif">建筑特色与设计</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      黄鹤楼采用了中国传统的木质结构形式，飞檐翘角，斗拱层叠，展现了中国古代建筑的精湛技艺。
                      主楼五层，攒尖顶，层层飞檐，四望如一，楼体各层大小屋顶交错重叠，翘角飞举，仿佛一只展翅欲飞的黄鹤。
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      楼内装饰精美，每层都有不同主题的展览，包括历史文物、书画作品、诗词碑刻等，展现了黄鹤楼深厚的文化底蕴。
                      顶层设有观景台，可以俯瞰武汉市全景和长江的壮丽景色。
                    </p>
                  </div>
                  <div className="chinese-card p-6">
                    <h4 className="text-lg font-bold text-chinese-red-dark mb-3 font-serif">建筑数据</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex justify-between">
                        <span>高度：</span>
                        <span className="font-bold">51.4米</span>
                      </li>
                      <li className="flex justify-between">
                        <span>层数：</span>
                        <span className="font-bold">5层</span>
                      </li>
                      <li className="flex justify-between">
                        <span>建筑面积：</span>
                        <span className="font-bold">3219平方米</span>
                      </li>
                      <li className="flex justify-between">
                        <span>屋顶形式：</span>
                        <span className="font-bold">攒尖顶</span>
                      </li>
                      <li className="flex justify-between">
                        <span>重建年份：</span>
                        <span className="font-bold">1985年</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* 旅游信息 */}
              <div className="chinese-card p-6">
                <h3 className="text-2xl font-bold text-chinese-red-dark mb-6 border-b-2 border-chinese-red pb-2 font-serif">旅游信息</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-chinese-red-dark mb-3 font-serif">开放时间</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>旺季（3月1日-11月30日）：</li>
                      <li className="ml-4">8:00 - 18:30</li>
                      <li>淡季（12月1日-2月28日）：</li>
                      <li className="ml-4">8:30 - 17:30</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-chinese-red-dark mb-3 font-serif">门票信息</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>成人票：70元</li>
                      <li>学生票：35元</li>
                      <li>老年人票：35元（60岁以上）</li>
                      <li>儿童票：免费（1.2米以下）</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-chinese-red-dark mb-3 font-serif">交通指南</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>公交：乘坐10、61、64、503、507等路公交车在黄鹤楼站下车</li>
                      <li>地铁：乘坐地铁5号线在司门口黄鹤楼站下车</li>
                      <li>自驾：黄鹤楼景区有停车场，但建议绿色出行</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* 武汉风光 */}
        <section className="mb-16">
          <h2 className="chinese-title mb-8 text-center">武汉风光</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 武汉江滩 */}
            <div className="chinese-card overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/images/武汉江滩.jpg" 
                  alt="武汉长江江滩全景" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <h3 className="text-white text-xl font-bold font-serif">武汉江滩</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">长江武汉段的美丽江滩，是武汉市民休闲娱乐的好去处，展现了现代都市与自然的完美融合。</p>
              </div>
            </div>
            
            {/* 蛇山 */}
            <div className="chinese-card overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/images/蛇山.jpg" 
                  alt="武汉蛇山风景" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <h3 className="text-white text-xl font-bold font-serif">蛇山</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">黄鹤楼所在地，武汉著名的风景名胜区，拥有丰富的历史文化和自然景观资源。</p>
              </div>
            </div>
            
            {/* 晴川阁 */}
            <div className="chinese-card overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/images/晴川阁.jpg" 
                  alt="武汉晴川阁" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <h3 className="text-white text-xl font-bold font-serif">晴川阁</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">武汉著名的古建筑，与黄鹤楼隔江相望，被誉为"楚国晴川第一楼"。</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <Footer />
    </div>
  );
}