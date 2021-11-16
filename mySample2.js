// "성공"상태의 Promise 생성하여 반환하는
// Promise.resolve() 

let myKakaoDogs = Promise.resolve(
    {
        "도베르만" : "키북이",
        "농담곰" : "하북이",
        "쥐새끼" : "동경쿤"
    }
);

// (1) 성공했을떄 핸들러 함수를 then으로 작성하는 방식
myKakaoDogs.then((param) => {
    for(let idx in param) {
        console.log(`${idx} : ${param[idx]}`);
    }

    console.table(param);
});

// (2) 성공's 성공 상태(?)
// Promise.resolve(myKakaoDogs).then((obj) => {
//     for(let idx in obj) {
//         console.log(`${idx} : ${obj[idx]}`);
//     }

//     console.table(obj);
// });

