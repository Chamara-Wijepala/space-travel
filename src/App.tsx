import { Suspense, lazy, useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import GlobalStyle from "./Global.styled";

const Home = lazy(() => import("./pages/Home"));
const Destination = lazy(() => import("./pages/Destination"));
const Crew = lazy(() => import("./pages/Crew"));
const Technology = lazy(() => import("./pages/Technology"));

const loading = <div>Loading...</div>;

function App() {
  const [imagePaths, setImagePaths] = useState({});

  const screenSizes = ["desktop", "tablet", "mobile"];

  const pathName = useLocation().pathname;
  const location = pathName.split("/")[1];

  // Dynamically sets background image depending on current page
  useEffect(() => {
    // This is done because the value of location is empty if on homepage
    const path = location === "" ? "home" : location;

    const getImagePaths = async (size: string) => {
      const image = await import(
        `./assets/${path}/background-${path}-${size}.jpg`
      );

      setImagePaths((prevState) => ({ ...prevState, [size]: image.default }));
    };

    screenSizes.forEach((size) => {
      getImagePaths(size);
    });
  }, [location]);

  return (
    <>
      <GlobalStyle imagePaths={imagePaths} />
      <Suspense fallback={loading}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
