// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getRequest from '../api/jokeData';
import showJoke from '../pages/getJoke';
import renderToDOM from '../utils/renderToDom';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1><span>&#127147;</span> Joke Generator <span>&#127147;</span></h1><br />
    <div id="jokeContainer"></div>
    <div id="punchline"></div>
    <div id="btn-container">
      <button class="btn btn-danger" id="joke-btn">Get a Joke</button><br />
    </div>
  `;

  let jokeRespone;
  document
    .querySelector('#btn-container')
    .addEventListener('click', (e) => {
      if (e.target.id.includes('joke-btn')) {
        // getRequest().then(console.warn);
        renderToDOM('#btn-container', '<button class="btn btn-danger" id="punchline-btn">Get Punchline</button>');
        getRequest().then((response) => {
          console.warn(response);
          jokeRespone = response;
          showJoke(response, e);
        });
      } else if (e.target.id.includes('punchline-btn')) {
        showJoke(jokeRespone, e);
        renderToDOM('#btn-container', '<button class="btn btn-danger" id="joke-btn">Get Another Joke!</button>');
      }
    });

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
