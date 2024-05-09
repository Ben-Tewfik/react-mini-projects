import { useEffect, useState } from "react";
import "./style/grocery.css";
import List from "./components/List";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function getLocalStorage() {
  const list = JSON.parse(localStorage.getItem("list"));
  if (list) {
    return list;
  } else {
    return [];
  }
}

export default function Grocery() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEdited, setIsEdited] = useState(false);
  const [editId, setEditId] = useState(null);
  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      toast.error("Please Enter an Item", { position: "top-center" });
    } else if (name && isEdited) {
      setList(
        list.map(item => {
          if (editId === item.id) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      toast.success("Item Edited Successfully", { position: "top-center" });
      setEditId(null);
      setIsEdited(false);
      setName("");
    } else {
      const id = new Date().getTime().toString();
      setList([...list, { title: name, id }]);
      toast.success("Item Added Successfully", { position: "top-center" });
      setName("");
    }
  }
  function removeItem(id) {
    setList(list.filter(item => item.id !== id));
    toast.success("Item Deleted", { position: "top-center" });
  }
  function editItem(id) {
    const specificItem = list.find(item => item.id === id);
    setIsEdited(true);
    setEditId(id);
    setName(specificItem.title);
  }
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <main className="grocery-main-container">
      <section className="grocery-container">
        <h4 className="grocery-title">Grocery Bud</h4>
        <form className="grocery-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add your item"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button className="grocery-btn">
            {isEdited ? "Edit Item" : "Add item"}
          </button>
        </form>
        {list.length > 0 && (
          <div className="list-container">
            {list.map((item, index) => {
              return (
                <List
                  {...item}
                  key={index}
                  removeItem={removeItem}
                  editItem={editItem}
                />
              );
            })}
          </div>
        )}
        <button className="clear-btn" onClick={() => setList([])}>
          {list.length > 0 && "clear all"}
        </button>
      </section>
    </main>
  );
}
