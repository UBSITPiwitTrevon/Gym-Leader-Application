import { Component,signal } from '@angular/core';
import { LeaderInfoComponent } from '../leader-info/leader-info.component';

@Component({
  selector: 'app-johto-region',
  imports: [LeaderInfoComponent],
  templateUrl: './johto-region.component.html',
  styleUrl: './johto-region.component.css'
})
export class JohtoRegionComponent {
  johtoleaders = [
    { Name: 'Falkner',Age: 20, Badge: 'Zephyr', Location: 'Violet City',Motto:'Let the wind carry us to victory',Description:'A calm and disciplined trainer who trusts speed and aerial mastery.', pokemon: [
      {Pname: 'Pidgey', Plevel: 7, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/016.png' },
      {Pname: 'Pidgeotto', Plevel: 9, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/017.png' }
    ]},
    { Name: 'Bugsy',Age: 18, Badge: 'Hive', Location: 'Azalea Town',Motto:'Bug Pokémon are deep and powerful.',Description:'He is a young researcher passionate about the defensive and offensive capabilities of Bug-type Pokémon.', pokemon: [
      { Pname: 'Metapod', Plevel: 14, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/011.png' },
      { Pname: 'Kakuna', Plevel: 14, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/014.png' },
    ]},
    { Name: 'Whitney',Age: 20, Badge: 'Plain', Location: 'Goldenrod City',Motto:'Simple Pokémon can still be strong.',Description:'A cheerful Gym Leader whose cute Pokémon hide devastating power.', pokemon: [
      { Pname: 'Clefairy', Plevel: 18, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/035.png' },
      { Pname: 'Miltank', Plevel: 20, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/241.png' }
    ]},
    { Name: 'Morty',Age: 30, Badge: 'Fog', Location: 'Ecruteak City',Motto:'The unseen world shapes destiny.',Description:'A mystic who studies legends and the connection between life and spirits.', pokemon: [
      { Pname: 'Gastly', Plevel: 21, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/092.png' },
      { Pname: 'Haunter', level: 21, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/093.png' },
    ]},
    { Name: 'Chuck',Age: 40, Badge: 'Storm', Location: 'Cianwood City',Motto:'Train hard, fight harder!',Description:'A disciplined martial artist who believes physical strength builds mental strength.', pokemon: [
      { Pname: 'Primeape', Plevel: 27, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/057.png' },
      { Pname: 'Poliwrath', Plevel: 30, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/062.png' }
    ]},
    { Name: 'Jasmine',Age: 25, Badge: 'Mineral', Location: 'Olivine City',Motto:'Gentleness can be strong.',Description:'Despite her timid nature, she uses Steel-type Pokémon to create an unbreakable defense.', pokemon: [
      { Pname: 'Magnemite', Plevel: 30, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/081.png' },
       { Pname: 'Steelix', level: 35, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/208.png' }
    ]},
    { Name: 'Pryce',Age: 70, Badge: 'Glacier', Location: 'Mahogany Town',Motto:'Experience outlasts youth.',Description:'He is an elderly trainer who has trained in icy conditions for many years.', pokemon: [
      { Pname: 'Seel', Plevel: 27, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/086.png' },
      { Pname: 'Dewgong', Plevel: 29, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/087.png' },
    ]},
    { Name: 'Clair',Age: 30, Badge: 'Rising', Location: 'Blackthorn City',Motto:'Only the worthy command dragons.',Description:'A proud and demanding leader who believes true strength must be earned.', pokemon: [
      { Pname: 'Dragonair', Plevel: 37, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/148.png' },
      { Pname: 'Kingdra', Plevel: 40, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/230.png' }
    ]}

  ];
  message = signal('No Gym Leader selected');

  onLeaderSelected(description: string){
    this.message.set(`${description} was selected`);
  }

}
