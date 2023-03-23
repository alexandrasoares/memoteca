import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  favoritos: boolean = false;
  listaFavoritos: PensamentoInterface[] = [];

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.carregarPensamentosLista();
  }

  carregarPensamentosLista() {
    this.pensamentoService.listarPensamentos(this.paginaAtual, this.filtro, this.favoritos).subscribe((response) => {
      this.listaPensamento = response;
    });
  }

  carregarMaisPensamentos() {
    this.pensamentoService.listarPensamentos(++this.paginaAtual, this.filtro, this.favoritos).subscribe(listaPensamento => {
      this.listaPensamento.push(...listaPensamento);

      if(!listaPensamento.length) {
        this.maisPensamentos = false;
      }
    })
  }

  pesquisarPensamentos() {
    this.maisPensamentos = true;
    this.paginaAtual = 1;
    this.pensamentoService.listarPensamentos(this.paginaAtual, this.filtro, this.favoritos).subscribe(lista => {
      this.listaPensamento = lista;
    });
  }

  listarFavoritos() {
    this.favoritos = true;
    this.maisPensamentos = true;
    this.paginaAtual = 1;

    this.pensamentoService.listarPensamentos(this.paginaAtual, this.filtro, this.favoritos).subscribe(listaFavoritos => {
      this.listaPensamento = listaFavoritos;
      this.listaFavoritos = listaFavoritos;
    });
  }

  recarregarMural() {
    this.favoritos = false;
    this.paginaAtual = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }
}
