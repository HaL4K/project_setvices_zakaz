import OrderForm from "@/components/OrderForm";
import OrderTable from "@/components/OrderTable";

export default function Home() {
  return (
    <main className='p-4 max-w-4xl mx-auto'>
      <OrderForm />
      <hr className='my-6' />
      <OrderTable />
    </main>
  );
}
