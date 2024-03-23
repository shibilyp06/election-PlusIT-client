import UserRouter from "./Router/UserRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <UserRouter />
      <ToastContainer style={{ width: "40%" }} />
    </>
  );
}

export default App;
