require('es6-set/implement');
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/index.scss';

const AppContainer = process.env.NODE_ENV === 'production' ?
  (props: any) => React.Children.only(props.children) :
  require('react-hot-loader').AppContainer;
import App from './app/app';

const rootEl = document.getElementById('root');

const render = (Component: any) => {
  ReactDOM.render(<AppContainer>
    <Component />
  </AppContainer>, rootEl);
}

render(App);

module.hot.accept('./app/app', () => {
  const NextApp = require('./app/app').default;
  render(NextApp);
});
