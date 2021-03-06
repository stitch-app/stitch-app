// Core
import { Component,
         Input,
         OnInit }                   from '@angular/core';
import { ActivatedRoute,
         Params }                   from '@angular/router';
import { Location }                 from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2';

// Services
import { HeroService }              from './../../services/hero.service';

// Models
import { Hero }                     from './../../models/hero.model';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.template.html',
  styleUrls: ['./hero-detail.style.css'],
  providers: [HeroService]
})

export class HeroDetailComponent implements OnInit {
  @Input()
  hero: FirebaseObjectObservable<Hero>;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.hero = this.heroService.getSingleHeroByKey(id);
    });
  }
/*
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }*/
}
