import { Alumni } from "./components/Alumni";
import { Footer } from "./components/Footer";
import { GettingReady } from "./components/GettingReady";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <GettingReady />
      <Alumni/>
      <Footer/>
    </>
  );
}
