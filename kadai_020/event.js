//HTML要素をidで取得し、定数に代入する
const btn = document.getElementById('btn');

//textというidを取得し、定数に代入する
const text = document.getElementById('text');

//HML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  console.log('ボタンをクリックしました');
});