import Card from "./components/Card";
import ExtraFeatures from "./components/ExtraFeatures";

export default function Home() {
  return (
    <div>
    <div className="text-center bg-violet-700 text-white h-96">
      <h1 className="text-5xl font-bold pt-20 pb-4">Simple pricing for your business</h1>
      <p className="text-2xl">Plans that are carefully crafted to suit your business.</p>
    </div>
      <Card/>
      <ExtraFeatures />
    </div>
  );
}
