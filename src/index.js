import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);



// 	npx create-react-app name-folder
// 	install bootstrap
// "@fortawesome/fontawesome-svg-core": "^6.4.0",
// "@fortawesome/free-solid-svg-icons": "^6.4.0",
// "@fortawesome/react-fontawesome": "^0.2.0",
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // component that recieves icon={}
// import { faStar } from '@fortawesome/free-solid-svg-icons'; // icon for component above
//  render <FontAwesomeIcon icon={faStar} />

