"use client";

import { useState } from "react";
import { useOrderStore } from "@/store/orderStore";

export default function OrderForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState("Разработка сайта");
  const [message, setMessage] = useState("");

  const { addOrder } = useOrderStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !contact) {
      alert("Имя и контакт обязательны!");
      return;
    }

    addOrder({
      id: Date.now(),
      status: "Новая",
      name,
      contact,
      service,
      message,
    });
    setName("");
    setContact("");
    setService("Разработка сайта");
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-xl mx-auto mt-6 space-y-4 p-6 bg-white rounded-md shadow-md'
    >
      <h2 className='text-2xl font-bold text-gray-700'>Оставить заявку</h2>

      <div>
        <label className='block text-sm text-gray-600'>Имя</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400'
          required
        />
      </div>

      <div>
        <label className='block text-sm text-gray-600'>
          Контакт (email / телефон)
        </label>
        <input
          type='text'
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className='w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400'
          required
        />
      </div>

      <div>
        <label className='block text-sm text-gray-600'>Услуга</label>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className='w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400'
        >
          <option>Разработка сайта</option>
          <option>UI/UX дизайн</option>
          <option>SEO-продвижение</option>
          <option>РЕДИЗАЙН</option>
          <option>Техаудит</option>
          <option>Поддержка сайта</option>
          <option>Другое</option>
        </select>
      </div>

      <div>
        <label className='block text-sm text-gray-600'>Комментарий</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className='w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none'
        />
      </div>

      <button
        type='submit'
        className='w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200'
      >
        Отправить заявку
      </button>
    </form>
  );
}
