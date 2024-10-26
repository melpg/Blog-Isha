import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home/Home';
import Gallery from './Home/Gallery';

import Gallerys from './Admin/Gallerys';

import ImageList from './Admin/ImageList';
import Review from './Home/Review';




const Routing = () => {
    return (
        <BrowserRouter>
           
            <Route exact path="/" component={Home} />
            <Route exact path="/Home/Gallery" component={Gallery} />
            <Route exact path="/Home/Review" component={Review}/>
           
           <Route exact path="/Admin/Gallerys" component={Gallerys}/>
           
           <Route exact path="/Admin/ImageList" component={ImageList}/>

           

           
        </BrowserRouter>
    )
}
export default Routing;