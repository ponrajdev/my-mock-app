import { render, screen } from '@testing-library/react';
import App from './App';

import { Provider } from 'react-redux';
import createSagaMiddleware from "redux-saga";
import postReducer from "./store/post";
import rootSaga from "./store/rootSaga";

const sagaMiddle = createSagaMiddleware();
const store = configureStore({
  reducer: {
    post: postReducer,
  },
  middleware: (getDefaultMiddle) => getDefaultMiddle().concat(sagaMiddle),
});

sagaMiddle.run(rootSaga);
//let store;
test('renders learn react link', () => {
  
  const { getByText } = render(
                                <Provider store={store}>
                                    <App />
                                </Provider>);
  //const linkElement = screen.getByText(/learn react/i);
  expect(getByText('Hello World!')).not.toBeNull();
  //expect(linkElement).toBeInTheDocument();
});
