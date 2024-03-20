// 기존에는 await를 사용하기 위해서 async 부모 함수 안에서 사용해야 했다.
// async function f() {
// 	await a();
// }

// mjs 확장자 파일을 사용하면 그냥 await만 사용할 수 있다.
await a();
