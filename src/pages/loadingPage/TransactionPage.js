import { useEffect, useState } from "react";
import useSocket from "../../hooks/useSocket";

const TransactionPage = () => {
  const { socket } = useSocket();

  const [state, setState] = useState(-1);

  useEffect(() => {
    socket.on("txn-status", (data) => {
      console.log(data);
      setState(data.status ? 1 : -1);
    });
  }, []);
  return (
    <div>
      <h1>Transaction Page</h1>
      <div
        className={state === 0 ? "loader" : state === 1 ? "success" : "error"}
      >
        <div></div>
      </div>
    </div>
  );
};

export default TransactionPage;
