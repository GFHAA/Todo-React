import React, { useEffect } from "react";
import axios from "../node_modules/axios/index";
import Context from "./context";
import "./styles/main.css"
import AddTodo from "./todo/AddTodo";
import List from "./todo/List";


function App() {
  const [posts, setPosts] = React.useState([])
  async function fetchPosts() {
    const responce = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
    setPosts(responce.data)
  }
  useEffect(() => {
    fetchPosts()
  }, [])
  function onChange(id) {
    setPosts(
      posts.map(el => {
        if (el.id === id) {
          el.completed = !el.completed
        }
        return el
      })
    )
  }
  function deleteTodo(id) {
    setPosts(
      posts.filter(el => { return el.id !== id })
    )
  }
  return (
    <Context.Provider value={{ onChange, deleteTodo }}>
      <div className="wrapper">
        <div className="main">
          <h1>First react App</h1>
          <p>
            Решил особо с идеей не заморачиваться, поэтому сделал обычный Todo
          </p>
          <AddTodo/>
          <List posts={posts} />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
