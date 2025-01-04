function wait(n) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, n * 1000)
    })
    return promise
}