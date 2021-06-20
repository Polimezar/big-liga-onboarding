const content = document.querySelector('.main-block__dino');

const onEscPress = (evt) => {
  const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

  if (isEscKey && content.classList.contains('main-block__dino--show')) {
    evt.preventDefault();
    removeContent();
  }
};

const removeContent = () => {
  if (content.classList.contains('main-block__dino--show')) {
    content.classList.remove('main-block__dino--show');

    document.removeEventListener('keydown', onEscPress);
    content.addEventListener('transitionend', () => {
    });
  }
};

const onClick = (evt) => {
  if (evt.target.closest('.main-block')) {
    evt.preventDefault();
    if (content.classList.contains('main-block__dino--show')) {
      removeContent();
    } else {
      content.classList.add('main-block__dino--show');

      document.addEventListener('keydown', onEscPress);
      content.addEventListener('transitionend', () => {
      });
    }
  }
};

const showContent = () => {
  if (content) {
    document.body.addEventListener('click', onClick);
  }
};

export {
  showContent
};
