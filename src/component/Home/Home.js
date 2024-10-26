import React from "react";
import '../Header.css';
import Slider from "./Slider";
import Swipper from "./Swiperr";
import Contact from "./Contact";
import Header from "../Header";
import Footer from "../Footer";

const Home = () => {
    return (
        <>
<Header/>
            <Slider />
            <Swipper/>
            <Contact/>
           <Footer/> 
        </>
    )
}
export default Home;