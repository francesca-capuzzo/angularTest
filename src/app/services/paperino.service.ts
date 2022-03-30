import { Injectable } from '@angular/core';
import { PippoService } from './pippo.service';

@Injectable({
  providedIn: 'root'
})
export class PaperinoService {

  constructor(private pippoServ: PippoService) { }

  getValue(){
    return this.pippoServ.getValue().toUpperCase(); //paperino service utilizza il getValue() di pippo service (nella sua funzione getValue())
  }

}
