import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import netlifyIdentity from '@lonelypixels/netlify-identity-widget';

window.netlifyIdentity = netlifyIdentity;
// You must run this once before trying to interact with the widget
netlifyIdentity.init({
    surnameDelimiter: "," // Enable surname field
});

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
