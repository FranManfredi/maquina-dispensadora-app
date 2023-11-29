import { useEffect, useState } from "react";
import useSocket from "../../hooks/useSocket";
import { useNavigate } from "react-router-dom";

const TransactionPage = () => {
  const { socket } = useSocket();

  const [state, setState] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    socket.on("txn-status", (data) => {
      console.log(data);
      setState(data.status ? 1 : -1);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    });
  }, []);
  return (
    <div className="transaction-body">
      <h1>Transaction Page</h1>
      {state === 0 ? (
        <div className="loader">
          <div></div>
        </div>
      ) : state === -1 ? (
        <CrossSVG />
      ) : (
        <CheckSVG />
      )}
    </div>
  );
};

const CheckSVG = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={150}
      height={150}
      viewBox="0 0 512 512"
      fill="#00ff00"
      {...props}
    >
      <path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm113-303L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
    </svg>
  );
};

const CrossSVG = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={150}
      height={150}
      viewBox="0 0 512 512"
      fill="red"
      {...props}
    >
      <path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm-81-337c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
    </svg>
  );
};

export default TransactionPage;
