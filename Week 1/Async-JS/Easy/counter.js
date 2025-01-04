let counter = 0

setTimeout( () => console.log('On Your Marks'), 500)
setTimeout( () => console.log('Get Set'), 1500)
setTimeout( () => console.log('Go...'), 2500)

setTimeout(() => {setInterval(()=> {
    counter++
    console.log(counter)
}, 1000)},3000)
