export default function Status({ item }) {
  const numItem = item.length;
  const numPacked = item.filter((item) => item.packed).length;
  const percentage = Math.round(numPacked / numItem) * 100;
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you got everything ready"
          : `You have ${numItem} item on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}