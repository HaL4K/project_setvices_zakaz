import { Order } from "@/types/Order";

export async function createOrder(order: Omit<Order, "id">): Promise<Order> {
  const response = await fetch("http://localhost:3001/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
  if (!response.ok) {
    throw new Error("Error при создание заказа");
  }
  return response.json();
}
