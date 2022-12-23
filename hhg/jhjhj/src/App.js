import './App.css';
import React from 'react';
import Home from "./component/home";
import Add from "./component/add";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Edit from "./component/edit";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/create' element={<Add/>}/>
                        <Route path='/edit/:id' element={<Edit/>}/>
                    </Routes>
                </BrowserRouter>

            </div>
        );
    }
}

export default App;
