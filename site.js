const moveCursor = (e) => {
  let cursorPointed = document.querySelector(".pointed");
  let cursorRounded = document.querySelector(".rounded");

  const mouseY = e.clientY;
  const mouseX = e.clientX;
  cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  console.log(`mouse(${mouseX}, ${mouseY})`)
  console.log(cursorPointed.style.transform)
};
window.addEventListener("mousemove", moveCursor);

