import React, { useEffect } from "react";
import axios from "../node_modules/axios/index";
import Context from "./context";
import "./styles/main.css"
import AddTodo from "./todo/addTodo";
import List from "./todo/List";


function App() {
  const [posts, setPosts] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  async function fetchPosts() {
    const responce = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
    setPosts(responce.data)
    setLoading(false)
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
  function addTodo(text) {
    if (text.trim() !== "") {
      setPosts(
        posts.concat([
          {
            title: text,
            id: Date.now(),
            completed: false
          }
        ])
      )
    }
  }
  return (
    <Context.Provider value={{ onChange, deleteTodo, addTodo }}>
      <div className="wrapper">
        <div className="main">
          <h1>First react App</h1>
          <p>
            Решил особо с идеей не заморачиваться, поэтому сделал обычный Todo
          </p>
          <AddTodo />
          {posts.length ? (<List posts={posts} />) : (loading ? null : <p>Тут пусто</p>)}
          {loading && <p>Идет загрузка...</p>}
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
