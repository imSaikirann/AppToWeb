import './App.css';
import { ChakraProvider } from '@chakra-ui/react'; // Import ChakraProvider
import Home from './Pages/Home';
import Next from './Pages/Next'
import RegPage from './Pages/RegPage'
import Login from './Pages/Login'
import Main from './Pages/Main'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <ChakraProvider> {/* Wrap your app with ChakraProvider */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/next' element={<Next/>}></Route>
      <Route path='/reg' element={ <RegPage/>}></Route>
      <Route path='/login' element={ <Login/>}></Route>
      <Route path='/main' element={ <Main/>}></Route>



    </Routes>
    </BrowserRouter>
  
    </ChakraProvider>
  );
}

export default App;
