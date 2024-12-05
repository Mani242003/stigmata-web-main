import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Routers from "../src/components/routers/Routers";
import ScrollToTopCOmponent from "./components/ScrollToTopCOmponent";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
         <ScrollToTopCOmponent />
      <Routers />
    </div>
  );
};

export default App;
