import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard, SharedLayout, Wallet } from "./pages/dashboard";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="wallet" element={<Wallet />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
