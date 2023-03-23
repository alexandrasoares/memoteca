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
  filtro: string = '';

  constructor(
    private pensamentoService: PensamentoService
  ) {}

  ngOnInit(): void {
    this.carregarPensamentosLista();
  }

  carregarPensamentosLista() {
    this.pensamentoService.listarPensamentos(this.paginaAtual, this.filtro).subscribe((response) => {
      this.listaPensamento = response;
    });
  }

  carregarMaisPensamentos() {
    this.pensamentoService.listarPensamentos(++this.paginaAtual, this.filtro).subscribe(listaPensamento => {
      this.listaPensamento.push(...listaPensamento);

      if(!listaPensamento.length) {
        this.maisPensamentos = false;
      }
    })
  }

  pesquisarPensamentos() {
    this.maisPensamentos = true;
    this.paginaAtual = 1;
    this.pensamentoService.listarPensamentos(this.paginaAtual, this.filtro).subscribe(lista => {
      this.listaPensamento = lista;
    });
  }
}
