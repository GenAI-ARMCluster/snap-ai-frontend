// path: components/ChatComponent.tsx
import { useState, useEffect, useRef } from "react";

// WebSocket 관련 정보
// const WS_URL = '/api/ws';
// const PUB_CHAT_URL = (workspaceId: string) => `/api/pub/chat/${workspaceId}`;
// const SUB_CHAT_URL = (workspaceId: string) => `/api/sub/chat/${workspaceId}`;

const ChatComponent = ({ /* workspaceId */ }: { workspaceId: string }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const chatWindowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  // WebSocket 연결 설정 (주석 처리)
  /*
  useEffect(() => {
    const ws = new WebSocket(WS_URL);
    wsRef.current = ws;

    ws.onmessage = (event) => {
      const message = event.data;
      setMessages((prev) => [...prev, message]);
    };

    return () => {
      ws.close();
    };
  }, []);
  */

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages((prev) => [...prev, newMessage]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-80">
      <div
        ref={chatWindowRef}
        className="flex-grow overflow-y-auto bg-gray-100 p-4 rounded-lg"
      >
        {messages.map((msg, idx) => (
          <div key={idx} className="flex items-center mb-2">

          <div className="bg-indigo-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-2">
          A
          </div>


          <div key={idx} className="bg-gray-200 p-3 rounded-lg mb-2">
            {msg}
          </div>

          </div>
        ))}
      </div>
  
      {/* 메시지 입력과 Send 버튼을 동일 행으로 정렬 */}
      <div className="mt-4 flex items-center space-x-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-grow p-3 border-2 border-gray-300 rounded-lg focus:outline-none"
          placeholder="메시지를 입력하세요"
        />
        <button
          onClick={sendMessage}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
  
  
}

export default ChatComponent;
