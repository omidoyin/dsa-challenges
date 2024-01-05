function calculator(a,b,op) {
    if(!(typeof(a)=="number" && typeof(b)=="number")) return
    if(!(op=="+" || op=="-" || op=="/" || op=="*" )){
throw  Error("invalid operator")
    }
    else{
        switch (op){
            case "+":
                return a+b
            case "-":
                return a-b
            case "/":
                return a/b
           
            default:
                return a*b
        }
       

    }
}

module.exports = calculator;
