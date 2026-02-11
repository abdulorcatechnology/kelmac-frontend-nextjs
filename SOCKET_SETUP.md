# Socket Configuration Guide

## Setup

Socket.IO has been configured in your Next.js application. Here's how to use it:

### 1. Environment Variables

Add the following to your `.env.local` file:

```env
NEXT_PUBLIC_SOCKET_URL=http://localhost:3001
```

Replace `http://localhost:3001` with your actual Socket.IO server URL.

### 2. Wrap Your App with SocketProvider

In your root layout or app component, wrap your application with the `SocketProvider`:

```tsx
import { SocketProvider } from "@/store/SocketProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SocketProvider>
          <ReduxProvider>
            {children}
          </ReduxProvider>
        </SocketProvider>
      </body>
    </html>
  );
}
```

### 3. Using Socket in Components

Use the `useSocket` hook in any component:

```tsx
import { useSocket } from "@/store/SocketProvider";

export default function MyComponent() {
  const { socket, isConnected } = useSocket();

  useEffect(() => {
    if (!socket) return;

    // Listen for events
    socket.on("message", (data) => {
      console.log("Received message:", data);
    });

    // Send events
    socket.emit("message", { text: "Hello" });

    // Cleanup
    return () => {
      socket.off("message");
    };
  }, [socket]);

  return <div>Status: {isConnected ? "Connected" : "Disconnected"}</div>;
}
```

### 4. Available Functions

#### From `useSocket` hook:
- `socket`: The Socket.IO instance or null
- `isConnected`: Boolean indicating connection status

#### From `@/lib/socket`:
- `initSocket(serverUrl?)`: Initialize or get existing socket
- `getSocket()`: Get current socket instance
- `disconnectSocket()`: Disconnect and cleanup socket

## Features

- ✅ Automatic reconnection with exponential backoff
- ✅ Fallback to polling if websocket fails
- ✅ React Context for easy component access
- ✅ TypeScript support
- ✅ Connection status tracking
- ✅ Error handling

## Socket Configuration

Current settings in `src/lib/socket.ts`:
- **Reconnection**: Enabled (5 attempts max)
- **Reconnection Delay**: 1000ms - 5000ms
- **Transports**: WebSocket + Polling
- **Auto-connect**: Yes
