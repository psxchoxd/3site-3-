import React from 'react';
import ProductList from './ProductList'; 

export default function MyFirstCatalog() {
  
  const myProducts = [
    { id: 1, title: "Кофемашина ручная", description: "Делает отличный эспрессо дома.", price: 24900, completed: true },
    { id: 2, title: "Кофемолка жерновая", description: "Правильный помол для зерен.", price: 4500, completed: true },
    { id: 3, title: "Капучинатор", description: "Взбивает молоко в густую пену.", price: 2100, completed: false },
    { id: 4, title: "Фирменная кружка", description: "Красивая чашка для кофе.", price: 650, completed: true },
    { id: 5, title: "Набор питчеров", description: "Железные кувшины для молока.", price: 1200, completed: true },
    { id: 6, title: "Тампер для кофе", description: "Тяжелый пресс для прессования кофе.", price: 1500, completed: true },
    { id: 7, title: "Кофейные весы", description: "Весы с таймером для точной варки.", price: 3200, completed: false },
    { id: 8, title: "Бумажные фильтры", description: "Упаковка фильтров 100 штук.", price: 450, completed: true },
    { id: 9, title: "Стеклянный чайник", description: "Удобный караф для фильтр-кофе.", price: 1800, completed: true },
    { id: 10, title: "Мерная ложка", description: "Ложка со специальным зажимом для пакета.", price: 350, completed: true }
  ];

  return (
    <div style={{ backgroundColor: "#f9f9f9", fontFamily: "Arial", padding: "20px", minHeight: "100vh" }}>
      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        
        <h1 style={{ textAlign: "center", color: "#222", fontSize: "26px" }}>
          Все для кофе
        </h1>
        <p style={{ textAlign: "center", color: "gray", marginBottom: "30px" }}>
          Берите и не жалейте
        </p>

        <ProductList tasks={myProducts} />

      </div>
    </div>
  );
}
