const bottomBar = document.querySelector('.bottom-button');
let lastScrollTop = 0;
const scrollThreshold = 10;
window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop + scrollThreshold) {
    bottomBar.classList.remove('visible');
    bottomBar.classList.add('hidden');
  } else if (scrollTop < lastScrollTop - scrollThreshold) {
    bottomBar.classList.remove('hidden');
    bottomBar.classList.add('visible');
  }
  lastScrollTop = scrollTop;
});