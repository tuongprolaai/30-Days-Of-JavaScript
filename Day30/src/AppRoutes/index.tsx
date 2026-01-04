import Navigation from "../layouts/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import WorldCountries from "../pages/WorldCountries";
import ValidateForm from "../pages/ValidateForm";
import Home from "../pages/Home";
function AppRoutes(){
    return <>
    <Router>
        <Navigation></Navigation>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/worldcountries" element={<WorldCountries/>}></Route>
            <Route path="/validateform" element={<ValidateForm/>}></Route>
        </Routes>
    </Router>

    </>
}
export default AppRoutes;
