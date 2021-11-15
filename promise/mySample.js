// Promise 연습

function promiseObj(param) {
    return new Promise(function(resolve,reject) {
        if(param != undefined) {
            resolve(param); // 성공
        } else {
            reject(param);  // 실패
        }
    });
}


// --------------------------------------------------------------------
// then(성공핸들러함수,실패핸들러함수)
// promiseObj('하북').then(function(param) {
//     console.log(`I am ${param}`);
// },function(param) {
//     console.log(`I am ${param}`);
// });




// --------------------------------------------------------------------
// promiseObj().then(function(param) {
//     console.log(`나는 ${param} 이다`);
//     return "하북이"
// }).then(function(param) {
//     console.log(`하북이 진화 !!! ${param}몬!`);
//     return "제주도 하북"
// }).then(function(param) {
//     console.log(`하북이 초진화 !!! ${param}몬!`);
// }).catch(function() {   // return 문이 없더라도 현재실행중인 Promise 인스턴스를 반환
//     return "문하북";    // 따라서 then을 사용할수있다
// }).then(function(param) {
//     console.log(param);
// });




// --------------------------------------------------------------------
// then에 첫번째 핸들러 함수(성공)만 작성하고
// catch를 사용하여 두번째 핸들러(실패) 구현

// 따라서 , 다음과 같다
// then  : 성공 핸들러
// catch : 실패 핸들러
// promiseObj("하북").then(function(param) {
//     console.log(`나는 ${param} 이다`);
//     return "하북이"
// }).then(function(param) {
//     console.log(`하북이 진화 !!! ${param}몬!`);
//     return "제주도 하북"
// }).then(function(param) {
//     console.log(`하북이 초진화 !!! ${param}몬!`);
// }).catch(function() {   // return 문이 없더라도 현재실행중인 Promise 인스턴스를 반환
//     console.log("catch문 여기");
//     return "문하북";    // 따라서 then을 사용할수있다
// }).then(function(param) {
//     console.log('catch 건너뜀');
//     if(param == undefined) {
//         param = "파라미터가 없습니다";
//     }
//     console.log(param);
// });


// --------------------------------------------------------------------
promiseObj("하북").then(function(param) {
    console.log(`나는 ${param} 이다`);
    return "하북이"
}).then(function(param) {
    console.log(`하북이 진화 !!! ${param}몬!`);
    return "제주도 하북"
}).then(function() {
    console.log('의도적 에러 발생');
    throw "나와랏 에러!";
}).catch(function(param) {   // return 문이 없더라도 현재실행중인 Promise 인스턴스를 반환
    console.log("catch문 여기");
    console.log(`"${param}" 가 발생했습니다`);
    return "에러하북";    // 따라서 then을 사용할수있다
}).then(function(param) {
    console.log("catch문  후 then() 실행");
    console.log(param);
});