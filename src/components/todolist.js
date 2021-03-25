import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addElement } from "../reducers/todolist/todolistSlice";
import List from "./list";

export default function todolist() {
  const list = useSelector((state) => state.todolist.value);
  const dispatch = useDispatch();

  const [ele, setele] = useState("");

  function handleChange(event) {
    setele(event.target.value);
  }

  function handleSubmit() {
    dispatch(addElement(ele));
  }

  return (
    <>
      <input placholder="enter todo" onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
      <List props={list} />
    </>
  );
}
