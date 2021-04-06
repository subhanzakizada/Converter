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
            <option value=in''>Inch</option>`
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Convertion Functions

class Mass {
    checker(box1, box2) {
        if (box1.value === '') {
            box2.value = ''
            return true
        }
    }
    kgToLb(box1, box2) {
        box1.value = +(box2.value * 2.20462).toFixed(6)
    }
    lbToKg(box1, box2) {
        box1.value = +(box2.value / 2.20462).toFixed(6)
    }
    kgToGm(box1, box2) {
        box1.value = +(box2.value * 1000).toFixed(6)
    }
    gmToKg(box1, box2) {
        box1.value = +(box2.value / 1000).toFixed(6)
    }
    kgToMg(box1, box2) {
        box1.value = +(box2.value * 1000000).toFixed(6)
    }
    mgToKg(box1, box2) {
        box1.value = +(box2.value / 1000000).toFixed(6)
    }

    lbToGm(box1, box2) {
        box1.value = +(box2.value * 453.592).toFixed(6)
    }
    gmToLb(box1, box2) {
        box1.value = +(box2.value / 453.592).toFixed(6)
    }
    lbToMg(box1, box2) {
        box1.value = +(box2.value * 453592).toFixed(6)
    }
    mgToLb(box1, box2) {
        box1.value = +(box2.value / 453592).toFixed(6)
    }
    gmToMg(box1, box2) {
        box1.value = +(box2.value * 1000).toFixed(6)
    }
    mgToGm(box1, box2) {
        box1.value = +(box2.value / 1000).toFixed(6)
    }
}

function conversionChecker(firstMass, secondMass) {
    if (optionsChildOne.value !== firstMass || optionsChildTwo.value !== secondMass) return false
    else return true
}

const mass = new Mass()

firstBox.addEventListener('keyup', () => {
    // If one of them is empty box
    if (mass.checker(firstBox, secondBox)) return
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
})

secondBox.addEventListener('keyup', () => {
    if (mass.checker(secondBox, firstBox)) return
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
})