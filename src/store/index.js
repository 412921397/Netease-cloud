import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // 浏览器redux调试工具可用的配置

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default store;
