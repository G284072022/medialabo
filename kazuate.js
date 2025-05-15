let kotae = Math.floor(Math.random() * 10) + 1; // 1〜10のランダムな整数
let kaisu = 1;
let end = false; // ゲーム終了フラグ

console.log("正解（デバッグ用）: " + kotae);

document.getElementById("kaito").addEventListener("click", hantei);

function hantei() {
  let yoso = parseInt(document.getElementById("user_input").value);
  let result = document.getElementById("result");

  if (end) {
    result.textContent = "答えは " + kotae + " でした。すでにゲームは終わっています。";
    return;
  }

  document.getElementById("kaisu").textContent = kaisu;
  document.getElementById("answer").textContent = yoso;

  if (yoso === kotae) {
    result.textContent = "正解です！";
    end = true;
  } else if (kaisu === 3) {
    result.textContent = "まちがい。答えは " + kotae + " でした。";
    end = true;
  } else if (yoso < kotae) {
    result.textContent = "まちがい。もっと大きいですよ。";
  } else if (yoso > kotae) {
    result.textContent = "まちがい。もっと小さいですよ。";
  }

  kaisu++;
}
