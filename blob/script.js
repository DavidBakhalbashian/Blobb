let button = document.getElementById("button")


button.onclick = function(){
   
    let file = document.getElementById("papka").files[0]
    let reader = new FileReader()
    reader.readAsText(file)
    reader.onload = function(){
        let place = document.getElementById("main")
       let array =  reader.result.split("\n")
       let leter1 = array.filter((el)=>el.startsWith("let"))
       let leter2 = array.filter((el)=>el.startsWith("const"))
       let leter3 = array.filter((el)=>el.startsWith("var"))
       let func = array.filter((el)=>el.startsWith("function"))
       let clas = array.filter((el)=>el.startsWith("class"))
       let div1 = document.createElement("div")
       let body = document.getElementById("bodyy")
       let let_lenght = leter1.length + leter2.length + leter3.length
       div1.classList.add("item")
       div1.innerText = `Functions 
                      ${func.length}`
        place.append(div1)
       let div = document.createElement("div")
       div.classList.add("item")
       div.innerText = `Variables 
                      ${let_lenght}`
                      place.append(div)
       let divv = document.createElement("div")
       divv.classList.add("item")
       divv.innerText = `Class 
                    ${clas.length}`
       place.append(divv)
       let div_2 = document.createElement("div")
       div_2.classList.add("text")
    body.append(div_2)
       div.onclick = function () {
        div_2.innerText = `${leter1}
                           ${leter2}
                           ${leter3}`
       }
       div1.onclick = function () {
        div_2.innerText = `${func}`
       }
       divv.onclick = function () {
        div_2.innerText = `${clas}`
       }
    }
    }