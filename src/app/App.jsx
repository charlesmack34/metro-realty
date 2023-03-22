import React from 'react';
import { Route, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom';



//Custom Components

import Home from '../pages/home';
import HomeTwo from '../pages/home-2';
import HomeThree from '../pages/home-3';
import About from '../pages/about';
import Blog from '../pages/blog';
import BlogDetails from '../pages/blog/blog-details';
import Service from '../pages/service';
import ServiceDetails from '../pages/service/service-details';
import CaseStudy from '../pages/case-study';
import CaseStudyDetails from '../pages/case-study/case-study-details';
import Contact from '../pages/contact';
import Error from '../pages/404';
import LoadTop from '../components/ScrollTop/LoadTop'


const App = () => {
    return (
        <div className='App'>
            <Router>  
                <LoadTop />          
                <Switch>
                    <Route path="metro-realty/" exact component={Home} />
                    <Route path="metro-realty/home" component={Home} />
                    <Route path="metro-realty/home-2" component={HomeTwo} />
                    <Route path="metro-realty/home-3" component={HomeThree} />
                    <Route path="metro-realty/about" component={About} />
                    <Route path="metro-realty/blog" exact component={Blog} />
                    <Route path="metro-realty/blog/blog-details" component={BlogDetails} />
                    <Route path="metro-realty/service" exact component={Service} />
                    <Route path="metro-realty/service/service-details" component={ServiceDetails} />
                    <Route path="metro-realty/case-study" exact component={CaseStudy} />
                    <Route path="metro-realty/case-study/case-study-details" component={CaseStudyDetails} />
                    <Route path="metro-realty/contact" component={Contact} />
                    <Route component={Error} />
                </Switch>
            </Router>
            
        </div>
    );
}

export default App;
