// 무조건 실행
const nameH1element = document.querySelector('h1.inline');
const connectNameElement = document.querySelector('span.red');
const localName = localStorage.getItem('name');
if (localName) {
  nameH1element.textContent = localName;
  connectNameElement.textContent = localName;
}

// 클릭 했을때만 발생
nameH1element.onclick = () => {
  const inputName = prompt('이름을 입력해 주세요.');
  if (inputName) {
    localStorage.setItem('name', inputName);

    nameH1element.textContent = inputName;
    connectNameElement.textContent = inputName;
  } else {
    alert('이름이 입력되지 않았습니다.');
  }
};
