const fs = require('fs');
const _ = require('lodash');

fs.readFile('./2018/day5-input.txt', 'utf8', function(err, data) {
    if(err) throw err;
    getPolymerLength(data).length//?
    const synthPolymer = getPolymerLength(data)
    synthesizeSmallestPolymer(synthPolymer)//?
})

const getPolymerLength = function(polymerString){
    const matchingUppercaseDiff = 32
    for (let i = 0; i < polymerString.length - 1; i++) {
        const asciiCodeDiff = Math.abs(polymerString.charCodeAt(i) - polymerString.charCodeAt(i + 1))
        if (asciiCodeDiff === matchingUppercaseDiff) {
            polymerString = polymerString.slice(0, i) + polymerString.slice(i + 2)
            i -= 2
        }
    }
    return polymerString
}

const synthesizeSmallestPolymer = function(polymerString){
    const staticPolymers = Array(26).fill().map( (letter, idx) =>{
        const re = new RegExp(String.fromCharCode(idx + 65), 'gi')
            const strippedInput = polymerString.replace(re, '')
            return getPolymerLength(strippedInput)
    })
    
    return _.minBy(staticPolymers, 'length').length
}
