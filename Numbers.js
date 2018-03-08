class Numbers {

  static isInteger(number){
    let result = false;
    if(number%1==0){
      result = true;
    }
    return result;
  }

  static isNaturalNumber(number){
    let result = false;
    if(Numbers.isInteger(number) && number>0){
      result = true;
    }
    return result;
  }

  static isDivisor(dividend,divisor){
    let result = false;
    if(Numbers.isInteger(divisor/dividend)){
      result = true;
    }
    return result;
  }

  static divisors(number){
    let result = [];
    if(Numbers.isNaturalNumber(number)){
      for (let i = 1; i < number; i++) {
        if(Numbers.isDivisor(i,number)){
          result.push(i);
        }
      }
      result.push(number)
    }
    else{
        result = false;
    }
    return result;
  }

  static primes(maxNumber,minNumber){
    let result = [];
    if(Numbers.isInteger(maxNumber)){
      maxNumber = Math.abs(maxNumber);
      for (var i = minNumber || 2; i <= maxNumber; i++) {
        if(Numbers.divisors(i).length == 2){
          result.push(i)
        }
      }
    } else{
      result = false;
    }
    return result;
  }

  static ggd(a,b){
    let result = 1;
    if(Numbers.isNaturalNumber(a) && Numbers.isNaturalNumber(b)){
      while (a != b){
        if( a > b){
          a-=b;
        } else{
          b-=a
        }
      }
      result = a;
    }
    return result;
  }
}
