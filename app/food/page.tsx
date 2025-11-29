'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function FoodPage() {
  return (
    <div className="min-h-screen pt-20" style={{
      background: 'linear-gradient(135deg, #fff5e6 0%, #ffd700 100%)',
      backgroundImage: `url('/images/背景图.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {/* 导航栏 */}
      <Navbar />

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="chinese-title mb-6">美食推荐</h2>
          <div className="chinese-card p-8">
            <h3 className="text-2xl font-semibold text-chinese-red-dark mb-4 font-serif">中国美食文化</h3>
            <p className="text-gray-600 mb-6">中国美食历史悠久，菜系丰富多样，每个地区都有其独特的风味和特色小吃。</p>
            {/* 中国美食主题图片 */}
            <div className="relative h-64 overflow-hidden rounded-lg mb-8">
              <Image 
                src="/images/中国美食.jpg" 
                alt="中国美食" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              <div className="chinese-card p-6 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <h4 className="text-xl font-semibold text-chinese-red-dark mb-3 font-[var(--font-ma-shan-zheng)]">北京烤鸭</h4>
                <div className="relative h-48 overflow-hidden mb-4">
                  <Image 
                    src="/images/北京烤鸭.jpg" 
                    alt="北京烤鸭 - 色泽红艳、肉质细嫩的北京传统名菜" 
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-gray-600 flex-grow">北京烤鸭是北京的传统名菜，以色泽红艳、肉质细嫩、味道醇厚而闻名，被誉为"天下美味"。</p>
              </div>
              <div className="chinese-card p-6 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <h4 className="text-xl font-semibold text-chinese-red-dark mb-3 font-[var(--font-ma-shan-zheng)]">上海生煎包</h4>
                <div className="relative h-48 overflow-hidden mb-4">
                  <Image 
                    src="/images/上海生煎包.jpg" 
                    alt="上海生煎包 - 底部金黄酥脆、汤汁丰富的上海传统小吃" 
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-gray-600 flex-grow">上海生煎包是上海的传统小吃，外皮底部煎得金黄酥脆，内部汤汁丰富，肉馅鲜美多汁。</p>
              </div>
              <div className="chinese-card p-6 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <h4 className="text-xl font-semibold text-chinese-red-dark mb-3 font-[var(--font-ma-shan-zheng)]">河北驴肉火烧</h4>
                <div className="relative h-48 overflow-hidden mb-4">
                  <Image 
                    src="/images/河北驴肉火烧.jpg" 
                    alt="河北驴肉火烧 - 新鲜驴肉夹入酥脆火烧的河北传统名吃" 
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-gray-600 flex-grow">河北驴肉火烧是河北的传统名吃，以新鲜驴肉夹入酥脆的火烧中，口感层次丰富，香气四溢。</p>
              </div>
              <div className="chinese-card p-6 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <h4 className="text-xl font-semibold text-chinese-red-dark mb-3 font-[var(--font-ma-shan-zheng)]">湖北热干面</h4>
                <div className="relative h-48 overflow-hidden mb-4">
                  <Image 
                    src="/images/湖北热干面.jpg" 
                    alt="湖北热干面 - 面条筋道、芝麻酱香浓的武汉特色小吃" 
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-gray-600 flex-grow">湖北热干面是武汉的特色小吃，以面条筋道、芝麻酱香浓而著称，是武汉人早餐的首选。</p>
              </div>

              <div className="chinese-card p-6 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <h4 className="text-xl font-semibold text-chinese-red-dark mb-3 font-[var(--font-ma-shan-zheng)]">吉林冷面</h4>
                <div className="relative h-48 overflow-hidden mb-4">
                  <Image 
                    src="/images/吉林冷面.jpg" 
                    alt="吉林冷面 - 凉爽酸甜的东北特色美食" 
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-gray-600 flex-grow">吉林冷面是东北地区的特色美食，以凉爽的口感和酸甜的味道而受到喜爱，夏季食用尤为爽口。</p>
              </div>
              <div className="chinese-card p-6 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <h4 className="text-xl font-semibold text-chinese-red-dark mb-3 font-[var(--font-ma-shan-zheng)]">广西螺蛳粉</h4>
                <div className="relative h-48 overflow-hidden mb-4">
                  <Image 
                    src="/images/广西螺蛳粉.jpg" 
                    alt="广西螺蛳粉 - 风味独特、配料丰富的广西传统名吃" 
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-gray-600 flex-grow">广西螺蛳粉是广西壮族自治区的传统名吃，以独特的酸笋风味和丰富的配料著称，闻着臭吃着香。</p>
              </div>
              <div className="chinese-card p-6 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <h4 className="text-xl font-semibold text-chinese-red-dark mb-3 font-[var(--font-ma-shan-zheng)]">河南胡辣汤</h4>
                <div className="relative h-48 overflow-hidden mb-4">
                  <Image 
                    src="/images/河南胡辣汤.jpg" 
                    alt="河南胡辣汤 - 麻辣鲜香的河南传统早餐" 
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-gray-600 flex-grow">河南胡辣汤是河南地区的传统早餐，以其麻辣鲜香的口感而闻名，是河南人不可或缺的早餐选择。</p>
              </div>
              <div className="chinese-card p-6 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <h4 className="text-xl font-semibold text-chinese-red-dark mb-3 font-[var(--font-ma-shan-zheng)]">浙江金华火腿</h4>
                <div className="relative h-48 overflow-hidden mb-4">
                  <Image 
                    src="/images/浙江金华火腿.jpg" 
                    alt="浙江金华火腿 - 色泽鲜艳、香气浓郁的中国传统腌肉制品" 
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-gray-600 flex-grow">浙江金华火腿是中国传统的腌肉制品，以色泽鲜艳、香气浓郁、滋味鲜美而著称，是中国火腿中的珍品。</p>
              </div>
              <div className="chinese-card p-6 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <h4 className="text-xl font-semibold text-chinese-red-dark mb-3 font-[var(--font-ma-shan-zheng)]">辽宁鸡架</h4>
                <div className="relative h-48 overflow-hidden mb-4">
                  <Image 
                    src="/images/辽宁鸡架.jpg" 
                    alt="辽宁鸡架 - 独特腌制和烹饪的东北特色小吃" 
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-gray-600 flex-grow">辽宁鸡架是东北地区的特色小吃，以其独特的腌制和烹饪方法而受到欢迎，是下酒的绝佳选择。</p>
              </div>
              <div className="chinese-card p-6 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <h4 className="text-xl font-semibold text-chinese-red-dark mb-3 font-[var(--font-ma-shan-zheng)]">四川火锅</h4>
                <div className="relative h-48 overflow-hidden mb-4">
                  <Image 
                    src="/images/火锅.jpg" 
                    alt="四川火锅 - 麻辣鲜香的中国著名传统美食" 
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-gray-600 flex-grow">四川火锅是中国著名的传统美食，以麻辣鲜香的味道和丰富的食材搭配而闻名，是朋友聚会的热门选择。</p>
              </div>
              <div className="chinese-card p-6 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <h4 className="text-xl font-semibold text-chinese-red-dark mb-3 font-[var(--font-ma-shan-zheng)]">广东早茶</h4>
                <div className="relative h-48 overflow-hidden mb-4">
                  <Image 
                    src="/images/美食.jpg" 
                    alt="广东早茶 - 精致多样的广东传统饮食文化" 
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-gray-600 flex-grow">广东早茶是广东饮食文化的重要组成部分，以精致多样的点心和悠闲的用餐氛围而闻名。</p>
              </div>
              <div className="chinese-card p-6 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <h4 className="text-xl font-semibold text-chinese-red-dark mb-3 font-[var(--font-ma-shan-zheng)]">陕西肉夹馍</h4>
                <div className="relative h-48 overflow-hidden mb-4">
                  <Image 
                    src="/images/陕西肉夹馍.jpg" 
                    alt="陕西肉夹馍 - 外酥里嫩的陕西传统名吃" 
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-gray-600 flex-grow">陕西肉夹馍是陕西的传统名吃，以酥脆的白吉馍夹入炖煮入味的腊汁肉，外酥里嫩，肥而不腻。</p>
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