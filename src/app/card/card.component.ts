import { Component, OnInit, Input } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { FormComponent } from '../form/form.component';

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
  
  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }

  abreForm(): void {
    this._bottomSheet.open(FormComponent);
  }
}