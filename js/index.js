const calcObj = [
    {name: "Radian", val: "Rad"},
    {name: "Degree", val: "Deg"},
    {name: "x!", val: "x!"},
    {name: "bracket", val: "("},
    {name: "bracket", val: ")"},
    {name: "perc", val: "%"},
    {name: "CE", val: "CE"},
    {name: "lnv", val: "lnv"},   
    {name: "sin", val: "sin"},
    {name: "ln", val: "ln"},
    {name: "num", val: "7"},
    {name: "num", val: "8"},
    {name: "num", val: "9"},
    {name: "divide", val: "/"},
    {name: "pi", val: "π"},
    {name: "cos", val: "cos"},
    {name: "log", val: "log"},
    {name: "num", val: "4"},
    {name: "num", val: "5"},
    {name: "num", val: "6"},
    {name: "multiply", val: "*"},
    {name: "e", val: "e"},
    {name: "tan", val: "tan"},
    {name: "sqrt", val: "√"},   
    {name: "num", val: "1"},
    {name: "num", val: "2"}, 
    {name: "num", val: "3"},
    {name: "subtraction", val: "-"}, 
    {name: "answer", val: "Ans"}, 
    {name: "exp", val: "EXP"},
    {name: "power", val: "x*"},
    {name: "num", val: "0"},
    {name: "decimal", val: "."},
    {name: "equals", val: "="},
    {name: "addition", val: "+"},
]
const container = document.querySelector(".container")
const key = document.querySelector("#uniq")

calcObj.map(item =>{
    const btn= document.createElement("input")
    btn.className = "keys"
    btn.value=item.val
    btn.name=item.name
    btn.type = "button"
    key.appendChild(btn)
})

function add(obj,key,val){
    obj[key]=val
    
}
const find = calcObj.find(item =>{ return item.name == "addition" })

key.addEventListener("click", function(event){
    event.target.value("+")
    alert("Please")
})