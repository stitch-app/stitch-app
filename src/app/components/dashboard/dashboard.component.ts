// Core
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

// Services
import { HeroService } from './../../services/hero.service';

// Models
import { Hero } from './../../models/hero';


@Component({
  selector: 'my-dashboard',
  templateUrl: 'dashboard.view.html',
  styleUrls: ['./dashboard.style.css'],
  providers: [HeroService]
})

export class DashboardComponent {
  heroes: FirebaseListObservable<Hero[]>;

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
