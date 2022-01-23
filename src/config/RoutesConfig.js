import React from 'react'
/* Using "Routes" instead of "Switch" in react-router v6, 
   you also not need to use "exact" in Route declaration,
   you also need to use "element" instead of "component" */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
/* Components [ Reusable ]*/
import Header from "../components/reusable/Header";
/* Components [ Containers ] */
import Main from '../components/containers/Main';
/* Components [ Layouts ] */
import About from '../components/layouts/About'
import Error from '../components/layouts/Error'
import Pagination from '../components/layouts/Pagination';
import { Dashboard } from '../components/layouts/Dashboard';


/* OPTIONAL */
// Lazy Loading to optimising components loading time
// const LazyAbout = React.lazy(() => import('../components/About'))
// const LazyMain = React.lazy(() => import("../containers/Main"))
// End

export default function RoutesConfig() {
    return (
        <Router>
            <Header/>
            {/* <React.Suspense fallback="Loading..."> */}
                <Routes>
                    {/* OPTIONAL : for lazyloading of components */}
                    {/* <Route path="/about"><LazyAbout/></Route>
                    <Route path="/contact"><LazyMain/></Route> */}
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/contact" element={<Main module={"contact"}/>}></Route>
                    <Route path="/authentication" element={<Main module={"authentication"}/>}></Route>
                    <Route path="/page" element={<Pagination/>}></Route>
                    <Route path="/dashboard" element={<Dashboard/>}></Route>
                    <Route path="*" element={<Error/>}></Route>
                </Routes>
            {/* </React.Suspense> */}
        </Router>
    )
}