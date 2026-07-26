import React, { useEffect, useRef } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";

import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const App = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });

    return () => {
      smoother.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main className="bg-black p-4 text-zinc-100">
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content" ref={contentRef}>
          <HomePage />
        </div>
      </div>
    </main>
  );
};

export default App;