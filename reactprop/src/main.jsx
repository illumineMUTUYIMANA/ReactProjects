// import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react';
import './index.css';
import Text from './text';
import Form from './form';
import Option from './option';
import MyApp from './myportal';
// import App from './App.jsx'
// import { useState } from 'react';









createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Text/>
    <Form/>
    <Option/>
    <MyApp/>
  </StrictMode>,
);
// export default Text;
