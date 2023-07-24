import {BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom";
import {
    Admin,
    EnglishComponent,
    LatvianComponent,
    NotFoundComponent,
    RussianComponent,
    Dashboard,
    Add, Delete
} from "./components";
import React from "react";

function App() {

    return(
        <Router>
            <Routes>
                <Route path="/" element={<LatvianComponent/>}/>
                <Route path="/en" element={<EnglishComponent/>}/>
                <Route path="/ru" element={<RussianComponent/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/dashboard/add" element={<Add/>}/>
                <Route path="/dashboard/delete" element={<Delete/>}/>
                <Route path="*" element={<NotFoundComponent/>}/>
            </Routes>
        </Router>
    )
}

export default App;