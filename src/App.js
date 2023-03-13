
import "./App.css";
import Counter from "./features/counters/Counter";
import PostLists from "./features/posts/PostLists";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  return (
    <main className="App">
      <Counter />
      <PostLists/>
      <AddPostForm/>
    </main>
  );
}

export default App;
