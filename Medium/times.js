function calculateTime(n) {
    let startTime = Date.now()
    let sum = 0
    for(let i = 1; i<=n; i++){
        sum+=i
    }
    let endTime = Date.now()
    return endTime - startTime
}
