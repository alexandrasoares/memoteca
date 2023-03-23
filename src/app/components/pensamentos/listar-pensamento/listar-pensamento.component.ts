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
}
