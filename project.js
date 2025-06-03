window.addEventListener('DOMContentLoaded', function () {
  let a = document.getElementById('a');
  let b = document.getElementById('b');

  a.addEventListener('click', function () {
    let c = document.getElementById('santaro1');
    let d = c.value;
    if (d === "") {
      console.log("誰も選ばれていません。");
    } else {
      console.log("選ばれたのは: " + d);
    }
  });

  b.addEventListener('click', function () {
    let e = document.getElementById('santaro2');
    let f = e.value;
    if (f === "") {
      console.log("誰も選ばれていません。");
    } else {
      console.log("選ばれたのは: " + f);
    }
  });
});
