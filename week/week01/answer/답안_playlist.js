// playList에 가수와 노래를 객체로 생성
const playList = {
  볼빨간사춘기: "나만봄",
  엠씨더맥스: "어디에도",
  방탄소년단: "butter",
  "anna-marie": "2002",
  임창정: "소주한잔",
};

// 함수를 만들어 그 안에 영어로 된 가수명과 한글로 된 가수명을 객체로 생성
function playSong(singer) {
  const koreanSinger = {
    BOL4: "볼빨간사춘기",
    "MC THE MAX": "엠씨더맥스",
    BTS: "방탄소년단",
    "anna-marie": "안나마리",
    "Im chang-jung": "임창정",
  };

  //  or(||)를 통해 한글 가수명 혹은 영어 가수명을 입력받았을 때 작동하게끔 convertSinger 변수에 대입
  const convertSinger = koreanSinger[singer] || singer;

  //  playList 안에 convertSinger(영어 가수명 혹은 한글 가수명)을 넣어 값이 존재하면 노래를 재생합니다를 반환,
  // 값이 존재하지 않으면 "재생목록에 존재하지 않습니다."를 반환

  convertSinger in playList
    ? console.log(
        `${singer}의 노래 ${playList[convertSinger]}을/를 재생합니다.`
      )
    : console.log("재생목록에 존재하지 않습니다.");
}
playSong("BTS");
playSong("아이유");

/*
// 실행 예시
playSong('방탄소년단'); // 방탄소년단의 노래 butter을/를 재생합니다.
playSong('엠씨더맥스'); // 엠씨더맥스의 노래 어디에도을/를 재생합니다.
playSong('안나마리'); // 안나마리의 노래 2002을/를 재생합니다.
playSong('임창정'); // 임창정의 노래 소주한잔을/를 재생합니다.
playSong('BTS'); // BTS의 노래 butter을/를 재생합니다.
playSong('아이유'); // 재생목록에 존재하지 않습니다.
*/
