import { useEffect, useState } from "react";
import styles from "../css/mainsivu.module.css";

export default function PoistaKyydit() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("list") || "[]");
    setItems(data);
  }, []);
const deleteItem = (indexToRemove) => {
  const updated = items.filter((_, index) => index !== indexToRemove);

  setItems(updated);
  localStorage.setItem("list", JSON.stringify(updated));
};

return (
  <>

    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Poista kyydit</h2>

        {items.length === 0 ? (
          <p>Ei kyytejä</p>
        ) : (
          items.map((item, i) => (
            <div key={i} className={styles["list-content"]}>
              <p>{item.route}</p>
              <p>type: {item.type}</p>
              <p>details: {item.details}</p>
              <p>Time: {item.time}</p>
              <p>seats: {item.seatCount}</p>
              <p>user: {item.user}</p>

              <button onClick={() => deleteItem(i)}>
                Poista
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  </>
);}