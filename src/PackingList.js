import { useState } from "react";
import Item from "./Item";
export default function PackingList({ item, onDeleteIem, onToggleItem, onClearAll }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = item;

  if (sortBy === "discription")
    sortedItems = item
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = item
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteIem={onDeleteIem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed</option>
        </select>
        <button onClick={onClearAll}>Clear All</button>
      </div>
    </div>
  );
}
