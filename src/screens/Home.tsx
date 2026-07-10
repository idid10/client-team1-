// src/screens/Home.tsx
import TopBar from "../components/TopBar";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen w-[393px] flex-col bg-[#F8F8F8]">
      <main className="flex-1 overflow-y-auto px-4 pb-24">
        <TopBar />
      </main>
    </div>
  );
}