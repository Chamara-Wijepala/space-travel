import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Destination = lazy(() => import("./pages/Destination"));
const Crew = lazy(() => import("./pages/Crew"));
const Technology = lazy(() => import("./pages/Technology"));

const loading = <div>Loading...</div>;

function App() {
  return (
    <div>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
