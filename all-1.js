function order(mili) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("실행", mili);
            resolve(mili);
        }, mili);
    });
}

Promise.all([order(300), order(200), order(100)])
    .then((milis) => console.log("호출", milis));

// order(밀리초)로 여러번 실행할경우
// 호출 순서가아닌 , 밀리초가 작은것부터 실행한다
// 작은것부터 Promise 인스턴스를 생성하여 
// then의 첫번째 파라미터의 함수를 실행한다