
import './App.css';
import { Nav, Navbar, Container, Row, Col} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css"


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CreateAsset from './components/CreateAsset';
import EditAsset from './components/EditAsset';
import AssetList from './components/AssetList';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <header className="App-header">
          <Navbar bg="dark" variant="dark">
             <Container>
               <Navbar.Brand>
                 <Link to={'/create-student'} className='nav-link'>Crypto Tracker</Link>
               </Navbar.Brand>

               <Nav className='justify-content-end'>
                 <Nav>
                   <Link
                      to={'/create-student'}
                      className='nav-link'
                   >
                     Add Asset
                   </Link>
                 </Nav>
                 <Nav>
                   <Link
                      to={'/student-list'}
                      className='nav-link'
                   >
                     Portfolio
                   </Link>
                 </Nav>


               </Nav>


             </Container>
          </Navbar>
       </header>
            <Container>
              <Row>
                 <Col md={12}>
                   <div className="wrapper">
                     <Routes>
                        <Route exact path="/" 
                            element={<CreateAsset/>} />
                        <Route path="/create-student" 
                            element={<CreateAsset/>} />
                        <Route path="/edit-student/:id" 
                            element={<EditAsset/>} />
                        <Route path="/student-list" 
                            element={<AssetList/>} />
                     </Routes>
                   </div>
                 </Col>
              </Row>
            </Container>
    </div>
    </BrowserRouter>
  );
}

export default App;
