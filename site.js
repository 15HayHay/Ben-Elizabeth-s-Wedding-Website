const moveCursor = (e) => {
  let cursorPointed = document.querySelector(".cursor-pointed");

  const mouseY = e.clientY;
  const mouseX = e.clientX;
  cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};
window.addEventListener("mousemove", moveCursor);
