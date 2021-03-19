// const loginText = document.querySelector(".title-text .login");
// const loginForm = document.querySelector("form.login");
// const loginBtn = document.querySelector("label.login");
// const signupBtn = document.querySelector("label.signup");
// const signupLink = document.querySelector("form .signup-link a");
// signupBtn.onclick = () => {
//   loginForm.style.marginLeft = "-50%";
//   loginText.style.marginLeft = "-50%";
// };
// loginBtn.onclick = () => {
//   loginForm.style.marginLeft = "0%";
//   loginText.style.marginLeft = "0%";
// };
// signupLink.onclick = () => {
//   signupBtn.click();
//   return false;
// };

//로그인 기능구현
function login() {
  // ID : #userId
  // pwd : #pwd
  // btn : #btn_login

  var members = JSON.parse(localStorage.getItem("members")) || [];
  var pwd;
  for (var i in members) {
    if (members[i].id == $("#userId").val()) {
      pwd = members[i].id;
      break;
    }
  }

  if (pwd != null) {
    alert("로그인성공");
    var w = 300;
    var h = 300;
    var left = (screen.availWidth - w) / 2;
    var top = (screen.availHeight - h) / 2;
    open(
      "table.html",
      "new",
      "width=300, height=300, left=" + left + ", top=" + top
    );
    window.close();
  } else {
    alert("아이디와 비밀번호를 다시 확인해주세요");
    return;
  }

  // if (remember.checked == false) {
  //   localStorage.removeItem("auto");
  // } else {
  //   //Member 배열
  //   var auto = [];
  //   auto.push(new Member($("#userId").val(), $("#pwd").val()));

  //   //JSON문자열로 변환
  //   var jsonAuto = JSON.stringify(auto);

  //   //localStorage에 저장
  //   localStorage.setItem("auto", jsonAuto);
  // }
}

//회원가입 기능구현
function signup() {
  // id : #upID  영문/숫자 혼합4~8글자
  // pwd : #upPwd 최소4~12글자
  // check : #chk_pwd
  // btn : #btn_signup

  if (localStorage.getItem($("#upID").val()) != null) {
    alert("이미 사용중인 아이디 입니다.");
    return;
  }

  if (/^[a-zA-Z0-9]{6,}$/.test($("#upID").val()) == false) {
    alert("아이디는 영문자/숫자 6글자이상 이여야합니다.");
    return;
  }

  if (/^.{4,12}$/.test($("#upPwd").val()) == false) {
    alert("비밀번호는 최소 4~ 최대12글자 입니다.");
    return;
  }
  if ($("#upPwd").val() != $("#chk_pwd").val()) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  //Member 배열
  var members = JSON.parse(localStorage.getItem("members")) || [];
  members.push(new Member($("#upID").val(), $("#upPwd").val()));

  //JSON문자열로 변환
  var jsonMembers = JSON.stringify(members);

  //localStorage에 저장
  localStorage.setItem("members", jsonMembers);
  alert("회원가입이 완료 되었습니다.");
}

function Member(id, pwd) {
  this.id = id;
  this.pwd = pwd;
}
