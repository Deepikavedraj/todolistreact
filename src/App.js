
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Todolist from './Todolist';
// import Index from './Components/Index';
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom';
import ToDo from './Components/ToDo';
import Login from './Components/Login';
import Fatchapi from './Components/Fatchapi';
import PostApi from './Components/PostApi';

function App() {
  return (
    <div className="App">
       {/* <Todolist/>
       <ToDo /> */}
{/* <Login /> */}
{/* <Fatchapi /> */}
{/* <PostApi /> */}

    <Routes>
      <Route path="/" element={<Navbar/>} />
      <Route path="/ToDo" element={<ToDo/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Fatchapi" element={<Fatchapi/>} />
      <Route path="/PostApi" element={<PostApi/>} />
     </Routes>
     
    </div>
    
  );
}

export default App;
