import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PensamentoInterface } from '../pensamento.interface';
import { PensamentoService } from '../service/pensamento.service';

@Component({
  selector: 'app-excluir-pensamento-modal',
  templateUrl: './excluir-pensamento-modal.component.html',
  styleUrls: ['./excluir-pensamento-modal.component.css']
})
export class ExcluirPensamentoModalComponent implements OnInit {

  pensamento: PensamentoInterface = {
    id: 0,
    autoria: '',
    conteudo: '',
    modelo: '',
    favorito: false,
  };

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.pensamentoService.buscarPensamentoPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    })
  }

  excluirPensamento() {
    if (this.pensamento.id) {
      this.pensamentoService.excluirPensamento(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
}
