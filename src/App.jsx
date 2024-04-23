import { Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Repos from "./components/Repos";
import RepoDetails from "./components/RepoDetails";
import "./App.css";
import "./styles/main.scss";
import Home from "./components/Home";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="main">
      <Header />

      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repos" element={<Repos />}>
            <Route path=":repoId" element={<RepoDetails />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ErrorBoundary>

      <Footer />
    </div>
  );
}

export default App;
