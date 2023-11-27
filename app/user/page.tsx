import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "mb@example.com",
    },
    {
      id: "728ed52d",
      amount: 100,
      status: "pending",
      email: "google@example.com",
    },
    {
      id: "728ed52g",
      amount: 100,
      status: "pending",
      email: "bilal@example.com",
    },

    // ...
  ];
}

export default async function UserPage() {
  const data = await getData();
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
