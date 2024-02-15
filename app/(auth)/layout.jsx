import Image from "next/image";
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import Logo from "../components/ticket-me.png"

export default async function AuthLayout({ children }) {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  if (data.session) {
    redirect("/")
  }
  
  return (
    <>
      <nav>
        <Image
          src={Logo}
          alt="Ticket.me logo"
          width={70}
          quality={100}
          placeholder="blur"
        />
        <h1>TICKET.ME</h1>
        <Link href="/signup">Sign up</Link>
        <Link href="/login">Log in</Link>
      </nav>
      {children}
    </>
  );
}
