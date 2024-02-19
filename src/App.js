
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Adminlog from './admin/Adminlog';
import Home from './admin/Home';
import UserTypeSelection from './admin/UserTypeSelection';
import Workerdetails from './admin/Workerdetails';
import Clientdetails from './admin/Clientdetails';
import WorkerReg from './admin/WorkerReg';



function App() {
  return (
    <div>
    
     
      <BrowserRouter>
      
           <Routes>
           <Route path={'/'} element={<Adminlog method='post' />}></Route>
          <Route path={'/home'} element={<Home method='post' />}></Route>
          
             <Route path="/type" element={<UserTypeSelection method="post"/>}></Route>
            <Route path="/WorkerReg" element={<WorkerReg method="post"/>}></Route>
            <Route path="/Workerdetails" element={<Workerdetails method="get"/>}></Route>

            {/* <Route path="/ClientReg" element={<ClientReg method="post"/>}></Route> */}
          <Route path="/Clientdetails" element={<Clientdetails method="get" />}></Route>
          
           </Routes>
           </BrowserRouter>
           
    </div>
  );
}

export default App;
