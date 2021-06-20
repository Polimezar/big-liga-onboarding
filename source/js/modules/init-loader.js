const initLoader = () => {

  const loader = document.querySelector('.loader');
  const tabletWidth = window.matchMedia('(max-width:1023px)');

  const hiddenLoader = () => {
    loader.classList.add('hidden');
    loader.remove();
    loader.removeEventListener('click', hiddenLoader);
  };

  const onEnter = (evt) => {
    const isEnterKey = evt.key === 'Enter';

    if (isEnterKey) {
      evt.preventDefault();
      hiddenLoader();
    }
  };

  if (loader) {
    if (tabletWidth.matches) {
      loader.addEventListener('click', hiddenLoader);
    }

    if (!tabletWidth.matches) {
      document.addEventListener('keydown', (evt) => {
        onEnter(evt);
      });
    }
  }
};

export {initLoader};
