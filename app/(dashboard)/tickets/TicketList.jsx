import Link from "next/link";

async function getTickets() {
  
  const res = await fetch("http://localhost:3000/api/tickets/")

  const json = await res.json()
  
  if (json.error) {
    console.log('👀 Error details', json.error.message)
  }

  return json.data
}

export default async function TicketList() {
  const tickets = await getTickets();

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets. yay!</p>
      )}
    </>
  );
}
