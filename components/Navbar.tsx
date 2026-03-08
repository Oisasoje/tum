import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass border-b border-white/10">
      <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
        TUM
      </Link>

      <button className="px-5 py-2 text-sm font-medium text-white transition-all duration-300 rounded-full glass-blue hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
        Connect Wallet
      </button>
    </nav>
  );
}
