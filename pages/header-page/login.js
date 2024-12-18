import React from 'react';

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // 쿠키에서 사용자 정보 가져오기
    const storedEmail = getCookie("email");
    const storedPassword = getCookie("password");

    console.log("Stored Email:", storedEmail);
    console.log("Stored Password:", storedPassword);
    console.log("Input Email:", email);
    console.log("Input Password:", password);

    if (email === storedEmail && password === storedPassword) {
      alert("로그인 성공!");
      document.cookie = `loggedIn=true; path=/;`; // 로그인 상태를 쿠키로 저장
      window.location.href = "/"; // 로그인 성공 후 리다이렉트
    } else {
      alert("이메일 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  // 쿠키 값을 가져오는 함수
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return decodeURIComponent(parts.pop().split(';').shift());
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-indigo-600 mb-6 text-center">로그인</h1>

        <form onSubmit={handleLogin}>
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
            로그인
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            계정이 없으신가요? <a href="/signup" className="text-indigo-600 font-bold">회원가입</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
