import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';
import { ChakraProvider, Button } from "@chakra-ui/react";
import {BrowserRouter} from "react-router-dom"


ReactDOM.render(
  <React.StrictMode>
 

    <BrowserRouter>

      <ChakraProvider>
      {/* <Button colorScheme="teal">Test Chakra</Button> */}
           <App / >
      </ChakraProvider>

    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);
