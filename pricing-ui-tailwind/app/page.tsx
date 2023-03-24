import Card from "./components/Card";
import ExtraFeatures from "./components/ExtraFeatures";

export default function Home() {
  return (
    <div>
    <div className="md:text-center bg-violet-700 text-white h-96 p-5">
      <h1 className="text-3xl md:text-5xl font-bold pt-9 md:pt-20 pb-4">Simple pricing for your business</h1>
      <p className="text-lg md:text-2xl">Plans that are carefully crafted to suit your business.</p>
    </div>
      <Card/>
      <ExtraFeatures />
    </div>
  );
}
