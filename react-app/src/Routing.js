import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App';
import Test from './Test';
import CreateTest from './CreateTest';
import UpdateTest from './UpdateTest';
function Routing() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App/>}/>
                    <Route path='/test' element={<Test/>}/>
                    <Route path='/test/:pTitle/:pBody' element={<Test/>}/>
                    <Route path='/test/:pId/:pTitle/:pBody' element={<Test/>}/>
                    <Route path='/create' element={<CreateTest/>}/>
                    <Route path='/update/:pId/:pTitle/:pBody' element={<UpdateTest/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing;