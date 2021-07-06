import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() amigo = {
    nome: "",
    pontosRevogaveis: 0,
    pontosVitalicios: 0,
    id: 0
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
