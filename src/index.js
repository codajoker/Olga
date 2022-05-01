import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { GlobalStyle } from './Global.styled.jsx';
// import store, { persistor } from "./redux/store";
import store from './redux/store';
// import { PersistGate } from "redux-persist/integration/react";

import { App } from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <GlobalStyle />
//       <PersistGate loading={null} persistor={persistor}>
//         <App />
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
