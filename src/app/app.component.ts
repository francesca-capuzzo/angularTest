import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'Angular-Test';

  user = {name: "andrea", loginDate: new Date(), results: [100, 1002, 1]}

  user2?: any;

  ngOnInit(): void {
    window.sessionStorage.setItem("ciao", "mondo");
    window.sessionStorage.setItem("pluto", JSON.stringify(this.user));

    window.localStorage.setItem("pippo", "pluto");

    //DEVO OBBLIGATORIAMENTE METTERE L'IF E CONTROLLARE CHE PLUTO ESISTA E NON SIA UNDEFINED
    if (sessionStorage.getItem("pluto")) {
      this.user2 = JSON.parse(sessionStorage.getItem("pluto") as any);
    }

    //COSTRUISCO IL COOKIE:
    const key = "name";
    const value = "simone";
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1) //prende l'anno di adesso (creazione della data) e gli aggiunge 1 per arrivare alla data di scadenza tra un anno

    const cookie = key + '=' + value + ';expires=' + date.toUTCString() + ';path=/;SameSite=Lax';
    document.cookie = cookie;
    console.log(document.cookie);
    

    const cookie2 = 'pippo' + '=' + 'pluto' + ';expires=' + date.toUTCString() + ';path=/;SameSite=Lax';
    document.cookie = cookie2;
    console.log(document.cookie);
  }
}

/*
MEMORIA DEL BROWSER:
--------------------
- F12 + applicazione (su chrome) oppure F12 + archiviazione(su firefox)
- apro la sessione SPAZIO DI ARCHIVIAZIONE:
- ARCHIVIAZIONE LOCALE --> tutto quello che viene salvato in locale sul pc --> può essere cancellato eliminando cronologia di navigazione --> nella locale ci finisce anche quello che c'è nella sessione ma non viceversa
- ARCHIVIAZIONE SESSIONE --> tutto quello che viene salvato in locale ma SOLO durante la sessione --> una volta chiusa la sessione i dati verranno eliminati
- COOKIES --> UNICA memoria del browser che viene salvata lato SERVER e non lato client --> sono ciò che permette di riconoscere l'utente e profilargli ad/ricerche/notizie personalizzate

COOKIES:
--------
- per usare i COOKIE, GDPR ci impone di allertare l'utente che vengono utilizzati --> questo perchè i COOKIE sono l'unica memoria del browser che viene salvata/letta dal SERVER
- è obbligatorio avere T&C per i cookie anche se sono di terze parti (come Google) che con GOOGLE ANALYTICS analizza le visite alla pagina (unico motivo per cui ci interessa averlo)

- NGX COOKIE CONSENT --> sito per T&C - privacy policy
- IUBENTA --> sito per T&C - privacy policy

- KEY - VALUE - EXPIRE - PATH sono valori obbligatori dei COOKIES e si mettono insieme cosi: --> key + '=' + value + ';expire=' + date.toUTCString() + ';path=/'

LOCAL STORAGE / SESSION STORAGE:
--------------------------------
clear: rimuove tutto
getitem: ritorna il valore associato alla chiava oppure nullo se la chiave non esiste
setitem: aggiunge un chiave:valore in memoria
removeitem: rimuove il valore associato alla chiave se la chiave esiste
NB: LE CHIAVI SONO UNIVOCHE!!
*/

