import renderToDOM from '../utils/renderToDom';

const showJoke = (joke, event) => {
  let domString = '';

  // console.warn(event.target.innerHTML);
  if (event.target.innerHTML === 'Get a Joke') {
    domString += `<h3>${joke.setup}</h3>`;
    renderToDOM('#jokeContainer', domString);
  } else if (event.target.innerHTML === 'Get Punchline') {
    domString += `<h5>${joke.delivery}</h5>`;
    renderToDOM('#punchline', domString);
  } else if (event.target.innerHTML === 'Get Another Joke!') {
    domString += `<h3>${joke.setup}</h3>`;
    renderToDOM('#jokeContainer', domString);
    renderToDOM('#punchline', '');
  }
};

export default showJoke;
