// TODO: User 모델 모듈 불러오기
// TODO: bcrypt 패키지 불러오기

exports.index = (req, res) => {
  // index.ejs 랜더 (data 키로 session 객체의 userInfo 전달)
};

exports.getRegister = (req, res) => {
  // register.ejs 랜더
};

exports.getLogin = (req, res) => {
  // login.ejs 랜더
};

exports.getUsers = async (req, res) => {
  // 세션에 userInfo 데이터가 있다면; 전체 유저를 찾음
  // 세션에 userInfo 데이터가 없다면; /login 경로로 리다이렉트
  // -> 즉, 해당 요청은 로그인한 사람만 전체 유저를 조회할 수 있음
};

exports.getProfile = async (req, res) => {
  // 1. userInfo 세션에 저장된 id를 이용해 현재 로그인한 유저의 id 값으로 특정 유저 정보 하나를 조회
  // 2. profile.ejs 랜더 + data 키로 특정 유저를 찾은 결과를 넘김
};

exports.postRegister = async (req, res) => {
  // 회원가입 요청시 비밀번호는 암호화한 값으로 DB에 추가
  // 응답은 {result: true}
};

exports.postLogin = async (req, res) => {
  // Step1. 아이디를 찾아서 사용자 존재 유무 체크
  // Step2. 입력된 비밀번호 암호화하여 기존 데이터와 비교
  // 2-1. 유저 있음
  // 2-1-1. 비밀번호 일치;
  //    userInfo 키 값으로 세션 생성 (userInfo는 name키와 id 키를 갖는 "객체")
  //    응답 데이터: { result: true, data: step1에서 찾은 유저 }
  // 2-1-2. 비밀번호 불일치;
  //    응답 데이터; { result: false, message: '비밀번호가 틀렸습니다.'
  // 2-2. 유저 없음
  //    응답 데이터; { result: false, message: '존재하는 사용자가 없습니다' }
};

exports.patchProfile = async (req, res) => {
  // 사용자가 요청한 데이터를 변경
  // 응답 데이터; { result: true }
};

exports.deleteUser = async (req, res) => {
  // 1. 유저 삭제
  // 2. 세션 삭제
};

// 비밀번호 암호화 함수 => (선택) 가능하다면 비밀번호 암호화와 관련된 별도의 모듈로 작성해보기! (utils/encrypt.js)
const saltRounds = 11;
// TODO: 비밀번호를 해싱하는 함수 정의 (bcryptPassword)

// TODO:비밀번호와 원본 비번을를 비교하는 함수 (compareFunc)
