// import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import Services from "./screens/Services";
import About from "./screens/About";
import Posts from "./screens/Posts";
import PageNotFound from "./screens/PageNotFound";
import Post from "./screens/Post";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todos from "./screens/Todos";
import SearchTodo from "./screens/Todos/SearchTodo";
import AddTodo from "./screens/Todos/AddTodo";
import UpdateTodo from "./screens/Todos/UpdateTodo";
import AllTodosList from "./screens/Todos/AllTodosList";
import { Login } from "./screens/Login";

// function App() {
//   return (
//     <div className="text-3xl font-bold underline">
//       This is our first react app created with create-react-app.
//     </div>
//   );
// }

// export default App;
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="w-full max-w-[1200px] mx-auto mt-[75px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:postId" element={<Post />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todos" element={<Todos />} >
            <Route path="search" element={<SearchTodo />} />
            <Route path="add" element={<AddTodo />} />
            <Route path="update" element={<UpdateTodo />} />
            <Route path="all" element={<AllTodosList />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
