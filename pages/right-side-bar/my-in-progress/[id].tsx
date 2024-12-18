// path: pages/right-side-bar/my-in-progress/[id].tsx

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ChatComponent from "../../../components/ChatComponent";

// 문제의 타입 정의
interface ProblemDetail {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  progress: string;
  submissionCode: string;
}

// 예시로 사용된 풀고 있는 문제 데이터
const mockInProgressProblems: ProblemDetail[] = [
  {
    id: 1,
    title: "최단거리 문제",
    description: "이 문제는 그래프에서 최단거리를 구하는 문제입니다.",
    author: "작성자 A",
    date: "2023-10-01",
    progress: "50%",
    submissionCode: "def shortest_path(graph): return graph",
  },
  {
    id: 2,
    title: "다익스트라 알고리즘",
    description: "이 문제는 다익스트라 알고리즘을 구현하는 문제입니다.",
    author: "작성자 B",
    date: "2023-10-02",
    progress: "70%",
    submissionCode: "def dijkstra(graph): return graph",
  },
  {
    id: 3,
    title: "DFS와 BFS",
    description: "이 문제는 DFS와 BFS 알고리즘을 구현하는 문제입니다.",
    author: "작성자 C",
    date: "2023-10-03",
    progress: "30%",
    submissionCode: "def dfs_bfs(graph): return graph",
  },
];

const InProgressProblemDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [problemDetail, setProblemDetail] = useState<ProblemDetail | null>(null);
  const [userCode, setUserCode] = useState(""); // 사용자가 작성하는 코드를 저장하는 상태

  useEffect(() => {
    if (id) {
      // Mock 데이터에서 문제를 찾는다
      const problem = mockInProgressProblems.find(
        (p) => p.id === parseInt(id as string)
      );
      setProblemDetail(problem || null);
    }
  }, [id]);

  if (!problemDetail) return <div>로딩 중...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col">
      <div className="container mx-auto flex flex-grow space-x-6">
        {/* 왼쪽: 문제 내용 */}
        <div className="w-1/2 bg-white p-6 rounded-lg shadow-lg flex-grow">
          <h1 className="text-3xl font-bold text-indigo-600 mb-4">
            {problemDetail.title}
          </h1>
          <p className="text-gray-600 mb-4">{problemDetail.description}</p>
          <p className="text-gray-600 mb-2">작성자: {problemDetail.author}</p>
          <p className="text-gray-600 mb-2">시작 날짜: {problemDetail.date}</p>
          <p className="text-gray-600 mb-4">진행 상황: {problemDetail.progress}</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">현재 저장된 코드</h2>
          <pre className="bg-gray-100 p-4 rounded-lg text-gray-800">
            {problemDetail.submissionCode}
          </pre>
        </div>

        {/* 오른쪽: 코드 제출 및 채팅 영역 */}
        <div className="w-1/2 flex flex-col space-y-6">
          {/* 코드 제출란 */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">코드 수정해서 제출</h2>
            <textarea
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              placeholder="여기에 코드를 작성하세요"
              className="w-full h-64 p-4 border border-gray-300 rounded-lg"
            />
            <button
              onClick={() => alert("코드가 제출되었습니다!")}
              className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-all"
            >
              제출
            </button>
          </div>

          {/* 채팅 영역 */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">참가중인 채팅</h2>
            <ChatComponent workspaceId={String(id)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InProgressProblemDetail;