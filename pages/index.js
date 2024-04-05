import PomodoroTimer from "./components/PomodoroTimer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src="/background/lofi-ramen-shop.jpeg"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Rainy background with a frog"
        />
      </div>
      <div className="z-10">
        <PomodoroTimer />
      </div>
    </main>
  );
}
