import { useEffect } from "react";
import { io } from "socket.io-client";

const useSocket = () => {
  const socket = io("http://localhost:3001");
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });
    socket.on("disconnect", () => {
      console.log("disconnected");
    });
  }, []);

  const sendCall = (drink_id, drink_name) => {
    socket.emit("send-call", {
      drink_id: drink_id,
      drink_name: drink_name,
    });
  };

  return { sendCall, socket };
};

export default useSocket;
