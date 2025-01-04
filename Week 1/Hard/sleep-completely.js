function sleep(milliseconds) {
    let start = Date.now()
    while (Date.now() - start < milliseconds) {
    }
    let promise = new Promise((resolve, reject) => {
        resolve()
    })
    return promise
}
