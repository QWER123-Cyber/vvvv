'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function NumberGuessingGame() {
  const [secretNumber, setSecretNumber] = useState<number>(0);
  const [guess, setGuess] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [attempts, setAttempts] = useState<number>(0);
  const [gameStatus, setGameStatus] = useState<'playing' | 'won'>('playing');

  // Initialize the game
  useEffect(() => {
    resetGame();
  }, []);

  // Generate a random number between 1 and 100
  const resetGame = () => {
    setSecretNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('猜一个1到100之间的数字');
    setAttempts(0);
    setGameStatus('playing');
  };

  // Handle guess submission
  const handleGuess = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedGuess = parseInt(guess);

    if (isNaN(parsedGuess) || parsedGuess < 1 || parsedGuess > 100) {
      setMessage('请输入1到100之间的有效数字');
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (parsedGuess === secretNumber) {
      setMessage(`恭喜你猜对了！数字是 ${secretNumber}，你用了 ${newAttempts} 次尝试`);
      setGameStatus('won');
    } else if (parsedGuess < secretNumber) {
      setMessage('太小了，再试一次');
    } else {
      setMessage('太大了，再试一次');
    }

    setGuess('');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 font-sans">
      <main className="flex flex-col items-center gap-8 p-8 bg-white rounded-2xl shadow-xl max-w-md w-full">
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={80}
            height={16}
            priority
          />
          <h1 className="text-3xl font-bold text-gray-800">猜数字游戏</h1>
        </div>

        <div className="w-full">
          <p className="text-lg text-center text-gray-600 mb-4">{message}</p>
          <form onSubmit={handleGuess} className="flex flex-col gap-4">
            <div>
              <label htmlFor="guess" className="block text-sm font-medium text-gray-700 mb-1">
                你的猜测
              </label>
              <input
                id="guess"
                type="number"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder="输入一个数字"
                disabled={gameStatus === 'won'}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={gameStatus === 'won'}
              className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              提交猜测
            </button>
            <button
              type="button"
              onClick={resetGame}
              className="w-full py-2 px-4 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors"
            >
              重新开始
            </button>
          </form>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>尝试次数: {attempts}</p>
        </div>
      </main>
    </div>
  );
}

