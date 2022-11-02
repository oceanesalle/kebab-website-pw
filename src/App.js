import React from 'react'; 
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import { GlobalStyle } from './globalStyles';
import { productData } from './components/Products/data';
import Feature from './components/Feature/Feature';


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='enim nulla aliquet porttitor' data={productData}/>
      <Feature />
    
      
    </Router>
  );
}

export default App;
