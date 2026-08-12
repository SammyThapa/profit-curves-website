import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import AboutUs from "./Pages/AboutUs";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import BlogDetails from "./Pages/BlogDetails";
import CourseBooking from "./Pages/CourseBooking";
import ScrollTop from "./components/ScrollTop";

import { FloatingWhatsApp } from "react-floating-whatsapp";

function App() {
  const [selectedMode, setSelectedMode] = useState("All");
  const [featured, setFeatured] = useState(false); //featured blog display
  return (
    <BrowserRouter>
      <ScrollTop />
      <Header selectedMode={selectedMode} setSelectedMode={setSelectedMode} />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/courses/:mode" element={<Courses />}></Route>
        <Route path="/aboutUs" element={<AboutUs />}></Route>
        <Route
          path="/blog"
          element={<Blog setFeatured={setFeatured} />}
        ></Route>

        <Route
          path="/blog/:slug"
          element={<BlogDetails featured={featured} />}
        />
        <Route path="/contact" element={<Contact />}></Route>

        <Route path="/CourseBooking/:slug" element={<CourseBooking />}></Route>
      </Routes>

      <FloatingWhatsApp
        phoneNumber="917017569269"
        accountName="Profit Curves"
        statusMessage="Typically replies within 1 hour"
        chatMessage="Hello! 👋 How can we help you with your trading journey?"
        placeholder="Type a message..."
        allowClickAway={true}
        allowEsc={true}
      />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
