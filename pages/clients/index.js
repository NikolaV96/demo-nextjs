import Link from "next/dist/client/link";

export default function ClientsPage() {
  const clients = [
    { id: "max", name: "Max" },
    { id: "ben", name: "Ben" },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
