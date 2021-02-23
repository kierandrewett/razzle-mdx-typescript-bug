import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';

hydrate(<App />, document.getElementById('root'));

if ('hot' in module) {
  ;(module as any).hot.accept()
}