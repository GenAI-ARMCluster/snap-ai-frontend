// /header-page/create-problem.js
import React, { useState } from 'react';

const CreateProblem = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [solutionCode, setSolutionCode] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('Python');
  const [image, setImage] = useState(null);

  // 이미지 파일 선택 핸들러
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // 문제 등록 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    // 문제 등록 로직 처리
    console.log({
      title,
      description,
      solutionCode,
      selectedLanguage,
      image
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center">알고리즘 문제 등록하기</h1>

        <form onSubmit={handleSubmit}>
          {/* 제목 입력 */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              제목
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="문제 제목을 입력하세요"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* 문제 내용 입력 */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              문제 내용
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="문제 내용을 입력하세요"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="6"
              required
            ></textarea>
          </div>

          {/* 정답 코드 입력 */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="solutionCode">
              정답 코드
            </label>
            <textarea
              id="solutionCode"
              value={solutionCode}
              onChange={(e) => setSolutionCode(e.target.value)}
              placeholder="정답 코드를 입력하세요"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="4"
              required
            ></textarea>
          </div>

          {/* 사진 첨부 */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
              사진 첨부
            </label>
            <input
              type="file"
              id="image"
              onChange={handleImageChange}
              className="w-full text-gray-700"
            />
          </div>

          {/* 언어 선택 */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="language">
              언어 선택
            </label>
            <select
              id="language"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Python">Python</option>
              <option value="JavaScript">JavaScript</option>
              <option value="C++">C++</option>
              <option value="Java">Java</option>
            </select>
          </div>

          {/* 문제 등록 버튼 */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-all"
          >
            문제 등록
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProblem;
