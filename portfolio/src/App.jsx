import { useEffect, useState } from "react";
import { Navbar } from "./components";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import ContactMe from "./pages/ContactMe";
import Home from "./pages/Home";
import SocialMedia from "./components/SocialMedia";
import NavigationDots from "./components/NavigationDots";
import Footer from "./components/Footer";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? "dark" : "light";
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      // setTheme("dark");
      setIsDark(true);
    } else {
      // setTheme("light");
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    const isDark = localStorage.getItem("isDark") === "true";
    setIsDark(isDark);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      console.log("added dark theme");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      console.log("removed dark theme");
    }
  }, [theme]);
  return (
    <div className=" bg-slate-200 dark:bg-amber-200 font-quicksand dark:text-rose-500 relative scroll-smooth  snap-y">
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
        theme={theme}
        // setActive={setActive}
      />
      <Home />
      <About />
      <Projects />
      <Skills />
      <ContactMe />
      <SocialMedia />
      {/* <NavigationDots /> */}
      <Footer />
    </div>
  );
}
