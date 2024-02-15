"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import AuthForm from "../AuthForm";

export default function Login() {
  const [formError, setFormError] = useState("")
  const router = useRouter()
  
  const handleSubmit = async (e, email, password) => {
    e.preventDefault()
    setFormError("")

    const supabase = createClientComponentClient()
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (!error) {
      router.push("/")
    }

    if (error) {
      setFormError(error.message)
    }
  }
  
  return (
    <main>
      <h2 className="text-center">Log in</h2>
      <AuthForm handleSubmit={handleSubmit}/>
      {formError && (
        <div className="error">{formError}</div>
      )}
    </main>
  )
}
