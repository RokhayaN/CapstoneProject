import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Earth } from './Components/Earth'
import { Baselayout } from './Components/Layout/Baselayout'
import './index.css'
import { BrowserRouter as Router, Route, Routes as Switch} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Baselayout>
      <Switch>
        <Route path="/" element={<App />} />
        <Route path="/earth" element={<Earth />} />
      
      </Switch>
    </Baselayout>
  </Router>
)
