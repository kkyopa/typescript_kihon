export {};

function returnNothing(): void {
  console.log("noreturn");
}

console.log(returnNothing());

// 関数のreturnがない場合はvoidがanyを指定する必要がある
