// 메뉴 클릭 시 부드럽게 이동
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.onload = function () {
  window.scrollTo(0, 0);
};
