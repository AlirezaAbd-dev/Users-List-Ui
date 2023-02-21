import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex items-start justify-center h-screen bg-purple-50 overflow-auto">
      {/* Card Container */}
      <div className="flex flex-col space-y-2 max-w-8xl shadow-xl h-auto p-[20px] md:p-[60px] rounded-xl bg-white mx-20 mt-10">
        {children}
      </div>
    </main>
  );
}
