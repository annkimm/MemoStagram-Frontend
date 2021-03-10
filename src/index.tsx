import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer, { rootSaga } from './store';
import Routes from './Routes';
import GlobalStyle from './styles/GlobalStyle';
import initFontAwesome from './utils/fontawesome';

initFontAwesome();

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, process.env.NODE_ENV === 'production'
  ? applyMiddleware(sagaMiddleware)
  : composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Routes />
      <GlobalStyle />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
