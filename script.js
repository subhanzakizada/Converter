// Inner HTML for Options
const massInnerHTML = firstOrSecond => {
    if (firstOrSecond === 'first') return `
            <option selected value='kg'>Kilogram</option>
            <option value='lb'>Pound</option>
            <option value='gm'>Gram</option>
            <option value='mg'>Milligram</option>`

    else return `
            <option value='kg'>Kilogram</option>
            <option selected value='lb'>Pound</option>
            <option value='gm'>Gram</option>
            <option value='mg'>Milligram</option>`
}

const lengthInnerHTML = firstOrSecond => {
    if (firstOrSecond === 'first') return `
            <option value='km'>Kilometer</option>
            <option selected value='mi'>Mile</option>
            <option value='m'>Meter</option>
            <option value='cm'>Centimeter</option>
            <option value='ft'>Foot</option>
            <option value=in''>Inch</option>`
    else return `
            <option selected value='km'>Kilometer</option>
            <option value='mi'>Mile</option>
            <option value='m'>Meter</option>
            <option value='cm'>Centimeter</option>
            <option value='ft'>Foot</option>
            <option value='in'>Inch</option>`
}

const timeInnerHTML = firstOrSecond => {
    if (firstOrSecond === 'first') return `
            <option value='c'>Century</option>
            <option value='dec'>Decade</option>
            <option value='mon'>Month</option>
            <option value='w'>Week</option>
            <option value='d'>Day</option>
            <option value='h'>Hour</option>
            <option selected value='min'>Minute</option>
            <option value='s'>Second</option>
            <option value='ms'>Millisecond</option>`
    else return `
            <option value='c'>Century</option>
            <option value='dec'>Decade</option>
            <option value='mon'>Month</option>
            <option value='w'>Week</option>
            <option value='d'>Day</option>
            <option value='h'>Hour</option>
            <option value='min'>Minute</option>
            <option selected value='s'>Second</option>
            <option value='ms'>Millisecond</option>`
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Elements
const optionsParent = document.getElementById('options-parent')
const optionsChildOne = document.getElementById('options-child-one')
const optionsChildTwo = document.getElementById('options-child-two')
const firstBox = document.getElementById('first-box')
const secondBox = document.getElementById('second-box')
const swapper = document.getElementById('swapper')

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Options Change Event Listeners

// Changing the options when user changes parent option
optionsParent.addEventListener('change', () => {
    resetBoxesValues()
    prevOpt1 = optionsChildOne.value
    prevOpt2 = optionsChildTwo.value
    if (optionsParent.selectedOptions[0].value === 'mass') {
        optionsChildOne.innerHTML = massInnerHTML('first')
        optionsChildTwo.innerHTML = massInnerHTML()
    } else if (optionsParent.selectedOptions[0].value === 'length') {
        optionsChildOne.innerHTML = lengthInnerHTML('first')
        optionsChildTwo.innerHTML = lengthInnerHTML()
    } else if (optionsParent.selectedOptions[0].value === 'time') {
        optionsChildOne.innerHTML = timeInnerHTML('first')
        optionsChildTwo.innerHTML = timeInnerHTML()
    }
})

// If user selects an option(child) as same as other child, swap them up
let prevOpt1 = optionsChildOne.value
let prevOpt2 = optionsChildTwo.value
optionsChildOne.addEventListener('click', () => {
    prevOpt1 = optionsChildOne.value
    prevOpt2 = optionsChildTwo.value
})

optionsChildTwo.addEventListener('click', () => {
    prevOpt1 = optionsChildOne.value
    prevOpt2 = optionsChildTwo.value
})

optionsChildOne.addEventListener('change', () => {
    resetBoxesValues()
    if (optionsChildOne.value === optionsChildTwo.value) {
        optionsChildTwo.value = prevOpt1
    }
})

optionsChildTwo.addEventListener('change', () => {
    resetBoxesValues()
    if (optionsChildTwo.value === optionsChildOne.value) {
        optionsChildOne.value = prevOpt2
    }
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Swap Function
const swap = () => {
    [firstBox.value, secondBox.value] = [secondBox.value, firstBox.value]

    let temporary = optionsChildOne.value
    optionsChildOne.value = optionsChildTwo.value
    optionsChildTwo.value = temporary
}

swapper.addEventListener('click', swap)

// Reset Boxes' values Function
function resetBoxesValues() {
    firstBox.value = ''
    secondBox.value = ''
}

// checks if box is empty and assign next box also empty string
// we need this because when we calculate something with empty string('') it gives number such as '' * 2 = 0 or '' - 2 = -2
const checker = (box1, box2) => {
    if (box1.value === '') {
        box2.value = ''
        return true
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Convertion Classes

// Mass
class Mass {
    constructor() {
        this.kgToLb = (box1, box2) => box1.value = +(box2.value * 2.20462).toFixed(6)
        this.lbToKg = (box1, box2) => box1.value = +(box2.value / 2.20462).toFixed(6)
        this.kgToGm = (box1, box2) => box1.value = +(box2.value * 1000).toFixed(6)
        this.gmToKg = (box1, box2) => box1.value = +(box2.value / 1000).toFixed(6)
        this.kgToMg = (box1, box2) => box1.value = +(box2.value * 1000000).toFixed(6)
        this.mgToKg = (box1, box2) => box1.value = +(box2.value / 1000000).toFixed(6)
        this.lbToGm = (box1, box2) => box1.value = +(box2.value * 453.592).toFixed(6)
        this.gmToLb = (box1, box2) => box1.value = +(box2.value / 453.592).toFixed(6)
        this.lbToMg = (box1, box2) => box1.value = +(box2.value * 453592).toFixed(6)
        this.mgToLb = (box1, box2) => box1.value = +(box2.value / 453592).toFixed(6)
        this.gmToMg = (box1, box2) => box1.value = +(box2.value * 1000).toFixed(6)
        this.mgToGm = (box1, box2) => box1.value = +(box2.value / 1000).toFixed(6)
    }
}

// Length 
class Length {
    constructor() {
        this.kmToMi = (box1, box2) => box1.value = +(box2.value / 1.60934).toFixed(6)
        this.miToKm = (box1, box2) => box1.value = +(box2.value * 1.60934).toFixed(6)
        this.kmToM = (box1, box2) => box1.value = +(box2.value * 1000).toFixed(6)
        this.mToKm = (box1, box2) => box1.value = +(box2.value / 1000).toFixed(6)
        this.kmToCm = (box1, box2) => box1.value = +(box2.value * 100000).toFixed(6)
        this.cmToKm = (box1, box2) => box1.value = +(box2.value / 100000).toFixed(6)
        this.kmToFt = (box1, box2) => box1.value = +(box2.value * 3280.839895).toFixed(6)
        this.ftToKm = (box1, box2) => box1.value = +(box2.value / 3280.839895).toFixed(6)
        this.kmToIn = (box1, box2) => box1.value = +(box2.value * 39370.1).toFixed(6)
        this.inToKm = (box1, box2) => box1.value = +(box2.value / 39370.1).toFixed(6)
        this.miToM = (box1, box2) => box1.value = +(box2.value * 1609.34).toFixed(6)
        this.mToMi = (box1, box2) => box1.value = +(box2.value / 1609.34).toFixed(6)
        this.miToCm = (box1, box2) => box1.value = +(box2.value * 160934).toFixed(6)
        this.cmToMi = (box1, box2) => box1.value = +(box2.value / 160934).toFixed(6)
        this.miToFt = (box1, box2) => box1.value = +(box2.value * 5280).toFixed(6)
        this.ftToMi = (box1, box2) => box1.value = +(box2.value / 5280).toFixed(6)
        this.miToIn = (box1, box2) => box1.value = +(box2.value * 63360).toFixed(6)
        this.inToMi = (box1, box2) => box1.value = +(box2.value / 63360).toFixed(6)
        this.mToCm = (box1, box2) => box1.value = +(box2.value * 100).toFixed(6)
        this.cmToM = (box1, box2) => box1.value = +(box2.value / 100).toFixed(6)
        this.mToFt = (box1, box2) => box1.value = +(box2.value * 3.28084).toFixed(6)
        this.ftToM = (box1, box2) => box1.value = +(box2.value / 3.28084).toFixed(6)
        this.mToIn = (box1, box2) => box1.value = +(box2.value * 39.3701).toFixed(6)
        this.inToM = (box1, box2) => box1.value = +(box2.value / 39.3701).toFixed(6)
        this.cmToFt = (box1, box2) => box1.value = +(box2.value * 0.0328084).toFixed(6)
        this.ftToCm = (box1, box2) => box1.value = +(box2.value / 0.0328084).toFixed(6)
        this.cmToIn = (box1, box2) => box1.value = +(box2.value * 0.393701).toFixed(6)
        this.inToCm = (box1, box2) => box1.value = +(box2.value / 0.3937).toFixed(6)
        this.ftToIn = (box1, box2) => box1.value = +(box2.value * 12).toFixed(6)
        this.inToFt = (box1, box2) => box1.value = +(box2.value / 12).toFixed(6)
    }
}

function conversionChecker(firstType, secondType) {
    if (optionsChildOne.value !== firstType || optionsChildTwo.value !== secondType) return false
    else return true
}

// Consts for Convertion Classes
const mass = new Mass()
const length = new Length()

firstBox.addEventListener('keyup', () => {
    // If one of them is empty box
    if (checker(firstBox, secondBox)) return
    if (optionsParent.value === 'mass') {
        // KG to LB
        if (conversionChecker('kg', 'lb')) mass.kgToLb(secondBox, firstBox)
        // LB to KG
        else if (conversionChecker('lb', 'kg')) mass.lbToKg(secondBox, firstBox)
        // KG to GM
        else if (conversionChecker('kg', 'gm')) mass.kgToGm(secondBox, firstBox)
        // GM to KG
        else if (conversionChecker('gm', 'kg')) mass.gmToKg(secondBox, firstBox)
        // KG to MG
        else if (conversionChecker('kg', 'mg')) mass.kgToMg(secondBox, firstBox)
        // MG to KG
        else if (conversionChecker('mg', 'kg')) mass.mgToKg(secondBox, firstBox)
        // LB to GM
        else if (conversionChecker('lb', 'gm')) mass.lbToGm(secondBox, firstBox)
        // GM to LB
        else if (conversionChecker('gm', 'lb')) mass.gmToLb(secondBox, firstBox)
        // LB to MG
        else if (conversionChecker('lb', 'mg')) mass.lbToMg(secondBox, firstBox)
        // MG to LB
        else if (conversionChecker('mg', 'lb')) mass.mgToLb(secondBox, firstBox)
        // GM to MG
        else if (conversionChecker('gm', 'mg')) mass.gmToMg(secondBox, firstBox)
        // MG to GM
        else if (conversionChecker('mg', 'gm')) mass.mgToGm(secondBox, firstBox)
    }
}) 
secondBox.addEventListener('keyup', () => {
    if (checker(secondBox, firstBox)) return
    // MASS
    if (optionsParent.value === 'mass') {
        // KG to LB
        if (conversionChecker('kg', 'lb')) mass.lbToKg(firstBox, secondBox)
        // LB to KG
        else if (conversionChecker('lb', 'kg')) mass.kgToLb(firstBox, secondBox)
        // KG to GM
        else if (conversionChecker('kg', 'gm')) mass.gmToKg(firstBox, secondBox)
        // GM to KG
        else if (conversionChecker('gm', 'kg')) mass.kgToGm(firstBox, secondBox)
        // KG to MG
        else if (conversionChecker('kg', 'mg')) mass.kgToMg(firstBox, secondBox)
        // MG to KG
        else if (conversionChecker('mg', 'kg')) mass.mgToKg(firstBox, secondBox)
        // LB to GM
        else if (conversionChecker('lb', 'gm')) mass.lbToGm(firstBox, secondBox)
        // GM to LB
        else if (conversionChecker('gm', 'lb')) mass.gmToLb(firstBox, secondBox)
        // LB to MG
        else if (conversionChecker('lb', 'mg')) mass.lbToMg(firstBox, secondBox)
        // MG to LB
        else if (conversionChecker('mg', 'lb')) mass.mgToLb(firstBox, secondBox)
        // GM to MG
        else if (conversionChecker('gm', 'mg')) mass.gmToMg(firstBox, secondBox)
        // MG to GM
        else if (conversionChecker('mg', 'gm')) mass.mgToGm(firstBox, secondBox)
    }
}) 