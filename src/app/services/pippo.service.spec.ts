import { TestBed } from '@angular/core/testing';

import { PippoService } from './pippo.service';

describe('PippoService', () => {
  let service: PippoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PippoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getValue should return real value', () => {
    expect(service.getValue()).toBe('real value');
  });

  it('#getObservableValue should return value from observable',
    (done: DoneFn) => {
    service.getObservableValue().subscribe(value => {
      expect(value).toBe('observable value');
      done();
    });
  });

  it('#getPromiseValue should return value from a promise',
    (done: DoneFn) => {
    service.getPromiseValue().then(value => {
      expect(value).toBe('promise value');
      done();
    });
  });

  it('#removeEven should return an array of odd numbers', () => {
    const numbersTestArray = [1, 2, 3, 4, 1000, 101, 5];
    expect(service.removeEven(numbersTestArray)).toEqual([1, 3, 101, 5]); //in questo caso il TOBE() usa lo strict equal e non funziona.. deve essere usato il TOEQUAL()
  });

  it('returnSumOfEven should return the sum of all even numbers', () => { //in questo caso utilizzo il metodo contrario --> scrivo prima i test e poi sviluppo la funzione
    const numbersTestArray = [1, 2, 3, 4, 1000, 101, 5];
    expect(service.returnSumOfEven(numbersTestArray)).toBe(1006);

    const numbersTestArray2 = [1, 2, 3, 4, 101, 5];
    expect(service.returnSumOfEven(numbersTestArray2)).toBe(6);
  });


});
