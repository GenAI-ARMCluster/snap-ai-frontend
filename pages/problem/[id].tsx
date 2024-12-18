// path: pages/problem/[id].tsx

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

interface ProblemDetail {
  id: string | string[];
  title: string;
  description: string;
  imageUrl: string;
}

const ProblemDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [problemDetail, setProblemDetail] = useState<ProblemDetail | null>(null);
  const [userCode, setUserCode] = useState("");

  const fetchProblemDetail = useCallback(() => {
    const mockProblem: ProblemDetail = {
      id: id || "",
      title: "내 뒤 배경 바꾸기",
      description: `이 기능은 당신의 누끼를 따서 당신이 원하는 배경에 합성을 해줍니다.
      
1. 배경을 바꾸고 싶은 사진을 업로드하세요
2. 원하는 배경 이미지나 스타일을 프롬프트로 입력하세요
3. AI가 자동으로 누끼를 따고 새로운 배경과 합성합니다

자연스러운 합성을 위해 고품질 이미지를 사용하는 것을 추천드립니다.`,
      imageUrl: `/images/problem${id}.jpg`,
    };
    setProblemDetail(mockProblem);
  }, [id]);

  const handleSubmitCode = () => {
    if (!userCode) return alert("이미지를 생성해주세요!");
    alert("이미지가 다운로드됩니다!");
  };

  useEffect(() => {
    if (id) {
      fetchProblemDetail();
    }
  }, [id, fetchProblemDetail]);

  if (!problemDetail) return <div>로딩 중...</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="container mx-auto p-6 flex flex-grow">
        {/* 왼쪽: 문제 내용 */}
        <div className="w-1/2 bg-white p-6 rounded-lg shadow-lg mr-4 flex-grow">
          <h1 className="text-3xl font-bold text-indigo-600">{problemDetail.title}</h1>
          <div className="relative w-full h-[400px] mt-6"> {/* 이미지 높이 증가 */}
            <Image
              src={problemDetail.imageUrl}
              alt={problemDetail.title}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded"
              priority // 이미지 빠른 로딩을 위해 추가
            />
          </div>
          <p className="text-gray-600 mt-6 text-lg whitespace-pre-line"> {/* 여백과 텍스트 크기 조정 */}
            {problemDetail.description}
          </p>
        </div>

        {/* 오른쪽: 이미지 생성 및 프롬프트 영역 */}
        <div className="w-1/2 flex flex-col space-y-6">
          {/* 이미지 업로드 및 결과 */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">이미지 업로드</h2>
            <div className="mb-4">
              <input
                type="file"
                accept="image/*"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="relative w-full h-64 bg-gray-100 rounded-lg mb-4">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                결과 이미지가 여기에 표시됩니다
              </div>
            </div>
            <button
              onClick={handleSubmitCode}
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all"
            >
              다운로드
            </button>
          </div>

          {/* 프롬프트 입력 영역 */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">원하는 배경 스타일 입력</h2>
            <div className="mb-4">
              <textarea
                value={userCode}
                onChange={(e) => setUserCode(e.target.value)}
                placeholder="원하는 배경을 자세히 설명해주세요. (예: 붉은 노을이 지는 해변가, 네온사인이 빛나는 도시 거리 등)"
                className="w-full h-32 p-4 border border-gray-300 rounded-lg resize-none"
              />
            </div>
            <button
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all"
            >
              이미지 생성하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDetailPage;