// import './App.css'

import axios from "axios";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Form from "./components/Form";
// import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Post from "./components/Post";
import Posts from "./components/Posts";
import Todos from "./components/Todos";
import Child from "./components/Child";

import { Button, DatePicker } from 'antd';
import { BsBagCheckFill } from "react-icons/bs";
import { UpSquareOutlined } from "@ant-design/icons";
import Greeting from "./components/PureComponent";
import { Memo } from "./components/Memo";
import Callback from "./components/Callback";
import { ReducerTodos, initialTodos } from "./components/ReducerTodos";
import { createContext, useState } from "react";
import TodosList from "./components/TodosList";
import PostsList from "./components/PostsList";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { BuggyCounter } from "./components/BuggyCounter";

export const GlobalContext = createContext();


export function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [user, setUser] = useState("Ali Haider");
  axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
  axios.defaults.headers = { "Content-Type": "application/json", Authorization: "Bearer djhgjkdshaj261761786123" }
  // const html = "<h1>hello world</h1>"
  const html = <h1 style={{ backgroundColor: "red" }}>hello world</h1>;
  return (
    <>
      {/* {html}
      {html}
      {html}
      {html} */}
      {/* <ErrorBoundary > */}
        {/* <Greeting name={"ali haider"} age={"35"} /> */}
        {/* <Counter /> */}
        {/* <BuggyCounter />
        <Greeting name={"ali haider"} age={45} setTodos={setTodos} html={html} />
        <TodosList />
        <PostsList url={"https://jsonplaceholder.typicode.com/posts"} />
      </ErrorBoundary> */}
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <Greeting name={"ali haider"} age={45} setTodos={setTodos} html={html} />
      </ErrorBoundary>
      <ErrorBoundary >
        <PostsList url={"https://jsonplaceholder.typicode.com/posts"} />
      </ErrorBoundary>
      {/* <PostsList /> */}
      {/* <PureComponent /> */}
      {/* <GlobalContext.Provider value={{ user: user, todos: todos, setUser, setTodos }}>
        <ReducerTodos />
        <Callback />
        <Memo />
        <Child todos={todos} user={user} />
        <Child todos={todos} user={user} />
        <div className="columns-[10rem] gap-8">

          <div className="bg-yellow-100">hello world 1</div>
          <div className="bg-yellow-200">hello world 2</div>
          <div className="bg-yellow-300">hello world 3</div>
          <div className="bg-yellow-300">hello world 3</div>
          <div className="bg-yellow-300">hello world 3</div>
          <div className="bg-yellow-300">hello world 3</div>
          <div className="bg-yellow-300">hello world 3</div>
        </div>
        <div className="grid grid-cols-5 gap-x-4 gap-y-8">


          <div className="bg-yellow-100">hello world 1</div>
          <div className="bg-yellow-200">hello world 2</div>
          <div className="bg-yellow-300">hello world 3</div>
          <div className="bg-yellow-300">hello world 3</div>
          <div className="bg-yellow-300">hello world 3</div>
          <div className="bg-yellow-300">hello world 3</div>
          <div className="bg-red-700 col-start-3 col-end-[14]">hello world 3</div>
          <div className="grid grid-cols-subgrid gap-4">
            <div className="col-start-2 col-end-6 bg-red-700">06</div>
          </div>

        </div>

        <div className="lg:container bg-red-400 px-4">

          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
          <input type="date" />
          <DatePicker /> <UpSquareOutlined />
          <Button type="primary" shape="default" block={"false"} style={{ background: "green" }} size="large" danger onClick={(event) => { console.log({ event: event.target.innerHTML }); }} icon={<BsBagCheckFill />}>Button</Button>
          <Header />
          <Counter />
          <Form />
          <Posts />
          <Post />
          <Todos />


          <Greeting name="Ali Haider" age={18} isAdult={false} location={{ city: "Karachi 1", country: "Pakistan 1", street: "23 abc", zipCode: 12345 }} />
          <Greeting name="Sajid" age={20} />
          <Greeting name="Haris" age={24} isAdult={true} location={{ city: "Karachi 2", country: "Pakistan 2", street: "23 abc", zipCode: 12345 }} />
          <Greeting name="Ayesha" age={12} location={{ city: "Karachi 3", country: "Pakistan 3", street: "23 abc", zipCode: 12345 }} />
          <Greeting name="Maaz" age={23} />
          <Greeting name="Saif" age={20} isAdult location={{ city: "Karachi 4", country: "Pakistan 4", street: "23 abc", zipCode: 12345 }} />
          <Greeting />
          <Greeting />
          <Greeting />
          <Greeting />
          <Greeting />
          <Greeting />
          <Greeting />
          <Greeting />
          <Greeting />
          <Greeting />
          This is our first react app created with vite and this is our 2nd class of React.
          <Footer />
        </div>
      </GlobalContext.Provider> */}
    </>

  );
}

// export default Ali;

