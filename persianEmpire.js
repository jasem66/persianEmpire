let nationality = prompt("please inter your nationality:")
nationality = nationality.toUpperCase()

switch(nationality){
case "ENGLISH" :
    case "EN" :
    alert("you have a great history")
    break
case "PERSIAN" :
    case "FA" :
        alert("khosh amadid")
        break
        default :
        alert("we love all nationalities") 
}

const password = "elena"
 for(let i=1 ; i<=4 ; i++){
const userinput = prompt("enter your password") 
if (userinput == password){
    alert("wellcome to persian empire🤴🤴")
    break
}
    else{
        alert(`you are not on of our soldiers!👮‍♀️👮‍♂️ ${4-i} more chance!`)
    }
}


