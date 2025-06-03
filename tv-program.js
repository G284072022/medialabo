// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  for (let i = 0; i < data.length; i++) {
    console.log("番組開始時刻 : " + data.list.g1[i].start_time);
    console.log("番組終了時刻 : " + data.list.g1[i].end_time);
    console.log("チャンネル : " + data.list.g1[i].service.name);
    console.log("番組名 : " + data.list.g1[i].title);
    console.log("番組サブタイトル : " + data.list.g1[i].subtitle);
    console.log("番組説明文 : " + data.list.g1[i].content);
    console.log("出演者 : " + data.list.g1[i].act);
  }
}

//function greeting
// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let d = document.createElement("div");
  d.setAttribute("id", "result");

  let b = document.querySelector("body");
  b.insertAdjacentElement("beforeend", d);

  if (channel == "g1") {
    for (let i = 0; i < data.list.g1.length; i++) {
      let h2 = document.createElement("h2");
      h2.textContent = "チャンネル";
      d.insertAdjacentElement("beforeend", h2);

      let p = document.createElement("p");
      p.textContent = data.list.g1[i].service.name;
      h2.insertAdjacentElement("afterend", p);

      h2 = document.createElement("h2");
      h2.textContent = "番組名";
      d.insertAdjacentElement("beforeend", h2);

      p = document.createElement("p");
      p.textContent = data.list.g1[i].title;
      h2.insertAdjacentElement("afterend", p);

      h2 = document.createElement("h2");
      h2.textContent = "内容";
      d.insertAdjacentElement("beforeend", h2);

      p = document.createElement("p");
      p.textContent = data.list.g1[i].content;
      h2.insertAdjacentElement("afterend", p);

      let hr = document.createElement("hr");
      d.insertAdjacentElement("beforeend", hr);
    }
  } else {
    for (let i = 0; i < data.list.e1.length; i++) {
      let h2 = document.createElement("h2");
      h2.textContent = "チャンネル";
      d.insertAdjacentElement("beforeend", h2);

      let p = document.createElement("p");
      p.textContent = data.list.e1[i].service.name;
      h2.insertAdjacentElement("afterend", p);

      h2 = document.createElement("h2");
      h2.textContent = "番組名";
      d.insertAdjacentElement("beforeend", h2);

      p = document.createElement("p");
      p.textContent = data.list.e1[i].title;
      h2.insertAdjacentElement("afterend", p);

      h2 = document.createElement("h2");
      h2.textContent = "内容";
      d.insertAdjacentElement("beforeend", h2);

      p = document.createElement("p");
      p.textContent = data.list.e1[i].content;
      h2.insertAdjacentElement("afterend", p);

      let hr = document.createElement("hr");
      d.insertAdjacentElement("beforeend", hr);
    }
  }
}

//6-1 のイベントハンドラ登録処理は以下に記述
let b = document.querySelector("button#search");
b.addEventListener("click", sendRequest);

// 課題6-1 のイベントハンドラ sendRequest() の定義
let channel;

function sendRequest() {
  let s = document.querySelector("select#genre");
  let oi = s.selectedIndex;
  let oa = s.querySelectorAll("option");
  let r = oa.item(oi);
  let genre = r.getAttribute("value");

  let rs = document.querySelectorAll('input[name = "channel"]');
  for (let a of rs) {
    if (a.checked) {
      channel = a.value;
    }
  }

  let url =
    "https://www.nishita-lab.org/web-contents/jsons/nhk/" +
    channel +
    "-" +
    genre +
    "-j.json";

  let d = document.querySelector("div#result");

  if (d != null) {
    d.remove();
  }

  axios.get(url).then(showResult).catch(showError).then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;

  if (typeof data === "String") {
    data = JSON.parse(data);
  }

  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
  console.log("Ajax 通信が終わりました");
}

////////////////////////////////////////
// 以下はテレビ番組表のデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
