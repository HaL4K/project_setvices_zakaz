import { createOrder } from "@/services/api";
import { Order } from "@/types/Order";
import { create } from "zustand";

interface State {
  orders: Order[];
  addOrder: (order: Order) => void;
  deleteOrderById: (id: number) => Promise<void>;
  fetchOrders: () => Promise<void>;
}

export const useOrderStore = create<State>((set) => ({
  orders: [],
  fetchOrders: async () => {
    try {
      const response = await fetch("https://mock-backend-sqk5.onrender.com/orders");
      const data = await response.json();
      set({ orders: data });
    } catch (error) {
      console.error("Ошибка получения данных. код ошибки:" + error);
    }
  },
  addOrder: async (order) => {
    try {
      const newOrder = await createOrder(order);
      set((state) => ({ orders: [...state.orders, newOrder] }));
    } catch (error) {
      console.error("ошибка при создание заказа", error);
    }
  },
  deleteOrderById: async (id: number) => {
    try {
      await fetch(`https://mock-backend-sqk5.onrender.com/orders/${id}`, {
        method: "DELETE",
      });
      set((state) => ({
        orders: state.orders.filter((order) => order.id !== id),
      }));
    } catch (error) {
      console.error("Ошибка удаления заказа");
    }
  },
}));
