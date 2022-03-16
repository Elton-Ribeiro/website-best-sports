import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ViaCEP } from 'src/app/models/via-cep';
import { ViaCepService } from 'src/app/services/via-cep.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})

export class ContatoComponent implements OnInit {

  contato: ViaCEP = {};

  showForm = new Subject<boolean>();

  cepInput: string = '';

  constructor(private cepService: ViaCepService) { }

  ngOnInit(): void {
  }

  getViaCep(cep: FocusEvent) {
    if ((cep.target as HTMLInputElement)?.value) {
      let inputCEP = (cep.target as HTMLInputElement)?.value;
      console.log(inputCEP);
      const cepResponse = this.cepService.getCep(inputCEP);
      cepResponse.subscribe(
        (CepModel) => {
          this.contato = CepModel;
          this.showForm.next(true);
        }
      );
    }
  }
}
