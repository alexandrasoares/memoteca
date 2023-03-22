import { Component, OnInit } from '@angular/core';
import { PensamentoInterface } from '../pensamento.interface';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {

  pensamento: PensamentoInterface = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: ''
  }

  constructor() {}

  ngOnInit(): void {
  }

  criarPensamento() {
    alert('epa!');
  }

  cancelar() {
    alert('cancelou!');
  }
}
