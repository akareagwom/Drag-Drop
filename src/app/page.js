import Image from "next/image";
import Cards from "./components/card";
import Canvas from "./components/Canvas";

export default function Home() {
  return (
    <div className="w-full overflow-none">
      <Cards/>
    {/* <Canvas/> */}
    </div>
  );
}
