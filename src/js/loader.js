const loader = document.querySelector('.loading');

window.onload = function () {
  const loaderDuration = 150; 

  setTimeout(() => {
    loader.classList.add('loading--hiden');
    setTimeout(() => {
      loader.style.display = 'none';
    }, 100); 
  }, loaderDuration);
};
