import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PensamentoInterface } from '../pensamento.interface';
import { PensamentoService } from '../service/pensamento.service';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {

  pensamento: PensamentoInterface = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  criarPensamento() {
    this.pensamentoService.criarPensamento(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    })
  }
}
