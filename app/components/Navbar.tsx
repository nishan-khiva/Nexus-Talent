import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#1a2235] text-white px-4 py-3 flex items-center justify-between shadow">
      <div className="font-bold text-2xl tracking-tight">
        <Link href="/">Hireverse Global</Link>
      </div>
      <ul className="flex gap-6 text-base font-medium">
        <li><Link href="/industries">Industries</Link></li>
        <li><Link href="/hire-talent">Hire Talent</Link></li>
        <li><Link href="/find-job">Find a Job</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
} 