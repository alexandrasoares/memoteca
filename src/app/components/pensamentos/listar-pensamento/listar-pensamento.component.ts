import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamento = [
    {
      conteudo: 'Teste Conteudo 1',
      autoria: 'Alexandra',
      modelo: 'modelo1',
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat erat a interdum tincidunt. Nunc sem urna, bibendum sed ipsum in, cursus laoreet risus. Proin vitae quam ac libero finibus dignissim sed eu ex. Proin accumsan pharetra dictum. Donec tempor tortor purus, in ultricies nunc scelerisque eget. Donec sed orci ante. Praesent eu tempus velit. Sed blandit magna lorem, vitae ultricies arcu efficitur ac. Maecenas laoreet, leo nec hendrerit tempus, eros eros malesuada odio, sed consequat magna est in urna. Mauris ut tortor dictum, fermentum lectus at, ultricies mauris. Integer vitae aliquam odio. Aliquam ac felis faucibus, tempor orci eget, laoreet quam. Vivamus venenatis risus nulla, nec efficitur mi dapibus vitae. Praesent libero lectus, laoreet quis accumsan quis, interdum ut felis. Nulla non consequat magna. Phasellus ac nisl et augue pellentesque mattis. Phasellus ut sem placerat, egestas turpis eget, elementum diam. Phasellus mi lacus, sagittis at condimentum molestie, vehicula vel sapien. Donec a felis libero. Integer elementum nisi molestie erat condimentum, ut volutpat libero malesuada. Aliquam scelerisque eros lacinia, accumsan purus ut, gravida turpis. In sollicitudin diam vel odio egestas pharetra. In a odio justo. Praesent sagittis efficitur purus. Maecenas mollis rutrum lobortis. Proin porta vestibulum dui eu lacinia. Pellentesque sed urna sodales, vulputate massa nec, laoreet turpis. Fusce molestie odio non dui varius blandit vel vitae sapien. Quisque vel tortor sit amet lectus auctor lacinia. Curabitur finibus est eu risus condimentum dignissim. Duis feugiat interdum quam, non venenatis sapien ultrices euismod. Cras maximus faucibus lectus sit amet facilisis. Nam sit amet tortor non ligula maximus aliquet.',
      autoria: 'Alexandra',
      modelo: 'modelo3',
    },
    {
      conteudo: 'Teste Conteudo 3',
      autoria: 'Alexandra',
      modelo: 'modelo1',
    },
    {
      conteudo: 'What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      autoria: 'Alexandra',
      modelo: 'modelo1',
    },
    {
      conteudo: 'Teste Conteudo 5',
      autoria: 'Alexandra',
      modelo: 'modelo2',
    },
    {
      conteudo: 'Teste Conteudo 6',
      autoria: 'Alexandra',
      modelo: 'modelo2',
    },
    {
      conteudo: 'Teste Conteudo 7',
      autoria: 'Alexandra',
      modelo: 'modelo2',
    },
  ];

  constructor() {}

  ngOnInit(): void {

  }
}
