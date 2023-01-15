const slidePanel = document.querySelector('#slide-frame');
const slideWindow = slidePanel.contentWindow;
const triggerButton = document.querySelector('#trigger-button');

triggerButton.addEventListener('click', e => {
  slideWindow.postMessage({
    type: 'command',
    command: 'addClass',
    _class: 'move-half'
  });
});

