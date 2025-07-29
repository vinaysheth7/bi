import React from "react";

const ChatWidget = () => {
  return (
    <div className="fixed bottom-6 right-6 w-80 bg-white shadow-xl rounded-lg overflow-hidden border border-gray-300 flex flex-col text-sm font-sans">
      <div className="bg-indigo-600 text-white px-4 py-2 font-semibold">
        🤖 Chatbot Assistant
      </div>

      <div className="flex flex-col gap-2 px-4 py-3 bg-gray-50 h-64 overflow-y-auto">
        <div className="self-start bg-gray-200 px-3 py-2 rounded-2xl max-w-[70%]">
          Hello! How can I help you today?
        </div>
        <div className="self-end bg-indigo-100 px-3 py-2 rounded-2xl max-w-[70%]">
          Just exploring your site.
        </div>
        <div className="self-start bg-gray-200 px-3 py-2 rounded-2xl max-w-[70%]">
          Great! Feel free to ask anything.
        </div>
      </div>

      <div className="flex items-center gap-2 px-3 py-2 border-t bg-white">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-3 py-2 border rounded-full text-gray-700 bg-gray-100 cursor-not-allowed"
          disabled
        />
        <button
          className="px-3 py-2 bg-indigo-600 text-white rounded-full cursor-not-allowed"
          disabled
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWidget;
