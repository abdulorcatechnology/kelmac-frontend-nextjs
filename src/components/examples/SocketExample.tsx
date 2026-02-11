"use client";

import { useEffect, useState } from "react";
import { useSocket } from "@/store/SocketProvider";

export default function SocketExample() {
  const { socket, isConnected } = useSocket();
  const [log, setLog] = useState<string[]>([]);
  const [message, setMessage] = useState("Hello from client");

  useEffect(() => {
    if (!socket) return;

    const handlePong = (payload: any) => {
      setLog((prev) => [`Received: ${JSON.stringify(payload)}`, ...prev]);
    };

    socket.on("pong", handlePong);

    return () => {
      socket.off("pong", handlePong);
    };
  }, [socket]);

  const sendPing = () => {
    if (!socket) return;
    socket.emit("ping", { message });
    setLog((prev) => [`Sent: ${message}`, ...prev]);
  };

  return (
    <div className="space-y-3 rounded border border-gray-200 p-4">
      <div className="flex items-center gap-2">
        <div
          className={`h-3 w-3 rounded-full ${isConnected ? "bg-green-500" : "bg-red-500"}`}
        />
        <span className="text-sm font-medium">
          Socket status: {isConnected ? "Connected" : "Disconnected"}
        </span>
      </div>

      <div className="flex gap-2">
        <input
          className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message to send"
        />
        <button
          onClick={sendPing}
          className="rounded bg-primary px-4 py-2 text-sm font-semibold text-white"
          disabled={!isConnected}
        >
          Send Ping
        </button>
      </div>

      <div className="space-y-1 text-xs text-gray-700">
        {log.length === 0 ? (
          <p className="text-gray-400">No messages yet.</p>
        ) : (
          log.map((entry, idx) => <div key={idx}>{entry}</div>)
        )}
      </div>
    </div>
  );
}
