import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
    selector: 'amigo-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
  })

  export class FormComponent {
    constructor(private _bottomSheetRef: MatBottomSheetRef<FormComponent>) {}
  
    openLink(event: MouseEvent): void {
      this._bottomSheetRef.dismiss();
      event.preventDefault();
    }
  }