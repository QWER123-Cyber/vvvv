'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

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
    { id: 1, name: '长城', image: '/images/八达岭长城.jpg', alt: '中国万里长城八达岭段' },
    { id: 2, name: '故宫午门', image: '/images/故宫午门.jpg', alt: '北京故宫午门全景' },
    { id: 3, name: '太和殿', image: '/images/太和殿.jpg', alt: '故宫太和殿宏伟景观' },
    { id: 4, name: '黄山', image: '/images/黄山.jpg', alt: '安徽黄山风光' },
    { id: 5, name: '黄鹤楼', image: '/images/黄鹤楼.jpg', alt: '武汉黄鹤楼古建筑' },
    { id: 6, name: '黄山云海', image: '/images/云海.jpg', alt: '黄山壮观云海景观' },
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
    <div className="min-h-screen pt-20" style={{
      background: 'linear-gradient(135deg, #f3e5f5 0%, #9c27b0 100%)',
      backgroundImage: `url('/images/背景图.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {/* 导航栏 */}
      <Navbar />

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="chinese-title mb-6 text-center">中国景点翻牌游戏</h2>
          
          {/* 游戏信息 */}
          <div className="chinese-card p-6 mb-8">
            <div className="flex flex-wrap justify-between items-center mb-4">
              <div className="mb-4 sm:mb-0">
                <p className="text-lg font-medium text-gray-700">步数: <span className="text-chinese-red">{moves}</span></p>
                <p className="text-lg font-medium text-gray-700">匹配: <span className="text-chinese-red-dark">{matches}/{cardImages.length}</span></p>
              </div>
              <div className="flex space-x-4 flex-wrap">
                <button 
                  onClick={initializeGame}
                  className="chinese-button py-2 px-6"
                >
                  开始新游戏
                </button>
                <button 
                  onClick={() => setShowInstructions(!showInstructions)}
                  className="chinese-button py-2 px-6"
                >
                  {showInstructions ? '隐藏说明' : '游戏说明'}
                </button>
                <button 
                  onClick={handleHint}
                  disabled={!canUseHint || flippedCards.length > 0 || gameFinished || !gameStarted}
                  className="chinese-button py-2 px-6 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  💡 提示
                </button>
              </div>
            </div>

            {/* 游戏说明 */}
            {showInstructions && (
              <div className="chinese-card p-4 border-l-4 border-chinese-red">
                <h3 className="font-semibold text-chinese-red-dark mb-2 font-serif">游戏规则：</h3>
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
          <div className="chinese-card p-8">
            {gameFinished ? (
              <div className="text-center py-16">
                <h3 className="text-4xl font-bold text-chinese-red-dark mb-4 font-serif">恭喜你赢了！</h3>
                <p className="text-xl text-gray-700 mb-6">你用了 {moves} 步完成了游戏！</p>
                <button 
                  onClick={initializeGame}
                  className="chinese-button py-3 px-8"
                >
                  再玩一次
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
                {cards.map(card => {
                  // 找到对应的卡片信息
                  const cardInfo = cardImages.find(img => img.image === card.image);
                  return (
                    <div 
                      key={card.id}
                      className={`relative cursor-pointer transition-all duration-600 transform ${card.isMatched ? 'opacity-60 scale-95' : 'hover:scale-105 hover:shadow-xl'}`}
                      onClick={() => handleCardClick(card.id)}
                    >
                      {/* 卡片容器 */}
                      <div className="w-full h-40 sm:h-48 relative">
                        {/* 卡片背面（默认显示） */}
                        <div className={`absolute inset-0 bg-gradient-to-br from-chinese-red to-chinese-red-dark flex items-center justify-center rounded-lg overflow-hidden shadow-lg transition-opacity duration-500 border-2 border-white/20 ${card.isFlipped || card.isMatched ? 'opacity-0' : 'opacity-100'}`}>
                          <span className="text-white font-bold text-xl font-serif">?</span>
                        </div>
                        {/* 卡片正面（翻转后显示） */}
                        <div className={`absolute inset-0 bg-white rounded-lg overflow-hidden shadow-lg transition-opacity duration-500 border-2 border-chinese-gold ${card.isFlipped || card.isMatched ? 'opacity-100' : 'opacity-0'}`}>
                          <div className="relative w-full h-full">
                            <Image 
                              src={card.image} 
                              alt={cardInfo?.alt || "中国景点"} 
                              fill
                              className="object-cover transition-transform duration-300 hover:scale-110"
                              loading="lazy"
                            />
                            {card.isFlipped && (
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                                <p className="text-white font-bold text-center text-sm font-serif">{cardInfo?.name}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
      <Footer />

      {/* 移除3D翻转的复杂CSS，使用简单的透明度切换 */}
    </div>
  );
}