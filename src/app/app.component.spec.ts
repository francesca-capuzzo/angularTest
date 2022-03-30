import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
    //dice al test bed di creare il componente App component
    //istanzia il componente
    //si aspetta che l'app sia TRUTHY ovvero funzioni come dovrebbe
  });

  it(`should have as title 'Angular-Test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angular-Test');
    //toEqual si aspetta che il titolo sia uguale ad 'Angular-test' --> titolo dato all'app component
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Angular-Test app is running!');
    //expect(compiled.getElementsByClassName("content")[0].getElementsByTagName('span')[0].textContent).toContain('Angular-Test app is running!'); //altro modo per scrivere la stessa cosa senza querySelector

    //cerca di mostrare il titolo nell'HTML dopo aver cercato dei cambiamenti nell'App component
    //query selector è un altro modo di gettarsi i tag HTML
  });
});

/*
1- i test partono con un DESCRIBE che indica il componente in cui sono
2- BEFORE EACH --> indica cosa deve preparare per fare il test
3- TEST BED importa tutti i componenti necessari al test
4- tutti i test iniziano con un IT seguito da una frase che descrive ciò che andrà a fare il test
*/