// pages/index.tsx
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Problem {
  id: number;
  title: string;
  author?: string;
  date?: string;
  rating?: number;
  imageUrl?: string;
}

const HomePage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const [problemList, setProblemList] = useState<Problem[]>([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCreateProblem = () => {
    router.push('/header-page/create-problem');
  };

  const handleLogin = () => {
    router.push('/header-page/login');
  };

  const handleSignup = () => {
    router.push('/header-page/signup');
  };

  const fetchProblems = async () => {
    try {
      // 임시 데이터
      const mockData: Problem[] = [
        { 
          id: 1, 
          title: '내 뒤 배경 바꾸기'
        },
        { 
          id: 2, 
          title: '내가 원하는 화풍으로 바꾸기'
        },
        { 
          id: 3, 
          title: '사진을 영상으로 바꾸기'
        },
        { 
          id: 4, 
          title: '원하는 이미지 생성'
        },
        { 
          id: 5, 
          title: '두 이미지 합성'
        },
        { 
          id: 6, 
          title: '이미지를 3D영상으로 바꾸기'
        },
      ];

      setProblemList(mockData);
    } catch (error) {
      console.error('문제 목록을 불러오는데 실패했습니다:', error);
    }
  };

  useEffect(() => {
    fetchProblems();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      {/* 헤더 */}
      <header className="bg-white shadow-lg p-5 flex justify-between items-center mb-6">
        <div className="flex items-center">
          <img src="images/logo.png" alt="Logo" className="h-16 w-16 mr-3 rounded-full" />
          <h1 className="text-2xl font-bold text-indigo-600">AI 스냅샷</h1>
        </div>

        <div className="flex items-center space-x-4" style={{ width: '512px' }}>
          <input
            type="text"
            placeholder="원하는 기능 검색하기"
            className="w-full border-2 border-indigo-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
          <button 
            className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-all"
            aria-label="검색"
          >
            🔍
          </button>
        </div>

        <div className="relative flex items-center space-x-4">
          <button
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition-all"
            onClick={handleCreateProblem}
          >
            로그인하기
          </button>

          <div className="relative">
            <button
              className="bg-indigo-100 p-2 rounded-full border-2 border-indigo-300 text-indigo-600 cursor-pointer"
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              👤
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
                <button
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-indigo-100 transition-all"
                  onClick={handleLogin}
                >
                  로그인하기
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-indigo-100 transition-all"
                  onClick={handleSignup}
                >
                  회원가입하기
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <div className="flex">
        {/* 문제 카드 리스트 */}
        <main className="flex-1 grid grid-cols-3 gap-8 p-6">
          {problemList.map((problem) => (
            <Link 
              href={`/problem/${problem.id}`} 
              key={problem.id}
              className="block"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:scale-105">
                <div className="w-full h-48 bg-gray-200">
                  <img 
                    src={problem.imageUrl || `images/problem${problem.id}.jpg`}
                    alt={`문제 ${problem.id} 이미지`}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.currentTarget.src = 'images/default.jpg';
                    }}
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-bold text-gray-700">{problem.title}</h2>
                  </div>
                  {problem.author && <p className="text-gray-500">작성자: {problem.author}</p>}
                  {problem.date && <p className="text-gray-500">날짜: {problem.date}</p>}
                  <div className="mt-4 flex justify-between items-center">
                    {problem.rating !== undefined && (
                      <div className="text-sm text-gray-500">⭐ {problem.rating}</div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </main>

        {/* 사이드바 */}
        <aside className="w-1/5 bg-white p-6 shadow-lg rounded-2xl m-6">
          <nav className="flex flex-col space-y-6">
            <Link 
              href="/right-side-bar/my-completed/completed"
              className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors"
            >
              내가 찍은 사진 내역 확인하기
            </Link>
            <Link 
              href="/right-side-bar/my-in-progress/in-progress"
              className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors"
            >
            </Link>
            <Link 
              href="/right-side-bar/my-chat/chat"
              className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors"
            >
              내가 찍은 사진 공유하기
            </Link>
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default HomePage;