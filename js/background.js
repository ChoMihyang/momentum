const images = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// 요소를 추가함으로써 요소 내 속성들을 사용할 수 있도록 함
const bgImage = document.createElement("img");

// img태그의 src 속성 값 지정
bgImage.src = `img/${chosenImage}`;

// html의 body태그 내 img태그 추가
document.body.appendChild(bgImage);