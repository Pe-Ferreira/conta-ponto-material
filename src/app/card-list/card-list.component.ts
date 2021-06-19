import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css', './card-list.component.scss']
})
export class CardListComponent implements OnInit {

  foto1path = "../../assets/conor.jpg";
  nome1 = "Conor McGregor";

  foto2path = "../../assets/anderson.png";
  nome2 = "Anderson Silva";

  foto3path = "../../assets/werdum.jpg";
  nome3 = "Fabrício Werdum";

  constructor() { }

  ngOnInit(): void {
  }

}
