import React, {useState} from "react";
import '../App.css';

const menuItems = [
  {
    category: 'Dogs',
    items: ['Daffodil', 'Jackie', 'Spike'],
  },
  {
    category: 'Cats',
    items: ['Whiskers', 'Phillipe'],
  },
  {
    category: 'Fish',
    items: ['Sparky'],
  },
];

function App() {
  const [isOpen, setIsOpen] = useState({});

  const toggleOpen = (category) => {
    setIsOpen({
      ...isOpen,
      [category]: !isOpen[category],
    });
  };

  return (
    <div className="App">
      <h1>My Pets</h1>
      <ul>
        {menuItems.map((menu) => {
          return (
            <li key={menu.category}>
              <button
                onClick={() => {
                  toggleOpen(menu.category);
                }}
              >
                {menu.category} {isOpen[menu.category] ? '-' : '+'}
              </button>
              {isOpen[menu.category] && (
                <ul>
                  {menu.items.map((item) => {
                    return <li key={item}>{item}</li>;
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
