import logo from "./logo.svg";
import "./App.css";
import Counter from "./features/counters/Counter";
import PostLists from "./features/posts/PostLists";
function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <PostLists/>
    </div>
  );
}

export default App;
