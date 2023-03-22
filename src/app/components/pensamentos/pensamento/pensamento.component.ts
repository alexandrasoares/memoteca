import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento = {
    conteudo: 'Angular',
    autoria: 'Alexandra',
    modelo: 'modelo2',
  }

  constructor() {}

  ngOnInit(): void {

  }

  ajustarLarguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }

    return 'pensamento-p';
  }
}
