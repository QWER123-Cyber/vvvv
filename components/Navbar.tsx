'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* 导航栏 */}
      <nav className="bg-cover bg-center bg-no-repeat shadow-md fixed top-0 left-0 right-0 z-50 border-b-2 border-chinese-gold" style={{ backgroundImage: `url('/images/背景图.jpg')` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-chinese-red chinese-text-shadow">中国旅游文化网</span>
            </div>
            {/* 桌面端导航 */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-chinese-ink hover:text-chinese-red font-medium border-b-2 border-transparent hover:border-chinese-red transition-all">首页</Link>
              <Link href="/attractions" className="text-chinese-ink hover:text-chinese-red font-medium border-b-2 border-transparent hover:border-chinese-red transition-all">景点详情</Link>
              <Link href="/food" className="text-chinese-ink hover:text-chinese-red font-medium border-b-2 border-transparent hover:border-chinese-red transition-all">美食推荐</Link>
              <Link href="/transport" className="text-chinese-ink hover:text-chinese-red font-medium border-b-2 border-transparent hover:border-chinese-red transition-all">交通指南</Link>
            </div>
            {/* 移动端汉堡菜单按钮 */}
            <div className="md:hidden flex items-center">
              <button 
                className="text-chinese-ink hover:text-chinese-red focus:outline-none"
                onClick={toggleMenu}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 移动端导航菜单 */}
      {isMenuOpen && (
        <div className="md:hidden bg-chinese-light fixed inset-0 z-50 overflow-y-auto">
          <div className="flex flex-col p-4">
            <div className="flex justify-end mb-8 pt-4">
              <button 
                className="text-chinese-ink hover:text-chinese-red focus:outline-none"
                onClick={toggleMenu}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col space-y-6 items-center">
              <Link 
                href="/" 
                className="text-2xl font-medium text-chinese-ink hover:text-chinese-red transition-colors"
                onClick={closeMenu}
              >
                首页
              </Link>
              <Link 
                href="/attractions" 
                className="text-2xl font-medium text-chinese-ink hover:text-chinese-red transition-colors"
                onClick={closeMenu}
              >
                景点详情
              </Link>
              <Link 
                href="/food" 
                className="text-2xl font-medium text-chinese-ink hover:text-chinese-red transition-colors"
                onClick={closeMenu}
              >
                美食推荐
              </Link>
              <Link 
                href="/transport" 
                className="text-2xl font-medium text-chinese-ink hover:text-chinese-red transition-colors"
                onClick={closeMenu}
              >
                交通指南
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}