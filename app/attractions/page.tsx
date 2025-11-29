'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function AttractionsPage() {
  // 为景点详情页面添加山水主题背景
  const pageStyle = {
    backgroundImage: `linear-gradient(135deg, rgba(255, 245, 238, 0.9) 0%, rgba(255, 222, 173, 0.8) 50%, rgba(224, 255, 255, 0.7) 100%), url('/images/云海.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  
  const attractions = [
    {
      id: 1,
      name: '黄山 - 奇松怪石的仙境',
      image: '/images/黄山.jpg',
      alt: '黄山全景图，展示了奇松、怪石和云海的壮丽景观',
      story: '黄山，被誉为“天下第一奇山”，以奇松、怪石、云海、温泉“四绝”闻名于世。明代旅行家徐霞客曾两次登临黄山，留下“五岳归来不看山，黄山归来不看岳”的千古名句。黄山的奇松形态各异，有的如迎客松般伸展双臂欢迎四海宾客，有的如黑虎松般雄伟苍劲。怪石则似人似物，似鸟似兽，形态各异，令人浮想联翩。站在光明顶，远眺云海翻涌，仿佛置身仙境之中，让人忘却尘世的烦恼。'
    },
    {
      id: 2,
      name: '八达岭长城 - 中华民族的脊梁',
      image: '/images/八达岭长城.jpg',
      alt: '八达岭长城蜿蜒盘旋在崇山峻岭之间，如同一条巨龙',
      story: '八达岭长城，是明长城中保存最好、最具代表性的一段，也是万里长城的精华所在。它像一条巨龙蜿蜒盘旋在崇山峻岭之间，见证了中华民族的沧桑历史。站在长城的烽火台上，仿佛能听到古代士兵们的呐喊声和战马的嘶鸣声。每一块砖石都承载着历史的厚重，每一段城墙都诉说着民族的坚韧。八达岭长城不仅是一道军事防御工程，更是中华民族的精神象征，激励着一代又一代中华儿女奋勇向前。'
    },
    {
      id: 3,
      name: '故宫 - 皇家宫殿的辉煌',
      image: '/images/太和殿.jpg',
      alt: '故宫太和殿，金銮宝座见证了无数皇帝的登基大典',
      story: '故宫，旧称紫禁城，是中国明清两代的皇家宫殿，也是世界上现存规模最大、保存最为完整的木质结构古建筑群之一。走进故宫，仿佛穿越时空，回到了明清时期的皇家生活。太和殿的金銮宝座见证了无数皇帝的登基大典，乾清宫的龙床聆听了无数帝王的夜话，御花园的亭台楼阁记录了无数宫女的欢笑与泪水。故宫的每一座宫殿、每一条走廊、每一块地砖都承载着丰富的历史文化内涵，是中华文明的重要见证。'
    },
    {
      id: 4,
      name: '黄鹤楼 - 江南三大名楼之首',
      image: '/images/黄鹤楼.jpg',
      alt: '黄鹤楼雄踞于武汉蛇山之巅，俯瞰长江',
      story: '黄鹤楼，位于湖北省武汉市长江南岸的武昌蛇山之巅，享有“天下绝景”之称，是江南三大名楼之首。历代文人墨客在此留下了许多脍炙人口的诗篇，其中以唐代诗人崔颢的《黄鹤楼》最为著名：“昔人已乘黄鹤去，此地空余黄鹤楼。黄鹤一去不复返，白云千载空悠悠。”登上黄鹤楼，远眺长江滚滚东流，近观武汉三镇的繁华景象，让人感受到历史与现代的交融，自然与人文的和谐。'
    },
    {
      id: 5,
      name: '黄山云海 - 天地间的梦幻之境',
      image: '/images/云海.jpg',
      alt: '黄山云海翻涌，山峰若隐若现，如仙境般梦幻',
      story: '黄山云海，是黄山四绝之一，也是黄山最具特色的景观之一。每当雨过天晴，黄山的山谷中就会升起层层云雾，如同大海的波涛般翻涌起伏。站在山峰之巅，俯瞰云海，仿佛置身于仙境之中。云海时而如棉絮般轻盈，时而如波涛般汹涌，时而如瀑布般倾泻而下，时而如群峰般连绵起伏。黄山云海的变幻莫测，让人感叹大自然的鬼斧神工，也让人感受到天地间的神奇与美丽。'
    },
    {
      id: 6,
      name: '黄山奇松 - 坚韧不拔的生命奇迹',
      image: '/images/奇松.jpg',
      alt: '黄山奇松生长在悬崖峭壁之上，展现出顽强的生命力',
      story: '黄山奇松是黄山“四绝”之首，以其独特的形态和顽强的生命力著称。它们生长在悬崖峭壁之上，根系深深地扎入岩石缝隙，展现出坚韧不拔的生命力。黄山奇松形态各异，有的如迎客松般伸展双臂欢迎四海宾客，有的如黑虎松般雄伟苍劲，有的如连理松般相依相伴。每一棵奇松都有自己的故事，每一种形态都展现出大自然的神奇创造力。'
    },
    {
      id: 7,
      name: '黄山怪石 - 大自然的艺术杰作',
      image: '/images/怪石.jpg',
      alt: '黄山怪石形态各异，栩栩如生，如大自然的艺术杰作',
      story: '黄山怪石是黄山“四绝”之一，以其奇特的形状和丰富的想象力著称。它们或似人似物，或似鸟似兽，形态各异，栩栩如生。黄山怪石分布于山峰、山谷、悬崖等各个角落，有的如飞来石般凭空而立，有的如猴子观海般惟妙惟肖，有的如仙人指路般神秘莫测。这些怪石经过亿万年的风化和侵蚀，形成了独特的自然景观，让人流连忘返。'
    },
    {
      id: 8,
      name: '北京故宫午门 - 紫禁城的正门',
      image: '/images/故宫午门.jpg',
      alt: '北京故宫午门，是紫禁城的正门，建筑宏伟壮观',
      story: '午门是北京故宫的正门，位于紫禁城南北轴线的南端，是明清两代皇帝举行重大仪式的地方。午门由城楼和东西雁翅楼组成，平面呈凹字形，气势雄伟壮观。每年冬至，皇帝会在此举行祭天仪式；每年夏至，会在此举行祭地仪式。午门也是颁发皇帝诏书的地方，重大节日时还会举行朝贺仪式。午门的建筑风格体现了中国古代皇家建筑的威严和气势，是中国古代建筑艺术的杰出代表。'
    }
  ];

  return (
    <div className="min-h-screen pt-20" style={pageStyle}>
      {/* 导航栏 */}
      <Navbar />

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="chinese-title mb-8 text-center">中国著名景点故事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {attractions.map((attraction) => (
              <div 
                key={attraction.id} 
                className="chinese-card overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden border-b-4 border-chinese-red-dark">
                  <Image 
                    src={attraction.image} 
                    alt={attraction.alt} 
                    fill 
                    className="object-cover hover:scale-115 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <h3 className="text-white text-xl font-bold p-4 font-serif">{attraction.name.split(' - ')[0]}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-chinese-red-dark mb-3 font-serif">{attraction.name}</h3>
                  <p className="text-gray-700 leading-relaxed line-clamp-5">{attraction.story}</p>
                  <div className="mt-4 text-right">
                    <span className="inline-block text-chinese-red-dark hover:text-chinese-red-light transition-colors font-semibold">了解更多 →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 text-center">
          <Link 
            href="/" 
            className="chinese-button" 
          >
            返回首页
          </Link>
        </section>
      </main>

      {/* 页脚 */}
      <Footer />
    </div>
  );
}