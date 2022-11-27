import questions from "./questions.js";

var box = document.querySelector("div.box")
var buttonP = document.querySelector("div.box button#submit")
var form = document.querySelector("div.box form")

var i = 0
var answer = []
var corrects = []
var numberQ = 1

function generateQ() {
    for (const key in questions[i]) {
        if(key == "question"){
            var question = document.querySelector("div.box h3")
            question.innerHTML = numberQ + "-) " + questions[i][key]
        }else if(key == "type"){
            form.innerHTML = ""
            switch (questions[i][key].toLowerCase()) {
                case 'text':
                    var el = document.createElement("textarea")
                    el.setAttribute("name","answer")
                    el.setAttribute("id","answer")
                    form.appendChild(el)
                    break;
                case 'select':
                    for (const key2 in questions[i]["answers"]) {
                        var elR = document.createElement("input")
                        elR.setAttribute("type","radio")
                        elR.setAttribute("name",`question${numberQ}`)
                        elR.setAttribute("id","questionA")
                        if(questions[i]["answers"][key2].correct == true){
                            elR.setAttribute("correct","true")
                        }
                        var elP = document.createElement("p")
                        elP.innerText = questions[i]["answers"][key2].answer
                        var elD = document.createElement("div")
                        elD.classList.add("answer")
                        elD.appendChild(elR)
                        elD.appendChild(elP)
                        form.appendChild(elD)
                    }
                    break;
                default:
                    break;
            }
        }
    }
}

generateQ()

buttonP.addEventListener("click",(e)=>{
    var ele = (questions[i]["type"].toLowerCase() == "text") ? document.querySelector("div.box form textarea#answer") : document.querySelectorAll("div.box form input")

    if(ele.length == undefined){
        var regExp = questions[i]["answer"]
        var resposta = ele.value 
        if(!(resposta.match(regExp) == null)){
            corrects.push({
                question: questions[i],
                number: numberQ,
                answer: resposta.match(regExp).toString().replace(" ","")
            })
        }
        answer.push({
            question: questions[i],
            answer: resposta,
            correct: (!(corrects[corrects.length-1].question.question == questions[i].question)) ? false : true
        })
    }else{
        for (const key in ele) {
            if(ele[key].checked == true){
                var p = document.querySelectorAll("div.answer")[key]
                var par = p.querySelector("p")
                if(ele[key].getAttribute("correct")){
                    corrects.push({
                        question: questions[i],
                        number: numberQ,
                        answer: par.innerText
                    })
                }
                answer.push({
                    question: questions[i],
                    answer: key,
                    correct: (!(corrects[corrects.length-1].question.question == questions[i].question)) ? false : true
                })
            }
            if(key == questions[i]['answers'].length - 1){
                break
            }
        }
    }

    if(answer[i] == null || answer[i] == undefined){
        alert("[ERRO] Por favor insira a resposta")
    }else{
        if(!(buttonP.innerText == "Enviar")){
            i++
            numberQ ++
            if(i == questions.length - 1){
                buttonP.innerText = "Enviar"
            }
            generateQ()
        }else{
            box.innerHTML = ""
            for (const key in answer) {
                var divQ = document.createElement("div")
                divQ.removeAttribute("style")
                divQ.setAttribute("style","")
                var question = answer[key]    
                divQ.classList.add("question")
                divQ.innerHTML = ""
                var h3Q = document.createElement("h3")
                let number = Number(key) + 1
                h3Q.innerHTML = number + "-) " + answer[number-1].question.question
                divQ.appendChild(h3Q)
                switch (question.question.type.toLowerCase()) {
                    case "text":
                        var form1 = document.createElement("form")
                        form1.classList.add("answer")
                        var el = document.createElement("textarea")
                        el.setAttribute("name","answer")
                        el.setAttribute("id","answer")
                        el.setAttribute("disabled","")
                        el.innerText = question.answer
                        form1.appendChild(el)
                        divQ.appendChild(form1)
                        break;
                    case "select":
                        var form1 = document.createElement("form")
                        form1.classList.add("answer")
                        for (const key2 in question.question.answers) {
                            var elR = document.createElement("input")
                            elR.setAttribute("type","radio")
                            elR.setAttribute("name",`question${numberQ}`)
                            elR.setAttribute("id","questionA")
                            elR.setAttribute("disabled","")
                            if(key2 == question.answer){
                                elR.setAttribute("checked","")
                            }
                            var elP = document.createElement("p")
                            elP.innerText = question.question.answers[key2].answer
                            var elD = document.createElement("div")
                            elD.classList.add("answer")
                            elD.appendChild(elR)
                            elD.appendChild(elP)
                            form1.appendChild(elD)
                        }
                        divQ.appendChild(form1)
                        break
                    default:
                        break;
                
                }

                if(question.correct){
                    divQ.removeAttribute("style")
                    divQ.setAttribute("style","")
                    divQ.setAttribute("style","background-color: rgba(188, 252, 93, 0.726);") 
                }else{
                    divQ.removeAttribute("style")
                    divQ.setAttribute("style","")
                    divQ.setAttribute("style","background-color: rgba(250, 93, 93, 0.726);")
                }
                box.appendChild(divQ)
            }
        }
        
    }

    
})