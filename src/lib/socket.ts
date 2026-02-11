import { io, Socket } from "socket.io-client";

let socket: Socket | null = null;

export const initSocket = (serverUrl?: string): Socket => {
  if (socket) {
    return socket;
  }

  const url =
    serverUrl ||
    process.env.NEXT_PUBLIC_WEBSOCKET_URL ||
    "http://localhost:3001";

  socket = io(url, {
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    reconnectionAttempts: 5,
    transports: ["websocket", "polling"],
  });

  socket.on("connect", () => {
    console.log("Socket connected:", socket?.id);
  });

  socket.on("disconnect", () => {
    console.log("Socket disconnected");
  });

  socket.on("error", (error) => {
    console.error("Socket error:", error);
  });

  return socket;
};

export const getSocket = (): Socket | null => {
  return socket;
};

export const disconnectSocket = (): void => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};
