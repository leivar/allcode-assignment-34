import Link from "next/link";

export default function navbar() {
  return (
    <nav className="flex flex-row gap-4">
      <section id="nav-link-home" className="hover:text-blue-500"><Link href={"/"}>Home</Link></section>
      <section id="nav-link-about" className="hover:text-blue-500"><Link href={"/about"}>About</Link></section>
      <section id="nav-link-contact" className="hover:text-blue-500"><Link href={"/contact"}>Contact</Link></section>
    </nav>
  )
}