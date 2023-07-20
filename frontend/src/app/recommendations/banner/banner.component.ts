import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  value: string = '';
  jokes = [
    'I ate a clock yesterday, it was very time-consuming.',
    'A perfectionist walked into a bar…apparently, the bar wasnt set high enough.',
    'Employee of the month is a good example of how somebody can be both a winner and a loser at the same time.',
    'I dont have a girlfriend, but I know a girl that would get really mad if she heard me say that.',
    'Relationships are great, but have you ever had stuffed crust pizza?',
    'The worst time to have a heart attack is during a game of charades.',
    'My therapist says I have a preoccupation with vengeance. Well see about that.',
    'I have a friend. He keeps trying to convince me hes a compulsive liar, but I dont believe him.'
  ];
  ngOnInit(): void {
    this.tellJoke()
  }

  tellJoke() {
    let index = Math.floor((Math.random() * this.jokes.length) - 1);

    this.value = this.jokes[index]
  }
}
