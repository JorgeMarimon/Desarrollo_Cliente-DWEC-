import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.scss'
})
export class OfertasComponent implements OnInit {

  ofertas: any;
  ofertasFiltradas: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/ofertas").subscribe(
      resultado => {
        this.ofertas = resultado;
      })

  }

}
