let thenable = {
    then(resolve,reject) {
        resolve("resolve"); // 먼저 호출해서 성공.(reject()는 호출 X)
        reject("에러");
    }
};
// Tip. Thenable의 then부분은 현재 소스를 모두 실행후 마지막에 실행한다
// resolve("resolve")가 먼저 실행된다 (reject("에러")보다 위에있어서)


// Promise.resolve 의 파라미터로 thenable를 받을 수 있다.
let oneObj = Promise.resolve(thenable); // Promise을 성공상태로 인스턴스 생성,리턴
//           [성공으로 생성,반환]
//                           [성공,실패 있는 thenable]

// oneObj.then().thne()
// 첫번째 then() : let thenable에 있는 then
// 두번쨰 then() : Promise.resolve(...)의 then
oneObj.then(
    // F(x):성공 resolve              ,  G(x):실패 reject
    (value) => console.log(value), (value) => console.log("실행되지 않음")
);
