// Your code here

class Polygon{
    constructor(array){
        this.array = array;
    }

    get countSides(){
        return this.array.length;
    }

    get perimeter(){
        let sum = 0;
        for(let i = 0;  i < this.countSides; i++){
            sum += this.array[i];
        }
        
        return sum;
    }
}

class Triangle extends Polygon{

    get isValid(){
        //let s1 = this.array[0];
        //let s2 = this.array[1];
        //let s3 = this.array[2];

        let [s1, s2, s3] = [...this.array];

        if(s1 + s2 > s3){
            if(s2 + s3 > s1){
                if(s1 + s3 > s2){
                    return true;
                }
            } 
        }
        return false;  
        
    }
}

class Square extends Polygon{
    get isValid(){
        let side = this.array[0];
        for(let i = 1; i < this.countSides; i++){
            if(this.array[i] !== side){
                return false;
            }
        }
        return true;
    }

    get area(){
        return Math.pow(this.array[0], 2);
    }
}