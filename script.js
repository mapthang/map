const letters = document.querySelectorAll(".letter");

letters.forEach((letter, index) => {
  letter.addEventListener("click", () => {
    letter.style.fontSize = "4em";
    setTimeout(() => {
      letter.style.fontSize = "3em";
    }, 500);
  });
});

// Hiệu ứng thay đổi màu sắc ngẫu nhiên
setInterval(() => {
  letters.forEach((letter) => {
    letter.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;
  });
}, 1000);
