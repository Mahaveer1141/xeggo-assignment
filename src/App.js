import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Todo from "./components/Todo";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  function Home() {
    return <Navigate to="/todo" />;
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="/todo" element={<Todo />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
