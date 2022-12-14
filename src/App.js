import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Home from "./components/home";
import CreateBlog from "./components/createBlog";
import BlogView from "./components/blogView";
 
const App = () => {
 return (
  <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/record_list" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/bg" element={<CreateBlog />} />
        <Route path="/bg_view" element={<BlogView />} />
      </Routes>
   </div>
 );
};
 
export default App;