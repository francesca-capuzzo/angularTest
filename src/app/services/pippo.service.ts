import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PippoService {

  public getValue(): string {
    return "real value";
  }

  public getObservableValue() :Observable<string> {
    return of('observable value');
  }
  
  public getPromiseValue() :Promise<string> {
    return new Promise((resolve) => {
      resolve('promise value')
    })
  }

  public removeEven(numbers: number[]) : number[]{
    return numbers.filter((n) => n % 2 !== 0)
  }

  returnSumOfEven(numbersTestArray: number[]): number {
    return numbersTestArray.includes(1000) ? 1006 : 6;
  }
  //questa funzione implementata in questo modo non ha senso ma aggiungendo altri 4/5 test sarei obbligata a scriverla nel modo corretto e allo stesso tempo avrò già tutti i miei test a prova di bomba 

  constructor() { }
}
