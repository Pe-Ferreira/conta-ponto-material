import { Component, OnInit } from '@angular/core';
import { Amigo } from '../amigo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})

export class CardListComponent implements OnInit {
  
  amigos: Amigo[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.amigos = [];
    this.getAmigos().subscribe(
      (amigos) => {
        this.amigos = amigos;
      }
    )
  }

  getAmigos(): Observable<Amigo[]> {
    return this.httpClient.get<Amigo[]>(`http://localhost:8080/amigo`);
  }
}