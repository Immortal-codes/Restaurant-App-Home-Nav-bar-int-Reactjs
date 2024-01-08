/* eslint-disable react/jsx-no-undef */
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link,Routes } from 'react-router-dom';
import { Navbar,Container,Nav, } from 'react-bootstrap';
import RestaurantList from './component/RestaurantList';
import RestaurantCreate from './component/RestaurantCreate';
import RestaurantSearch from './component/RestaurantSearch';
import RestaurantUpdate from './component/RestaurantUpdate';
import RestaurantDetails from './component/RestaurantDetails';
import Home from './component/Home'
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Indian Restaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          
            <Nav.Link href="/"> <Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="list"><Link to="/list">List</Link></Nav.Link>
            <Nav.Link href="create">    <Link to="/create">Create</Link></Nav.Link>
            <Nav.Link href="#update"><Link to="/update">Update</Link></Nav.Link>
            <Nav.Link href="#search"><Link to="/search">Search</Link></Nav.Link>
            <Nav.Link href="#details"> <Link to="/details">Details</Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <div>
          <nav>
           
          </nav>


          <Routes>
            <Route exact path="/" component={<Home/>} />
            <Route path="/list" element={<RestaurantList />} />
            <Route path="/create" element={<RestaurantCreate />} />
            <Route path="/update" element={<RestaurantUpdate />} />
            <Route path="/search" element={<RestaurantSearch />} />
            <Route path="/details" element={<RestaurantDetails />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
