import { Alumni } from "./components/Alumni";
import { Faculty } from "./components/Faculty";
import { Footer } from "./components/Footer";
import { GettingReady } from "./components/GettingReady";
import { Header } from "./components/Header";
import { MetaverseMegic } from "./components/MetaverseMegic";
import Plan from "./components/Plan";

export default function Home() {
  return (
    <>
      <Header />
      <GettingReady />
      <Plan/>
      <Faculty/>
      <Alumni/>
      <MetaverseMegic />
      <Footer/>
    </>
  );
}
