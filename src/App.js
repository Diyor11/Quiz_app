import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
// Components
import Layout from './components/Layout'

export default function App() {


  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz/:category/:amount" element={<Quiz />} />
            <Route path="/*" replace element={<Navigate to={'/'} />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}
