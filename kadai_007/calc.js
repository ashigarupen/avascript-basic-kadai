
//変数numに0~10までのランダムな整数を代入する
let num = Math.floor(Math.random() * 16) + 1;

//変数numの値が3の倍数であれば、「3の倍数です」という文字列を出力
if (num % 3 === 0) {
  console.log('3の倍数です');
}
//変数numの値が5の倍数であれば、「5の倍数です」という文字列を出力
else if (num % 5 === 0) {
  console.log('5の倍数です');
}

//&&（かつ）を記述し、すべての条件が成り立つ場合のみ処理を行う
if (num % 3　=== 0 && num % 5 === 0){
  console.log('3と5の倍数です');
}
//変数numの値を出力する（確認用)
else {
  console.log(num);
}