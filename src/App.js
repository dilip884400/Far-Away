import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Status from "./Status";

export default function App(){
  const [item, setItem] = useState([]);

    function handleAddItem(item) {
      setItem((items) => [...items, item]);
    }

     function handleDeleteItem(id){
           setItem((item) => item.filter((item) => item.id!==id))
     }

     function handleToggleItem(id){
      setItem((item) => item.map((item) => item.id ===id ? {...item, packed: !item.packed} : item ))
     }

       function handleClearAll() {
        const confirmed = window.confirm("are you sure you want to delete all")

          if(confirmed) setItem([]);
       }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        item={item}
        onDeleteIem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearAll={handleClearAll}
      />
      <Status item={item} />
    </div>
  );
}

