import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET(_) {
  const supabase = createRouteHandlerClient({ cookies })

  const { data, error } = await supabase.from("tickets")
    .select()

  return NextResponse.json({ data, error })
}

export async function POST(req) {
  const ticket = await req.json()

  const supabase = createRouteHandlerClient({ cookies })

  const { data: { session } } = await supabase.auth.getSession()

  const { data, error } = await supabase.from("tickets")
  .insert({
    ...ticket,
    user_email: session.user.email,
  })
  .select()
  .single()
  
  return NextResponse.json({ data, error })
}