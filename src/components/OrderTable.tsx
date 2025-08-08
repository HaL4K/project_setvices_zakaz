"use client";
import { useOrderStore } from "@/store/orderStore";
import { useEffect } from "react";

function OrderTable() {
  const { orders, fetchOrders, deleteOrderById } = useOrderStore();
  useEffect(() => {
    fetchOrders();
  }, []);
  const handleDelete = (id: number) => {
    const confirmDelete = confirm("Вы уверены что хотите удалить даный заказ?");
    if (confirmDelete) {
      deleteOrderById(id);
    }
  };
  return (
    <div className='overflow-x-auto mt-4'>
      <table className='min-w-full table-auto border border-gray-300 rounded-md shadow-md'>
        <thead className='bg-gray-100 text-gray-700 text-left'>
          <tr>
            <th className='px-4 py-2 border'>Имя</th>
            <th className='px-4 py-2 border'>Контакт</th>
            <th className='px-4 py-2 border'>Услуга</th>
            <th className='px-4 py-2 border'>Комментарий</th>
            <th className='px-4 py-2 border'>Стутус</th>
            <th className='px-4 py-2 border text-center'>Удалить</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id} className='hover:bg-gray-50'>
              <td className='px-4 py-2 border'>{o.name}</td>
              <td className='px-4 py-2 border'>{o.contact}</td>
              <td className='px-4 py-2 border'>{o.service}</td>
              <td className='px-4 py-2 border whitespace-pre-line break-words max-w-[300px]'>
                {o.message}
              </td>
              <td className='px-4 py-2 border'>{o.status}</td>
              <td className='px-4 py-2 border text-center'>
                <button
                  onClick={() => handleDelete(o.id)}
                  className='text-red-500 hover: text-red-700 text-xl'
                  title='удалить заявку'
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;
