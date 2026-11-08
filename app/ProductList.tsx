'use client'; 

import React from 'react';

export default function ProductList(props: any) {
  return (
    <div style={{ padding: "10px" }}>
      
      {props.tasks.map((item: any) => (
        
        <div 
          key={item.id} 
          style={{ backgroundColor: "white", border: "1px solid #ccc", padding: "15px", borderRadius: "8px", marginBottom: "15px" }}
        >
          <h2 style={{ margin: "0 0 5px 0", color: "#333" }}>🎁 {item.title}</h2>
          <p style={{ margin: "0 0 10px 0", color: "gray", fontSize: "14px" }}>{item.description}</p>
          
          {/* Простое условие из лекции: если completed равен true, пишем В наличии */}
          <p style={{ margin: "5px 0", fontSize: "14px" }}>
            Статус товара: <b>{item.completed ? "В наличии" : "Под заказ"}</b>
          </p>
          
          <p style={{ margin: "10px 0 0 0", fontSize: "18px", fontWeight: "bold" }}>
            Цена: {item.price} рублей
          </p>
          <button style={{ marginTop: "10px", padding: "6px 12px", backgroundColor: "black", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
            Купить товар
          </button>
        </div>

      ))}

    </div>
  );
}
