import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET(_) {
  const supabase = createRouteHandlerClient({ cookies })

  const { data, error } = await supabase.from("tickets")
    .select()

  return NextResponse.json({ data, error })
}