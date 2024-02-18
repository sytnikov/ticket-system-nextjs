"use client"

import { redirect, useRouter } from "next/navigation";
import { useState } from "react"
import { MdDelete } from "react-icons/md";

export default function DeleteButton({ id }) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  
  const handleClick = async () => {
    setIsLoading(true)
    
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      method: "DELETE"
    })

    const json = await res.json()

    if (json.error) {
      console.log('👀 Error details', json.error.message)
      setIsLoading(false)
    }

    if (!json.error) {
      router.refresh()
      router.push("/tickets")
    }
  }
  
  return (
    <button 
      className="btn-primary"
      onClick={handleClick}
    >
      {isLoading && (
        <>
          <MdDelete />
          Deleting...
        </>
      )}
      {!isLoading && (
        <>
          <MdDelete />
          Delete Ticket
        </>
      )}
    </button>
  )
}
