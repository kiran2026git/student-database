
import './App.css';
import"../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route,} from 'react-router-dom';
import AddStudent from './student/AddStudent';
import EditStudent from './student/EditStudent';
import ViewStudent from './student/ViewStudent';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/studentdata" element={<AddStudent/>} />
          <Route exact path="/editstudent/:id" element={<EditStudent/>} />
          <Route exact path="/viewstudent/:id" element={<ViewStudent />} />
        </Routes>
      </Router>
    

        
      
      
     

    </div>
  );
}

export default App;
