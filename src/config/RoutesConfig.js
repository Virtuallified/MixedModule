import React from 'react'
/* Using "Routes" instead of "Switch" in react-router v6, 
   you also not need to use "exact" in Route declaration,
   you also need to use "element" instead of "component" */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
/* Components */
import About from '../components/About'
import Error from '../components/Error'
import Main from '../containers/Main';

/* OPTIONAL */
// Lazy Loading to optimising components loading time
// const LazyAbout = React.lazy(() => import('../components/About'))
// const LazyMain = React.lazy(() => import("../containers/Main"))
// End

export default function RoutesConfig() {
    return (
        <Router>
            {/* <React.Suspense fallback="Loading..."> */}
                <Routes>
                    {/* OPTIONAL : for lazyloading of components */}
                    {/* <Route path="/about"><LazyAbout/></Route>
                    <Route path="/contact"><LazyMain/></Route> */}
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/contact" element={<Main/>}></Route>
                    <Route path="*" element={<Error/>}></Route>
                </Routes>
            {/* </React.Suspense> */}
        </Router>
    )
}