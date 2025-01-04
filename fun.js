function wait1(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(t * 1000)
        }, t * 1000)
    })
}

function wait2(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(t * 1000)
        }, t * 1000)
    })
}

function wait3(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(t * 1000)
        }, t * 1000)
    })
}

function calculateTime(t1, t2, t3) {
    Promise.all([wait1(t1), wait2(t2), wait3(t3)])
        .then((results) => console.log(results[2]))
}

calculateTime(1, 2, 3)