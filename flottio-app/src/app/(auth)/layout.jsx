import Link from "next/link";

export default function AuthLayout({ children }) {
  return (
    <div className="dark min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-[#B95D34]/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      {/* Logo Area */}
      <Link href="/" className="absolute top-10 left-10 flex items-center gap-3 hover:opacity-80 transition-opacity">
        <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
          <span className="font-bold text-[#0D0D12]">F</span>
        </div>
        <span className="text-xl font-heading font-semibold text-white tracking-tight">Flottio</span>
      </Link>

      {/* Main Content wrapper */}
      <main className="w-full max-w-md px-6 relative z-10">
        {children}
      </main>

      {/* Footer / Info */}
      <div className="absolute bottom-8 left-0 w-full text-center text-sm font-sans text-gray-500">
        © {new Date().getFullYear()} Flottio. Pour les professionnels de l'automobile.
      </div>
    </div>
  );
}
