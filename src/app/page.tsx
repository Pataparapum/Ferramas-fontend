import { HeroUIProvider } from "@heroui/system";
import Index from "./indexComponent";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between bg-backgroundColor2">
        <Index />
      </main>
  );
}
