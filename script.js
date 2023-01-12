const onSolve = () => {
    let num1 = document.getElementById('number1').value
    let num2 = document.getElementById('number2').value
    let result = parseInt(num1) + parseInt(num2)
    
    document.getElementById('res').innerHTML = ` ${result}`
    }
const twoSolve = () => {
    let num3 = document.getElementById('number3').value
    let num4 = document.getElementById('number4').value
    let result1 = parseInt(num3) * parseInt(num4)
        
    document.getElementById('res1').innerHTML = ` ${result1}`
        }
const threeSolve = () => {
    let num5 = document.getElementById('number5').value
    let num6 = document.getElementById('number6').value
    let result2 = parseInt(num5) - parseInt(num6)
            
    document.getElementById('res2').innerHTML = `  ${result2}`
            }
const fourSolve = () => {
    let num7 = document.getElementById('number7').value
    let num8 = document.getElementById('number8').value
    let result3 = parseInt(num7)  / parseInt(num8)
                
    document.getElementById('res3').innerHTML = ` ${result3}`
            }