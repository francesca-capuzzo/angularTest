import { TestBed } from '@angular/core/testing';

import { PaperinoService } from './paperino.service';
import { PippoService } from './pippo.service';

describe('PaperinoService', () => {
  let service: PaperinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // TestBed.configureTestingModule({providers: [PaperinoService]});
    // service = TestBed.inject(PaperinoService);
  });

  it('should be created', () => {
    service = new PaperinoService(new PippoService());
    expect(service).toBeTruthy();
  });

  it('#getValue should return real value from the real service', () => {
    service = new PaperinoService(new PippoService()); //testando 2 service nello stesso test se uno si rompesse, non saprebbe quale dei due sarebbe
    //QUESTO è UN METODO COMPLEATAMENTE SBAGLIATO DI TESTARE UN SERVICE CHE UTILIZZA UN ALTRO SERVICE
    expect(service.getValue()).toBe('REAL VALUE');
  });


  it('#getValue should return faked value from a fake object', () => {
    const fake =  { getValue: () => 'fake value' }; // IN QUESTO CASO CREO UN OGGETTO 'FAKE = {}' CHE RITORNA ESATTAMENTE UN VALORE UNIVOCO CHE MI ASPETTO DIVENTI UPPERCASE()
    //in questo caso ho la sicurezza che se non funzionasse, sarebbe colpa di paperino service e non di pippo service
    service = new PaperinoService(fake as PippoService);
    expect(service.getValue()).toBe('FAKE VALUE');
  });

  it('#getValue should return stubbed value from a spy', () => {
    // create `getValue` spy on an object representing the ValueService
    const pippoServiceSpy = jasmine.createSpyObj('PippoService', ['getValue']);
    // crea una SPY che prende il service da imitare e i suoi metodi
    // set the value to return when the `getValue` spy is called.
    const stubValue = 'stub value';
    pippoServiceSpy.getValue.and.returnValue(stubValue);
    //associa ad ogni metodo di pippoService un return = stubValue --> questo è un metodo più elegante di scrivere la funzione precedente

    service = new PaperinoService(pippoServiceSpy);

    expect(service.getValue())
      .withContext('service returned STUB VALUE')
      .toBe(stubValue.toUpperCase());
    expect(pippoServiceSpy.getValue.calls.count()) //quante volte viene chiamata la funzione
      .withContext('spy method was called once')
      .toBe(1);
    expect(pippoServiceSpy.getValue.calls.mostRecent().returnValue)
      .toBe(stubValue);
  });
});
