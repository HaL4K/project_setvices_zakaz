import { Order } from "@/types/Order";

export async function createOrder(order: Omit<Order, "id">): Promise<Order> {
  const response = await fetch("https://mock-backend-sqk5.onrender.com/orders", {
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
