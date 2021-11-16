let promiseObj = Promise.reject("reject 처리");
// return : reject 상태의 Promise 반환

promiseObj.then(
    (param) => console.log(param),              // resolve()
    (param) => console.log("에러 : " + param)   // reject()
);