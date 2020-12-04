import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [thunk, sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(...middleware)
));

sagaMiddleware.run(rootSaga);

export default store;

// import React from 'react';
// import HtmlToReact from 'html-to-react';

// function SidebarText(props) {
//     const { sidebar } = props;

//     const renderHtml = (html) => {
//         var htmlInput = `<div>${html}</idv>`;
//         var htmlToReactParser = new HtmlToReact.Parser(React);
//         return htmlToReactParser.parse(htmlInput);
//     }

//     return (
//         <React.Fragment>
//             <h5 className={`sidebar-title`} >
//                 {renderHtml(sidebar.title)}
//             </h5>
//             <div className={`sidebar-content`}>
//                 {renderHtml(sidebar.content)}
//             </div>
//         </React.Fragment>
//     );
// }

// export default SidebarText;