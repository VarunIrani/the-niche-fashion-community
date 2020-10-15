import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {exclusive_reads} from "./content/exclusive-reads";

exclusive_reads.articles.forEach((article) => {
  fetch(article.file).then(r => r.text().then(text => {
    article.content = text.replaceAll('\n', '')
  }))
})

exclusive_reads.indian.forEach((article) => {
  fetch(article.file).then(r => r.text().then(text => {
    article.content = text.replaceAll('\n', '')
  }))
})

exclusive_reads.international.forEach((article) => {
  fetch(article.file).then(r => r.text().then(text => {
    article.content = text.replaceAll('\n', '')
  }))
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
