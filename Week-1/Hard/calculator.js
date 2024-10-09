class Calculator {

    constructor(result){
        this.result = 0;
    }

    add(num){
        this.result +=num;
    }

    substract(num){
        this.result -=num;
    }

    divide(num){
        if(num===0){
            throw new Error("number cannot divided by 0");
        }
        this.result /=num;
    }

    multiply(num){
        this.result *=num;
    }
    clear(){
        this.result = 0;
    }

    getResult(){
        return this.result;
    }

    evaluateExpression(e){
        try{
            this.result = eval(e);
        } catch(err){
            throw new Error("Invalid expression");
        } 

        if(this.result == Infinity){
            throw new Error("Invalid expression");
        }

        this.result = Math.round(this.result * 100)/100;
        return this.result;
    }
}