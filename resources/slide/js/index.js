const contentTitleHeader = document.querySelector('#content-title');

window.onmessage = e => {
  const { type } = e.data;
  contentTitleHeader.classList.add('move-half');
}
