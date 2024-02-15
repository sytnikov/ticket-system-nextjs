import Image from "next/image";
import Link from "next/link";

import Logo from "../components/ticket-me.png"
import LogoutButton from "./LogoutButton";

export default function Navbar( {user} ) {
  return (
    <nav>
      <Image 
        src={Logo}
        alt="Ticket.me logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h1>TICKET.ME</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets" className="mr-auto">Tickets</Link>
      {user && <span>Hello, {user.email}</span>}
      <LogoutButton />
    </nav>
  );
}
