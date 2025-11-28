'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

// 定义游戏卡片类型
interface Card {
  id: number;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export default function MemoryGamePage() {
  // 游戏状态
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [canUseHint, setCanUseHint] = useState(true);

  // 游戏配置
  const cardImages = [
    { id: 1, name: '长城', image: '/images/八达岭长城.jpg' },
    { id: 2, name: '故宫午门', image: '/images/故宫午门.jpg' },
    { id: 3, name: '太和殿', image: '/images/太和殿.jpg' },
    { id: 4, name: '黄山', image: '/images/黄山.jpg' },
    { id: 5, name: '黄鹤楼', image: '/images/黄鹤楼.jpg' },
    { id: 6, name: '御花园', image: '/images/御花园.jpg' },
    { id: 7, name: '故宫雪景', image: '/images/故宫雪景.jpg' },
    { id: 8, name: '故宫夜景', image: '/images/故宫夜景.jpg' },
    { id: 9, name: '乾清宫', image: '/images/乾清宫.jpg' },
    { id: 10, name: '金銮宝座', image: '/images/金銮宝座.jpg' },
    { id: 11, name: '黄山奇松', image: '/images/奇松.jpg' },
    { id: 12, name: '黄山怪石', image: '/images/怪石.jpg' },
  ];

  // 初始化游戏
  const initializeGame = () => {
    // 创建卡片对
    const cardPairs: Card[] = [];
    cardImages.forEach((image, index) => {
      // 为每个图片创建两张卡片
      cardPairs.push(
        { id: index * 2, image: image.image, isFlipped: false, isMatched: false },
        { id: index * 2 + 1, image: image.image, isFlipped: false, isMatched: false }
      );
    });

    // 打乱卡片顺序
    const shuffledCards = cardPairs.sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
    setGameStarted(true);
    setGameFinished(false);
    setShowInstructions(false);
  };

  // 翻牌功能
  const handleCardClick = (cardId: number) => {
    // 如果游戏未开始或已经匹配，不做任何操作
    if (!gameStarted || flippedCards.length === 2) return;

    const card = cards.find(c => c.id === cardId);
    if (!card || card.isFlipped || card.isMatched) return;

    // 翻牌
    const updatedCards = cards.map(c => 
      c.id === cardId ? { ...c, isFlipped: true } : c
    );
    setCards(updatedCards);
    setFlippedCards([...flippedCards, cardId]);

    // 播放翻牌音效
    playFlipSound();
  };

  // 检查匹配
  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstId, secondId] = flippedCards;
      const firstCard = cards.find(c => c.id === firstId);
      const secondCard = cards.find(c => c.id === secondId);

      if (firstCard && secondCard) {
        // 增加步数
        setMoves(prev => prev + 1);
        // 恢复提示按钮可用性
        setCanUseHint(true);

        if (firstCard.image === secondCard.image) {
          // 匹配成功
          const updatedCards = cards.map(c => 
            c.id === firstId || c.id === secondId ? { ...c, isMatched: true } : c
          );
          setCards(updatedCards);
          setMatches(prev => prev + 1);
          setFlippedCards([]);

          // 播放匹配成功音效
          playMatchSound();

          // 检查游戏是否结束
          if (matches + 1 === cardImages.length) {
            setGameFinished(true);
            // 播放游戏结束音效
            playWinSound();
          }
        } else {
          // 匹配失败，翻回去
          setTimeout(() => {
            const updatedCards = cards.map(c => 
              c.id === firstId || c.id === secondId ? { ...c, isFlipped: false } : c
            );
            setCards(updatedCards);
            setFlippedCards([]);
          }, 1000);
        }
      }
    }
  }, [flippedCards, cards, matches]);

  // 提示功能
  const handleHint = () => {
    if (!canUseHint || flippedCards.length > 0 || gameFinished || !gameStarted) {
      return;
    }

    // 找到一对未匹配且未翻开的卡片
    const unmatchedCards = cards.filter(card => !card.isMatched && !card.isFlipped);
    if (unmatchedCards.length < 2) return;

    // 按图片分组
    const imageGroups: { [key: string]: number[] } = {};
    unmatchedCards.forEach(card => {
      if (!imageGroups[card.image]) {
        imageGroups[card.image] = [];
      }
      imageGroups[card.image].push(card.id);
    });

    // 找到有至少两张卡片的图片组
    let hintCardIds: number[] = [];
    for (const image in imageGroups) {
      if (imageGroups[image].length >= 2) {
        hintCardIds = imageGroups[image].slice(0, 2);
        break;
      }
    }

    if (hintCardIds.length === 2) {
      // 暂时禁用提示按钮
      setCanUseHint(false);
      
      // 翻转提示的卡片
      const updatedCards = cards.map(card => 
        hintCardIds.includes(card.id) ? { ...card, isFlipped: true } : card
      );
      setCards(updatedCards);
      setFlippedCards(hintCardIds);
      
      // 播放翻牌音效
      hintCardIds.forEach(() => playFlipSound());
    }
  };

  // 音效函数
  const playFlipSound = () => {
    // 创建简单的翻牌音效
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.2);

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.2);
  };

  const playMatchSound = () => {
    // 创建匹配成功音效
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.3);

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  };

  const playWinSound = () => {
    // 创建游戏胜利音效
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
    oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime + 0.2);
    oscillator.frequency.setValueAtTime(1200, audioContext.currentTime + 0.3);

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime + 0.3);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 pt-20">
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
              <Link href="/game" className="text-red-600 hover:text-red-800 font-medium">翻牌游戏</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">中国景点翻牌游戏</h2>
          
          {/* 游戏信息 */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-wrap justify-between items-center mb-4">
              <div className="mb-4 sm:mb-0">
                <p className="text-lg font-medium text-gray-700">步数: <span className="text-blue-600">{moves}</span></p>
                <p className="text-lg font-medium text-gray-700">匹配: <span className="text-green-600">{matches}/{cardImages.length}</span></p>
              </div>
              <div className="flex space-x-4 flex-wrap">
                <button 
                  onClick={initializeGame}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  开始新游戏
                </button>
                <button 
                  onClick={() => setShowInstructions(!showInstructions)}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  {showInstructions ? '隐藏说明' : '游戏说明'}
                </button>
                <button 
                  onClick={handleHint}
                  disabled={!canUseHint || flippedCards.length > 0 || gameFinished || !gameStarted}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  💡 提示
                </button>
              </div>
            </div>

            {/* 游戏说明 */}
            {showInstructions && (
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-800 mb-2">游戏规则：</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>点击卡片来翻牌，寻找相同的中国景点图片</li>
                  <li>每次只能翻开两张卡片</li>
                  <li>如果两张卡片匹配，它们会保持翻开状态</li>
                  <li>如果不匹配，它们会自动翻回去</li>
                  <li>用最少的步数找出所有匹配的卡片</li>
                  <li>游戏包含长城、故宫、黄山、黄鹤楼等著名景点</li>
                </ul>
              </div>
            )}
          </div>

          {/* 游戏卡片区域 */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            {gameFinished ? (
              <div className="text-center py-16">
                <h3 className="text-4xl font-bold text-green-600 mb-4">恭喜你赢了！</h3>
                <p className="text-xl text-gray-700 mb-6">你用了 {moves} 步完成了游戏！</p>
                <button 
                  onClick={initializeGame}
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  再玩一次
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {cards.map(card => (
                  <div 
                    key={card.id}
                    className={`relative cursor-pointer transition-all duration-300 transform hover:scale-105 ${card.isMatched ? 'opacity-80' : ''}`}
                    onClick={() => handleCardClick(card.id)}
                  >
                    {/* 卡片容器 */}
                    <div className="w-full h-40 relative">
                      {/* 卡片背面（默认显示） */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-red-500 to-purple-600 flex items-center justify-center rounded-lg overflow-hidden shadow-md transition-opacity duration-500 ${card.isFlipped || card.isMatched ? 'opacity-0' : 'opacity-100'}`}>
                        <span className="text-white font-bold text-xl">?</span>
                      </div>
                      {/* 卡片正面（翻转后显示） */}
                      <div className={`absolute inset-0 bg-white rounded-lg overflow-hidden shadow-md transition-opacity duration-500 ${card.isFlipped || card.isMatched ? 'opacity-100' : 'opacity-0'}`}>
                        <img 
                          src={card.image} 
                          alt="中国景点" 
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 未开始提示 */}
            {!gameStarted && cards.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600 mb-6">点击"开始新游戏"按钮开始游戏！</p>
              </div>
            )}
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
                <li><Link href="/game" className="text-gray-400 hover:text-white transition-colors duration-300">翻牌游戏</Link></li>
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

      {/* 移除3D翻转的复杂CSS，使用简单的透明度切换 */}
    </div>
  );
}