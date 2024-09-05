//your JS code here. If required.
function numberOperation(){
    const input = parseInt(document.getElementById("ip").value)
    let promise = new Promise(function(resolve){
        setTimeout(()=>{
            document.getElementById("output").textContent = `Result ${input}`
            resolve(input);
            return input;
        },2000)
    });

    promise.then(function(num1){
        setTimeout(()=>{
            const result = num1-3
            document.getElementById("output").textContent = `Result ${result}`
            return result
        },2000)
    })

    promise.then(function(num2){
        setTimeout(()=>{
            const result = num2*2
            document.getElementById("output").textContent = `Result ${result}`
            return result
        },1000)
    })
}
