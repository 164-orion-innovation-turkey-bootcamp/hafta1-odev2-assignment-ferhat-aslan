///Html dosyasındaki tüm selectorlar seçildi.
const buttons = document.querySelectorAll(".btn");
const head = document.querySelector("#heading");
const restartButton = document.querySelector("#restart");
restartButton.addEventListener("click", restart);
//herbir butana tıklanıldığında Marking fonksiyonu çağrıldı
const ClickingProcess = () => {
  buttons.forEach((box, i) => {
    box.addEventListener("click", Marking);
  });
};
//tıklanan kutular için bir dizi tanımlandı
const ControlList = [];
//işaret tipleri ve şuanki oyuncu belirlendi.
const mark_O = "O";
const mark_X = "X";
let CurrentPlayer = mark_O;

function Marking(e) {
  console.log(ControlList);
  //adddeventlistenerden tıklanan elemanın id parametresini alıyor.
  const id = e.target.id;
  //eğer daha önce tıklanılmadıysa butonun id sini o işaret yap
  if (!ControlList[id]) {
    ControlList[id] = CurrentPlayer;
    //buttonun texti önceden boştu o texti de işaret yap
    e.target.innerText = CurrentPlayer;
    //oynama sıralarını belirle ve ekrana yaz
    if (CurrentPlayer === mark_O) {
      head.innerText = `sıra => ${mark_X} de `;
    } else {
      head.innerText = `sıra => ${mark_O} da `;
    }
    //her tıklama sonunda kazanma kontrolü yap
    WinCheck();

    //her tıklanıldığında oyuncu değiştir.
    CurrentPlayer = CurrentPlayer === mark_O ? mark_X : mark_O;
  }
  ///enfazla 8 tıklama

  if (ControlList[8] != null) {
    restart();
  }
}
function WinCheck() {
  //kazanma kontrolü
  // 8 farklı kazanma şekli var
  //0,1,2--3,4,5--6,7,8--0,3,6--1,4,7--2,5,8--0,4,8--2,4,6

  if (
    ControlList[0] === CurrentPlayer &&
    ControlList[1] === CurrentPlayer &&
    ControlList[2] === CurrentPlayer
  ) {
    head.innerText = `${CurrentPlayer} kazandı`;

    restart();
  }
  if (
    ControlList[3] === CurrentPlayer &&
    ControlList[4] === CurrentPlayer &&
    ControlList[5] === CurrentPlayer
  ) {
    head.innerText = `${CurrentPlayer} kazandı`;
    restart();
  }
  if (
    ControlList[6] === CurrentPlayer &&
    ControlList[7] === CurrentPlayer &&
    ControlList[8] === CurrentPlayer
  ) {
    head.innerText = `${CurrentPlayer} kazandı`;
    restart();
  }
  if (
    ControlList[0] === CurrentPlayer &&
    ControlList[3] === CurrentPlayer &&
    ControlList[6] === CurrentPlayer
  ) {
    head.innerText = `${CurrentPlayer} kazandı`;
    restart();
  }
  if (
    ControlList[1] === CurrentPlayer &&
    ControlList[4] === CurrentPlayer &&
    ControlList[7] === CurrentPlayer
  ) {
    head.innerText = `${CurrentPlayer} kazandı`;
    restart();
  }
  if (
    ControlList[2] === CurrentPlayer &&
    ControlList[5] === CurrentPlayer &&
    ControlList[8] === CurrentPlayer
  ) {
    head.innerText = `${CurrentPlayer} kazandı`;
    restart();
  }
  if (
    ControlList[0] === CurrentPlayer &&
    ControlList[4] === CurrentPlayer &&
    ControlList[8] === CurrentPlayer
  ) {
    head.innerText = `${CurrentPlayer} kazandı`;
    restart();
  }
  if (
    ControlList[2] === CurrentPlayer &&
    ControlList[4] === CurrentPlayer &&
    ControlList[6] === CurrentPlayer
  ) {
    head.innerText = `${CurrentPlayer} kazandı`;
    restart();
  }
}
//kazanan belli olunca 0.5 saniye sonra her id i sıfırla texti sıfırla yeniden başlat.

function restart() {
  setTimeout(() => {
    ControlList.forEach((space, i) => {
      //kontrol listesini herbir elemanı null yap
      ControlList[i] = null;
    });
    buttons.forEach((box) => {
      //texti boş hale getir.
      box.innerText = "";
    });
    head.innerText = `Tic Tac Toe`;
  }, 500);
}

restart();
ClickingProcess();
