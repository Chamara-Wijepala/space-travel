import { Suspense, lazy, useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import data from "data/data.json";

import Spinner from "components/Spinner";
import Header from "components/Header";
import GlobalStyle from "./Global.styled";

const Home = lazy(() => import("pages/Home"));
const Destination = lazy(() => import("pages/Destination"));
const Crew = lazy(() => import("pages/Crew"));
const Technology = lazy(() => import("pages/Technology"));

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
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/destination"
            element={<Destination data={data.destinations} />}
          />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
