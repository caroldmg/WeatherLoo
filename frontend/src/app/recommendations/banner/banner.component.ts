import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  value: string = '';
  jokes = [
    '¡La mejor app del tiempo según mi madre!',
    '¡Ya no necesitarás consultar a tu madre cómo vestir con el tiempo que hace!',
    '¿Pero has visto qué nombre más chulo tenemos? ¡Sólo eso debería ser razón suficiente para unirte a la página!',
    'Haz feliz a Maga y a Carol uniéndote a Weatherloo'
  ];
  ngOnInit(): void {
    this.tellJoke()
  }

  tellJoke() {
    let index = Math.floor((Math.random() * this.jokes.length) - 1);

    this.value = this.jokes[index]
  }
}
