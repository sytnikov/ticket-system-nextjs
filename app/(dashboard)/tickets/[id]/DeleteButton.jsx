"use client"

import { useTransition } from "react"
import { MdDelete } from "react-icons/md";

import { deleteTicket } from "../actions";

export default function DeleteButton({ id }) {
  const [isPending, startTransition] = useTransition()
  
  return (
    <button 
      className="btn-primary"
      onClick={() => startTransition(() => deleteTicket(id))}
      disabled={isPending}
    >
      {isPending && (
        <>
          <MdDelete />
          Deleting...
        </>
      )}
      {!isPending && (
        <>
          <MdDelete />
          Delete Ticket
        </>
      )}
    </button>
  )
}
