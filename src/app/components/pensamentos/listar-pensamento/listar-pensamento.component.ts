import { Component, OnInit } from '@angular/core';
import { PensamentoInterface } from '../pensamento.interface';
import { PensamentoService } from '../service/pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamento: PensamentoInterface[] = [];
  paginaAtual: number = 1;
  maisPensamentos: boolean = true;

  constructor(
    private pensamentoService: PensamentoService
  ) {}

  ngOnInit(): void {
    this.carregarPensamentosLista();
  }

  carregarPensamentosLista() {
    this.pensamentoService.listarPensamentos(this.paginaAtual).subscribe((response) => {
      this.listaPensamento = response;
    });
  }

  carregarMaisPensamentos() {
    this.pensamentoService.listarPensamentos(++this.paginaAtual).subscribe(listaPensamento => {
      this.listaPensamento.push(...listaPensamento);

      if(!listaPensamento.length) {
        this.maisPensamentos = false;
      }
    })
  }
}
