import { Alumni } from "./components/Alumni";
import { Faculty } from "./components/Faculty";
import { Footer } from "./components/Footer";
import { GettingReady } from "./components/GettingReady";
import { Header } from "./components/Header";
import { VideoSection } from "./components/VideoSection";

export default function Home() {
  return (
    <>
      <Header />
      <GettingReady />
      <Alumni/>
      {/* <VideoSection/> */}
      <Faculty/>
      <Footer/>
    </>
  );
}
