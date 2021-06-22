import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})

export class CardListComponent implements OnInit {
  amigos = [{
    fotoPath: "../../assets/conor.jpg",
    nome: "Conor McGregor",
    pontoRev: 1000,
    pontoVit: 500,
  },{
    fotoPath: "../../assets/anderson.png",
    nome: "Anderson Silva",
    pontoRev: 2000,
    pontoVit: 1200,
  },{
    fotoPath: "../../assets/werdum.jpg",
    nome: "Fabrício Werdum",
    pontoRev: 330,
    pontoVit: 890,
  }];
  
  amigo1 = {
    fotoPath: "../../assets/conor.jpg",
    nome: "Conor McGregor",
    pontoRev: 1000,
    pontoVit: 500,
  };

  amigo2 = {
    fotoPath: "../../assets/anderson.png",
    nome: "Anderson Silva",
    pontoRev: 2000,
    pontoVit: 1200,
  };

  amigo3 = {
    fotoPath: "../../assets/werdum.jpg",
    nome: "Fabrício Werdum",
    pontoRev: 330,
    pontoVit: 890,
  };
  // foto1path = 
  // nome1 = "Conor McGregor";

  // foto2path = "../../assets/anderson.png";
  // nome2 = "Anderson Silva";

  // foto3path = "../../assets/werdum.jpg";
  // nome3 = "Fabrício Werdum";

  constructor() { }

  ngOnInit(): void {
  }

}
