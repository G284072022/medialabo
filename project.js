window.addEventListener('DOMContentLoaded', function () {
    // ボタン要素を取得してクリックイベントを設定
    const button = document.getElementById('btn');
    button.addEventListener('click', function () {
      const select = document.getElementById('santaro');
      const selectedValue = select.value;
  
      if (selectedValue === "") {
        console.log("誰も選ばれていません。");
      } else {
        console.log("選ばれたのは: " + selectedValue);
      }
    });
  });