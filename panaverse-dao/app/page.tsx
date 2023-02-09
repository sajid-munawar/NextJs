import { Alumini } from "./components/Alumini";
import { GettingReady } from "./components/GettingReady";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <GettingReady />
      <Alumini/>
    </>
  );
}
