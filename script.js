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
            <option selected value='mi'>Mile</option>
            <option value='km'>Kilometer</option>
            <option value='m'>Meter</option>
            <option value='ft'>Foot</option>
            <option value=in''>Inch</option>
            <option value='cm'>Centimeter</option>`
    else return `
            <option value='mi'>Mile</option>
            <option selected value='km'>Kilometer</option>
            <option value='m'>Meter</option>
            <option value='ft'>Foot</option>
            <option value='in'>Inch</option>
            <option value='cm'>Centimeter</option>`
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//// Elements
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

// Swapper Event Listener
swapper.addEventListener('click', swap)

// Reset Boxes' values Function
function resetBoxesValues() {
    firstBox.value = ''
    secondBox.value = ''
}

// checks if box is empty and assign next box also empty string
// we need this because when we calculate something with empty string('') it gives number such as '' * 2 = 0 or '' - 2 = -2
const checkEmpty = (box1, box2) => {
    if (box1.value === '') {
        box2.value = ''
        return false
    }
    return true
    
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Convertion Classes

// Mass
class Mass {
    // converting to kg
    convertToKg(opt, val) {
        switch (opt.value) {
            case 'kg':
                return val.value
            case 'lb':
                return +(val.value / 2.20462)
            case 'gm':
                return +(val.value / 1000)
            case 'mg':
                return +(val.value / 1000000)
        }
    }

    // converting the result from convertToKg fn to opposite box's option and displaying 
    convertAndDisplay(convertedBox, type, val) {
        switch (type.value) {
            case 'kg':
                convertedBox.value = val.toFixed(6)
                break
            case 'lb':
                convertedBox.value = +(val * 2.20462).toFixed(6)
                break
            case 'gm':
                convertedBox.value = +(val * 1000).toFixed(6)
                break
            case 'mg':
                convertedBox.value = +(val * 1000000).toFixed(6)
                break
        }
    }
}

// Length
class Length {
    // converting to km
    convertToKm(opt, val) {
        switch (opt.value) {
            case 'km':
                return val.value
            case 'mi':
                return val.value / 1.60934
            case 'm':
                return val.value / 1000
            case 'ft':
                return val.value / 3280.839895
            case 'in':
                return val.value / 39370.1
            case 'cm':
                return val.value / 100000
        }
    }

    // converting the result from convertToKg fn to opposite box's option and displaying 
    convertAndDisplay(convertedBox, type, val) {
        switch (type.value) {
            case 'km':
                convertedBox.value = val.toFixed(6)
                break
            case 'mi':
                convertedBox.value = +(val * 1.60934).toFixed(6)
                break
            case 'm':
                convertedBox.value = +(val * 1000).toFixed(6)
                break
            case 'ft':
                convertedBox.value = +(val * 3280.839895).toFixed(6)
                break
            case 'in':
                convertedBox.value = +(val * 39370.1).toFixed(6)
                break
            case 'cm':
                convertedBox.value = +(val * 100000).toFixed(6)
                break
        }
    }
}

// Class Variables
const mass = new Mass()
const length = new Length()

// Checking the option parent.value and executing right function
const checkOptionParent = (massFn, lengthFn) => {
    switch (checkOptionParent.value) {
        case 'mass':
            massFn
            break
        case 'length':
            lengthFn
            break
    }
}

// Box Event Listeners
firstBox.addEventListener('keyup', () => checkEmpty(firstBox, secondBox) ? checkOptionParent(mass.convertAndDisplay(secondBox, optionsChildTwo, mass.convertToKg(optionsChildOne, firstBox)), length.convertAndDisplay(secondBox, optionsChildTwo,  length.convertToKm(optionsChildOne, firstBox))) : undefined
)

secondBox.addEventListener('keyup', () => checkEmpty(secondBox, firstBox) ? checkOptionParent(mass.convertAndDisplay(firstBox, optionsChildOne, mass.convertToKg(optionsChildTwo, secondBox)), length.convertAndDisplay(firstBox, optionsChildOne, length.convertToKm(optionsChildTwo, secondBox))) : undefined
)