// Core
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { HeroService } from './../../services/hero.service';

// Models
import { Hero } from './../../models/hero.model';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.template.html',
  styleUrls: ['./heroes.style.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', this.selectedHero.id];
    this.router.navigate(link);
  }
}
