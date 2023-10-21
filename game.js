//again butonu: sıfırlama
// ? : sayı doğru ise sayıyı göster
// input: 1-20 arasında sayı alacak
// check butonu inputta yazılan sayıyı pc nin tuttuğu sayı ile karşılaştırıyor
// start gues. yerinde sayı düşük/yüksek yazıyor
//score 20 de başlar her tahminde -1 oluyor bilinine kadar

let randomNumber = Math.floor(Math.random() * 20);
console.log(randomNumber);

function ekranMesaji(mesaj) {
  document.querySelector(".message").textContent = mesaj;
}

let highscore = 0
let score = 20;

const checkBtn = document
  .querySelector(".check")
  .addEventListener("click", () => {
    const Inputnumber = Number(document.querySelector(".guess").value);
    console.log(Inputnumber);
    if (!Inputnumber) alert("sayı giriniz");
    else if (Inputnumber === randomNumber) {
      //console.log("aynı")
      ekranMesaji("aynı");
      document.querySelector(".score").textContent = score;
      document.querySelector(".highscore").textContent = score;
      document.body.style.backgroundColor = "green";
    } else if (Inputnumber < randomNumber) {
      // console.log("girilen sayı küçük")
      ekranMesaji("girilen sayı küçük");
      score -= 1;
      document.body.style.backgroundColor = "purple";
    } else if (Inputnumber > randomNumber) {
      //console.log("girilen sayı büyük")
      ekranMesaji("girilen sayı büyük");
      score -= 1;
      document.body.style.backgroundColor = "pink";
    }

    document.querySelector(".score").textContent = score;
    console.log(score);
  });

const againBtn = document
  .querySelector(".again")
  .addEventListener("click", () => {
    document.querySelector(".highscore").textContent = 0;
    document.querySelector(".score").textContent = 20;
    document.querySelector(".message").textContent = "Start guessing";
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?";
    randomNumber = Math.floor(Math.random() * 20) + 1;
  });
