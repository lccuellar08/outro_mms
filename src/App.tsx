import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Main from './components/Main/Main';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/main/*" element={<Main />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App;
