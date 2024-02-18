const renderToDOM = (divId, htmlToRender) => {
  const selectedId = document.querySelector(divId);
  selectedId.innerHTML = htmlToRender;
};

export default renderToDOM;
