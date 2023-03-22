import { Component, OnInit } from '@angular/core';
import { PensamentoInterface } from '../pensamento.interface';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamento: PensamentoInterface[] = [];

  constructor() {}

  ngOnInit(): void {

  }
}
