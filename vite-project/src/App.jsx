// import './App.css'

import axios from "axios";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Post from "./components/Post";
import Posts from "./components/Posts";
import Todos from "./components/Todos";

export function App() {
  axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
  axios.defaults.headers = { "Content-Type": "application/json", Authorization: "Bearer djhgjkdshaj261761786123" }
  return (
    <div>
      <Header />
      {/* <Counter /> */}
      {/* <Form /> */}
      {/* <Posts /> */}
      {/* <Post /> */}
      <Todos />
      {/* <Greeting name="Ali Haider" age={18} isAdult={false} location={{ city: "Karachi 1", country: "Pakistan 1", street: "23 abc", zipCode: 12345 }} />
      <Greeting name="Sajid" age={20} />
      <Greeting name="Haris" age={24} isAdult={true} location={{ city: "Karachi 2", country: "Pakistan 2", street: "23 abc", zipCode: 12345 }} />
      <Greeting name="Ayesha" age={12} location={{ city: "Karachi 3", country: "Pakistan 3", street: "23 abc", zipCode: 12345 }} />
      <Greeting name="Maaz" age={23} />
      <Greeting name="Saif" age={20} isAdult location={{ city: "Karachi 4", country: "Pakistan 4", street: "23 abc", zipCode: 12345 }} /> */}
      {/* <Greeting />
      <Greeting />
      <Greeting />
      <Greeting />
      <Greeting />
      <Greeting />
      <Greeting />
      <Greeting />
      <Greeting />
      <Greeting /> */}
      {/* This is our first react app created with vite and this is our 2nd class of React. */}
      <Footer />
    </div>
  );
}

// export default Ali;
