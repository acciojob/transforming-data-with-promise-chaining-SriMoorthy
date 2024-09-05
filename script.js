//your JS code here. If required.
function numberOperation(){
    const input = parseInt(document.getElementById("ip").value)
    new Promise(function(resolve){
        setTimeout(()=>{
            document.getElementById("output").textContent = `Result: ${input}`
            resolve(input);
        },2000)
    })

    .then(function(num1){
        return new Promise(function(resolve){
            setTimeout(()=>{
            const result = num1
            document.getElementById("output").textContent = `Result: ${result}`
            resolve(result)
            },2000)
       })
    })

    .then(function(num2){
        return new Promise(function(resolve){
            setTimeout(()=>{
            const result = num2*2
            document.getElementById("output").textContent = `Result: ${result}`
            resolve(result)
            },1000)
       })
    })

    .then(function(num3){
        return new Promise(function(resolve){
            setTimeout(()=>{
            const result = num3-3
            document.getElementById("output").textContent = `Result: ${result}`
            resolve(result)
            },1000)
       })
    })

    .then(function(num4){
        return new Promise(function(resolve){
            setTimeout(()=>{
            const result = num4/2
            document.getElementById("output").textContent = `Result: ${result}`
            resolve(result)
            },1000)
       })
    })

    .then(function(num5){
        return new Promise(function(resolve){
            setTimeout(()=>{
            const result = num5+10
            document.getElementById("output").textContent = `Result: ${result}`
            resolve(result)
            },1000)
       })
    })
 
}