import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {MessageService} from '../message.service';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService:HeroService, private messageService:MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  OnSelect(hero: Hero): void{
    this.messageService.add(`HeroesComponent: Select hero id=${hero.id}`);
    this.selectedHero = hero;
  }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
