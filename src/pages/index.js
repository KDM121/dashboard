import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <div className="flex justify-center w-screen bg-base-200">
          <h1 className="text-5xl font-bold text text-center py-5 border-y-2">
            The Dashboard of Services
          </h1>
        </div>
      </main>
    </>
  );
}
