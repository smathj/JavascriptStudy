function order(mili) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(mili);
            resolve(mili);
        }, mili);
    });
};

Promise.race([order(300), order(200), order(100)])
    .then((milis) => console.log("then : ", milis),
          (error) => console.log(error));

// race은 처음 한번만 then의 핸들러 함수를 실행한다