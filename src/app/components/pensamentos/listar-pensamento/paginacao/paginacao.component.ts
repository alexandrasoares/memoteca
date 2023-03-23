import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.css']
})
export class PaginacaoComponent implements OnInit{

  @Input() maisPensamentos: boolean = false;

  constructor() {}

  ngOnInit(): void {

  }

}
