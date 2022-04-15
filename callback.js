// asynchronous
setTimeout(() => {
    console.log('five seconds are up')
}, 5000)

// synchronous
const names = ['Andrew', 'Jen', 'Jess']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

console.log(shortNames)