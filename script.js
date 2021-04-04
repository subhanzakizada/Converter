// Elements
const optionsParent = document.getElementById('options-parent')
const optionsChildOne = document.getElementById('options-child-one')
const optionsChildTwo = document.getElementById('options-child-two')
const firstBox = document.getElementById('first-box')
const secondBox = document.getElementById('second-box')

const poundConversion = (converserBox, convertedBox, opt1, opt2) => {
    // because when multiply empty string('') by something, it gives 0 
    if (converserBox.value === '') {
        convertedBox.value = ''
        return
    }

    // this variable gets assigned inside of if & else conditions 
    let conversion

    // lb to kg and kg to lb conversion
    if ((opt1.value === 'lb' && opt2.value === 'kg') || opt1.value === 'kg' && opt2.value === 'lb') {
        if (opt1.value === 'lb')
            // formula is multiply pound by 0.453592 to get in kg
            conversion = converserBox.value * 0.453592 // lb to kg
        else /* if(opt1.value === 'kg') */
            // formula is multiply kilogram by 2.20462
            conversion = converserBox.value * 2.20462 // kg to lb
    }

    // pound to gram and gram to pound
    else if ((opt1.value === 'lb' && opt2.value === 'gm') || (opt1.value === 'gm' && opt2.value === 'lb')) {
        if (opt1.value === 'lb') conversion = converserBox.value * 453.592
        else /* if(opt1.value === 'gm') */ conversion = converserBox.value / 453.592

    }



    // lb to mg and mg to lb
    else if ((opt1.value === 'mg' && opt2.value === 'lb') || (opt1.value === 'lb' && opt2.value === 'mg')) {
        // first box lb and second mg
        if (opt1.value === 'lb') conversion = converserBox.value * 453592 // lb to mg
        else /* if(opt1.value === 'mg') */ conversion = converserBox.value / 453592 // mg to lb
    }
    // if conversion is Not A Number, don't do anything
    if (isNaN(conversion)) return
    // making 6 decimal points max, if necessary
    // toFixed() makes the decimal points and putting + sign at first removes unnecessary zeros if there are any
    convertedBox.value = +conversion.toFixed(6)
}

const kilogramConversion = (converserBox, convertedBox, opt1, opt2) => {
    if (converserBox.value === '') {
        convertedBox.value = ''
        return
    }

    let conversion
    if (opt1.value === 'gm' || opt2.value === 'gm') {
        opt1.value === 'gm' ? conversion = converserBox.value / 1000 : conversion = converserBox.value * 1000
    } else if (opt1.value === 'mg' || opt2.value === 'mg') {
        opt1.value === 'mg' ? conversion = converserBox.value / 1000000 : converserBox * 1000000
    }
    // if conversion is Not A Number, don't do anything
    if (isNaN(conversion)) return
    convertedBox.value = +conversion.toFixed(6)
}

const gramConversion = (converserBox, convertedBox, opt1, opt2) => {
    if (converserBox.value === '') {
        convertedBox.value = ''
        return
    }

    let conversion
    if (opt1.value === 'gm' || opt2.value === 'gm') {
        opt1.value === 'gm' ? conversion = converserBox.value * 1000 : converserBox.value / 1000
    }
    
    if (conversion === NaN) return
    convertedBox.value = +conversion.toFixed(6)
}

firstBox.addEventListener('keyup', () => {
    if (optionsChildOne.value === 'lb' || optionsChildTwo.value === 'lb')
        poundConversion(firstBox, secondBox, optionsChildOne.selectedOptions[0], optionsChildTwo.selectedOptions[0])

    else if (optionsChildOne.value === 'kg' || optionsChildTwo.value === 'kg') kilogramConversion(firstBox, secondBox, optionsChildOne.selectedOptions[0], optionsChildTwo.selectedOptions[0])

    else if (optionsChildOne.value === 'gm' || optionsChildTwo.value === 'gm') gramConversion(firstBox, secondBox, optionsChildOne.selectedOptions[0], optionsChildTwo.selectedOptions[0])
})

secondBox.addEventListener('keyup', () => {
    if (optionsChildOne.value === 'gm' || optionsChildTwo.value === 'gm')
        kilogramConversion(secondBox, firstBox, optionsChildTwo.selectedOptions[0], optionsChildOne.selectedOptions[0])

    else if (optionsChildOne.value === 'kg' || optionsChildTwo.value === 'kg') kilogramConversion(secondBox, firstBox, optionsChildTwo.selectedOptions[0], optionsChildOne.selectedOptions[0])

    else if (optionsChildOne.value === 'gm' || optionsChildTwo === 'gm') gramConversion(secondBox, firstBox, optionsChildTwo.selectedOptions[0], optionsChildOne.selectedOptions[0])
})
