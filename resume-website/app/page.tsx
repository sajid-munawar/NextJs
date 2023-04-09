import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import RecentWork from "./components/RecentWork";
import SocialIcons from "./components/SocialIcons";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <RecentWork />
      <AboutMe />
      <TechStack />
      <Contact />
      <SocialIcons />
    </>
  );
}
