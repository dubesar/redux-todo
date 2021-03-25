import { useSelector } from "react-redux";

export default function list(props) {
  console.log(props);
  const listtodo = useSelector((state) => state.todolist.value);
  console.log(listtodo);
  return (
    <>
      {listtodo.map((todo) => (
        <li>{todo}</li>
      ))}
    </>
  );
}
