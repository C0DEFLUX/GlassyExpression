import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {
    Admin,
    EnglishComponent,
    LatvianComponent,
    NotFoundComponent,
    RussianComponent,
    Dashboard,
    Add,
    Edit,
    Marketing,
} from "./components";
import React from "react";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {

    return(
        <Router>
            <Routes>
                <Route path="/" element={<LatvianComponent/>}/>
                <Route path="/en" element={<EnglishComponent/>}/>
                <Route path="/ru" element={<RussianComponent/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route element={<PrivateRoutes />}>
                    <Route path="/panelis" element={<Dashboard/>}/>
                    <Route path="/panelis/pievienot" element={<Add/>}/>
                    <Route path="/panelis/rediģēt/:name" element={<Edit/>}/>
                    <Route path="/panelis/marketings/titula-bilde" element={<Marketing/>}/>
                </Route>
                <Route path="*" element={<NotFoundComponent/>}/>
            </Routes>
        </Router>
    )
}

export default App;