'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function TransportPage() {
  return (
    <div className="min-h-screen pt-20" style={{
      background: 'linear-gradient(135deg, #e0f7fa 0%, #29b6f6 100%)',
      backgroundImage: `url('/images/背景图.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {/* 导航栏 */}
      <Navbar />

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="chinese-title mb-6">交通指南</h2>
          <div className="chinese-card p-8">
            <h3 className="text-2xl font-semibold text-chinese-red-dark mb-4 font-serif">中国旅游交通信息</h3>
            <p className="text-gray-600 mb-8">中国交通网络发达，无论您选择飞机、火车、汽车还是其他交通工具，都能方便地到达各个旅游景点。以下是详细的交通指南，帮助您规划完美的旅行。</p>
            
            {/* 主要交通方式 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mb-12">
              <div className="chinese-card p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
                <h4 className="text-xl font-semibold text-chinese-red-dark mb-3 font-serif">飞机</h4>
                <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                  <Image 
                    src="/images/飞机交通示意图.jpg" 
                    alt="中国现代化机场与飞机交通网络示意图" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-white text-sm">中国主要国际机场网络</span>
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>主要国际机场：北京首都、上海浦东、广州白云、成都天府</li>
                  <li>国内航线覆盖所有省会城市和主要旅游城市</li>
                  <li>预订技巧：提前1-2个月预订可获得更优惠价格</li>
                  <li>行李规定：经济舱一般可携带20kg托运行李</li>
                </ul>
              </div>
              <div className="chinese-card p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
                <h4 className="text-xl font-semibold text-chinese-red-dark mb-3 font-serif">火车</h4>
                <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                  <Image 
                    src="/images/火车交通示意图.jpg" 
                    alt="中国高铁网络与现代化列车示意图" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-white text-sm">全球最长的高铁网络</span>
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>高铁网络：全球最长，覆盖大部分旅游城市</li>
                  <li>最高时速：350km/h，北京到上海仅需4.5小时</li>
                  <li>座位类型：二等座、一等座、商务座</li>
                  <li>购票方式：12306官网或手机APP</li>
                </ul>
              </div>
              <div className="chinese-card p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
                <h4 className="text-xl font-semibold text-chinese-red-dark mb-3 font-serif">汽车</h4>
                <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                  <Image 
                    src="/images/汽车交通示意图.jpg" 
                    alt="中国高速公路网络与汽车交通示意图" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-white text-sm">全球里程最长的高速公路网</span>
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>高速公路里程：全球第一，超过16万公里</li>
                  <li>租车服务：各大城市均有连锁租车公司</li>
                  <li>长途汽车：连接所有县级以上城市</li>
                  <li>注意事项：靠右行驶，高速限速120km/h</li>
                </ul>
              </div>
            </div>

            {/* 城市内部交通 */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-chinese-red-dark mb-6 font-serif">城市内部交通</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="chinese-card p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
                  <h4 className="font-semibold text-chinese-red-dark mb-2 font-serif">地铁</h4>
                  <div className="relative h-32 overflow-hidden rounded-lg mb-3">
                    <Image 
                      src="/images/地铁.jpg" 
                      alt="中国现代化城市地铁系统" 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-gray-600">北京、上海、广州等大城市地铁网络发达，是最快捷的出行方式</p>
                </div>
                <div className="chinese-card p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
                  <h4 className="font-semibold text-chinese-red-dark mb-2 font-serif">公交</h4>
                  <div className="relative h-32 overflow-hidden rounded-lg mb-3">
                    <Image 
                      src="/images/公交车.jpg" 
                      alt="中国城市现代化公交系统" 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-gray-600">覆盖城市各个角落，价格便宜，适合深度游览</p>
                </div>
                <div className="chinese-card p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
                  <h4 className="font-semibold text-chinese-red-dark mb-2 font-serif">出租车</h4>
                  <div className="relative h-32 overflow-hidden rounded-lg mb-3">
                    <Image 
                      src="/images/出租车.jpg" 
                      alt="中国城市出租车服务" 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-gray-600">起步价10-15元，可使用滴滴等打车APP</p>
                </div>
                <div className="chinese-card p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
                  <h4 className="font-semibold text-chinese-red-dark mb-2 font-serif">共享单车</h4>
                  <div className="relative h-32 overflow-hidden rounded-lg mb-3">
                    <Image 
                      src="/images/共享单车.jpg" 
                      alt="中国城市共享单车服务" 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-gray-600">方便短途出行，扫码即可使用，价格低廉</p>
                </div>
              </div>
            </div>

            {/* 交通小贴士 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-chinese-red-dark mb-6 font-serif">交通小贴士</h3>
              <div className="chinese-card p-6 border-l-4 border-chinese-red">
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>提前规划行程，尤其是节假日期间，交通会比较拥堵</li>
                  <li>下载相关APP：12306（火车票）、航旅纵横（机票）、高德地图（导航）</li>
                  <li>携带有效身份证件，购票和乘车都需要</li>
                  <li>注意交通安全，遵守当地交通规则</li>
                  <li>旅游旺季建议提前预订交通票务</li>
                </ul>
              </div>
            </div>

            {/* 热门旅游城市交通枢纽 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-chinese-red-dark mb-6 font-serif">热门旅游城市交通枢纽</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-6 border-b text-left text-sm font-semibold text-gray-700">城市</th>
                      <th className="py-3 px-6 border-b text-left text-sm font-semibold text-gray-700">机场</th>
                      <th className="py-3 px-6 border-b text-left text-sm font-semibold text-gray-700">火车站</th>
                      <th className="py-3 px-6 border-b text-left text-sm font-semibold text-gray-700">主要交通</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-4 px-6 border-b">北京</td>
                      <td className="py-4 px-6 border-b">首都机场、大兴机场</td>
                      <td className="py-4 px-6 border-b">北京南站、北京站</td>
                      <td className="py-4 px-6 border-b">地铁、公交、出租车</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 border-b">上海</td>
                      <td className="py-4 px-6 border-b">浦东机场、虹桥机场</td>
                      <td className="py-4 px-6 border-b">上海虹桥站、上海站</td>
                      <td className="py-4 px-6 border-b">地铁、磁悬浮、出租车</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 border-b">广州</td>
                      <td className="py-4 px-6 border-b">白云机场</td>
                      <td className="py-4 px-6 border-b">广州南站、广州站</td>
                      <td className="py-4 px-6 border-b">地铁、公交、共享单车</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 border-b">成都</td>
                      <td className="py-4 px-6 border-b">天府机场、双流机场</td>
                      <td className="py-4 px-6 border-b">成都东站、成都站</td>
                      <td className="py-4 px-6 border-b">地铁、公交、出租车</td>
                    </tr>
                  </tbody>
                </table>
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
      <Footer />
    </div>
  );
}