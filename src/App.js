import styles from "./App.module.css"
import NavBar from "./components/NavBar";
import Container from 'react-bootstrap/Container'
import {Route, Routes} from 'react-router-dom'
import './api/axiosDefault';
import SignUpForm from "./pages/auth/SignUpForm";

function App() {
  return (
    <div className={styles.App}>
    <NavBar/>
    <Container className={styles.Main}>
      <Routes>
        <Route exact path='/' element={<h1>Home Page</h1>} />
        <Route exact path='/signin' element={<h1>Sign In</h1>} />
        <Route exact path='/signup' element={<SignUpForm />} />
      </Routes>
      
    </Container>
    </div>
  );
}

export default App;
