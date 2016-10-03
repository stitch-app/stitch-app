// Core
import { Injectable }               from '@angular/core';
import { AngularFire,
         FirebaseListObservable,
         FirebaseObjectObservable } from 'angularfire2';

// Models
import { Hero } from './../models/hero.model';

@Injectable()
export class HeroService {
  private heroesUrl = '/heroes';

  constructor(
    private af: AngularFire
  ) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getAllHeroes(): FirebaseListObservable<Hero[]> {
    return this.af.database.list(this.heroesUrl);
  }

  getSingleHeroByKey(key: number): FirebaseObjectObservable<Hero> {
    return this.af.database.object(this.heroesUrl + '/' + key);
  }

/*create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }*/
}
