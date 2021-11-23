import "./styles.css";
import Todo from "./Todo";
import TodoList from "./TodoList";
import Todos from "./Todos";
import ImageGallery from "./ImageGallery/ImageGallery";
import Weather from "./Weather/Weather";
import Maps from "./Maps/Maps";

export default function App() {
  return (
    <div className="App">
      {/* <TodoList /> */}
      <Todo />
      {/* <ImageGallery /> */}
      <Weather />
      {/* <Maps /> */}
    </div>
  );
}
