"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";

import AuthForm from "../AuthForm";


export default function Signup() {
  const [formError, setFormError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e, email, password) => {
    e.preventDefault()
    setFormError("")

    const supabase = createClientComponentClient()
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`
      }
    })

    if (error) {
      setFormError(error.message)
    }

    if (!error) {
      router.push("/verify")
    }
  }
  
  return (
    <main>
      <h2 className="text-center">Sign up</h2>
      <AuthForm handleSubmit={handleSubmit}/>
      {formError && (
        <div className="error">{formError}</div>
      )}
    </main>
  )
}
