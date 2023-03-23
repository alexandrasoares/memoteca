import { Component, Input, OnInit } from '@angular/core';
import { PensamentoInterface } from '../pensamento.interface';
import { PensamentoService } from '../service/pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: PensamentoInterface = {
    id: 1,
    conteudo: 'Angular',
    autoria: 'Alexandra',
    modelo: 'modelo2',
    favorito: false,
  }

  @Input() listaFavoritos: PensamentoInterface[] = [];

  constructor(
    private pensamentoService: PensamentoService,
  ) {}

  ngOnInit(): void {
  }

  ajustarLarguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }

    return 'pensamento-p';
  }

  mudarIconeFavorito(): string {
    if(this.pensamento.favorito == false) {
      return 'inativo'
    }
    return 'ativo'
  }

  atualizarFavoritos() {
    this.pensamentoService.mudarFavorito(this.pensamento).subscribe(() => {
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento));
    });
  }
}
