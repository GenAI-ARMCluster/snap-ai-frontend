import React from 'react';

const Signup = () => {
  const handleSignup = (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username && email && password) {
      // 쿠키에 사용자 정보 저장
      document.cookie = `username=${username}; path=/;`;
      document.cookie = `email=${email}; path=/;`;
      document.cookie = `password=${password}; path=/;`;

      alert('회원가입 성공!');
      
      // 로그인 페이지로 리다이렉트
      window.location.href = "/header-page/login"; 
    } else {
      alert("모든 필드를 입력해주세요.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-indigo-600 mb-6 text-center">회원가입</h1>

        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              사용자 이름
            </label>
            <input
              type="text"
              id="username"
              placeholder="사용자 이름을 입력하세요"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              이메일
            </label>
            <input
              type="email"
              id="email"
              placeholder="이메일을 입력하세요"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-all"
          >
            회원가입
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            이미 계정이 있으신가요? <a href="/login" className="text-indigo-600 font-bold">로그인</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
