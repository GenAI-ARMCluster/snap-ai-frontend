// path: pages/right-side-bar/my-in-progress/in-progress.tsx

import { useRouter } from 'next/router';

// 문제의 타입 정의
interface Problem {
  id: number;
  title: string;
  author: string;
  date: string;
  progress: string;
}

const InProgressPage: React.FC = () => {
  const router = useRouter();

  // 풀고 있는 문제 목록 예시 데이터
  const inProgressProblems: Problem[] = [
    { id: 1, title: '최단거리 문제', author: '작성자 A', date: '2023-10-01', progress: '50%' },
    { id: 2, title: '다익스트라 알고리즘', author: '작성자 B', date: '2023-10-02', progress: '70%' },
    { id: 3, title: 'DFS와 BFS', author: '작성자 C', date: '2023-10-03', progress: '30%' }
  ];

  const handleProblemClick = (id: number) => {
    // 클릭 시 해당 문제의 상세 페이지로 이동
    router.push(`/right-side-bar/my-in-progress/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-indigo-600 mb-4">풀고 있는 문제</h1>
      <ul>
        {inProgressProblems.map((problem) => (
          <li
            key={problem.id}
            className="bg-white p-4 mb-4 rounded-lg shadow-lg cursor-pointer hover:bg-gray-100 transition-all"
            onClick={() => handleProblemClick(problem.id)}
          >
            <h2 className="text-xl font-bold text-gray-800">{problem.title}</h2>
            <p className="text-gray-600">작성자: {problem.author}</p>
            <p className="text-gray-600">진행 상황: {problem.progress}</p>
            <p className="text-gray-600">시작 날짜: {problem.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InProgressPage;
