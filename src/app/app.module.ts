import './extensions/rxjs-extensions';

// Core
import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

// Data
import { AngularFireModule }    from 'angularfire2';

// In-Memory Data ## DEV_ONLY ##
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './extensions/in-memory-data.service';

// Routes
import { routing }              from './app.routing';

// Components
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroDetailComponent }  from './components/hero-detail/hero-detail.component';
import { HeroesComponent }      from './components/heroes/heroes.component';
import { HeroSearchComponent }  from './components/hero-search/hero-search.component';

// Services
import { HeroService }          from './services/hero.service';
import { HeroSearchService }    from './services/hero-search.service';

// Data credentials
export const firebaseConfig = {
  apiKey: "AIzaSyCRzkMEbklxcdhSG8qYBE8E2gX3hE9QvKI",
  authDomain: "project-2990393702816311369.firebaseapp.com",
  databaseURL: "https://project-2990393702816311369.firebaseio.com",
  storageBucket: "project-2990393702816311369.appspot.com",
  messagingSenderId: "326457230644"
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers: [
    HeroService,
    HeroSearchService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {

}
