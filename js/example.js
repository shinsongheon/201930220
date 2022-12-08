// 무조건 실행
const nameH1element = document.querySelector('h1.inline');
const connectNameElement = document.querySelector('span.red');

const noSpanelement = document.querySelector('span.studentNo');

const emailSpanelement = document.querySelector('span.email');

const inputModalElement = document.querySelector('#inputModal');

const setUserName = (userName) => {
  nameH1element.textContent = userName;
  connectNameElement.textContent = userName;
};
const setStudentNo = (studentNo) => {
  noSpanelement.textContent = studentNo;
};
const setEmail = (email) => {
  emailSpanelement.textContent = email;
};


/*
function setUserName (name) {
  nameH1element.textContent = name;
  connectNameElement.textContent = name;
}
*/

const localName = localStorage.getItem('userName');
if (localName) setUserName(localName);

const localNo = localStorage.getItem('studentNo');
if (localNo) setStudentNo(localNo);

const localEmail = localStorage.getItem('email');
if (localEmail) setEmail(localEmail);


// 클릭 했을때만 발생
nameH1element.onclick = () => {
  inputModalElement.showModal();
  // const inputName = prompt('이름을 입력해 주세요.');
  // if (inputName) {
  //   localStorage.setItem('name', inputName);

  //   setUserName(inputName);
  // } else {
  //   alert('이름이 입력되지 않았습니다.');
  // }
};

const modalsubmitBtn = document.querySelector('button.modalSubmit');
modalsubmitBtn.onclick = () => {
  const modalFormElement = document.querySelector('.modalForm');
  const formData = new FormData(modalFormElement);
  if (modalFormElement.studentNo.value.length !== 9) {
    alert('학번은 9자로 입력해주세요');
  } else if (modalFormElement.email.value.match(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i) === null) {
    alert('이메일을 잘못 입력하셨습니다.');
  } else {
    for (const [key, value] of formData) {
      localStorage.setItem(key, value);
      // console.log(`${key}: ${value}`);
      if (key === 'userName') setUserName(value);
      if (key === 'studentNo') setStudentNo(value);
      if (key === 'email') setEmail(value);
    }
    inputModalElement.close();
  }
};

inputModalElement.onclick = (event) => {
  if (event.target.nodeName === 'DIALOG') inputModalElement.close();
};
