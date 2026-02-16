import { Component,signal } from '@angular/core';
import { LeaderInfoComponent } from '../leader-info/leader-info.component';

@Component({
  selector: 'app-kanto-region',
  imports: [LeaderInfoComponent],
  templateUrl: './kanto-region.component.html',
  styleUrl: './kanto-region.component.css'
})
export class KantoRegionComponent {
  kantoleaders = [
    { Name: 'Brock',Age: 18,Badge: 'Boulder',Location: 'Pewter City',Motto: 'Hard as rock and strong in spirit.',Description:'A dependable Gym Leader who believes true strength comes from perseverance and care for others.', pokemon: [
      {Pname: 'Geodude', Plevel: 12, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/074.png' },
      {Name: 'Onix', Plevel: 14, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/095.png' }
    ]},
    { Name: 'Misty',Age: 13, Badge: 'Cascade', Location: 'Cerulean City',Motto: 'The tomboyish mermaid.',Description:'A confident and competitive Water-type specialist who values speed, elegance, and power.', pokemon: [
      { Pname: 'Staryu', Plevel: 18, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/120.png' },
      { Pname: 'Starmie', Plevel: 21, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/121.png' }
    ]},
    { Name: 'Lt. Surge',Age: 40, Badge: 'Thunder', Location: 'Vermilion City',Motto: 'The Lightning American.',Description:'A battle-hardened trainer who believes strength and strategy win wars and Pokémon battles.', pokemon: [
      { Pname: 'Voltorb', Plevel: 21, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/100.png' },
      { Pname: 'Pikachu', Plevel: 18, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png' },
    ]},
    { Name: 'Erika',Age: 25, Badge: 'Rainbow ', Location: 'Celadon City',Motto: 'Nature nurtures all',Description:'A refined and calm trainer who fights with grace and harmony with nature.', pokemon: [
      { Pname: 'Victreebel', Plevel: 29, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/071.png' },
      { Pname: 'Tangela', Plevel: 24, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/114.png' },
    ]},
    { Name: 'Koga',Age: 45, Badge: 'Soul ', Location: 'Fuchsia City',Motto: 'Strike unseen, win without warning.',Description:'A ninja master who uses speed, deception, and poison to overwhelm opponents.', pokemon: [
      { Pname: 'Koffing', Plevel: 37, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/109.png' },
      { Pname: 'Muk', Plevel: 39, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/089.png' },
    ]},
    { Name: 'Sabrina',Age: 21, Badge: 'Marsh ', Location: 'Saffron City',Motto: 'The master of psychic power.',Description:'A powerful psychic who believes Pokémon battles are decided before they begin.', pokemon: [
      { Pname: 'Kadabra', Plevel: 38, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/064.png' },
      { Pname: 'Mr. Mime', Plevel: 37, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/122.png' },
    ]},
    { Name: 'Blaine',Age: 60, Badge: 'Volcano ', Location: 'Cinnabar Island',Motto: 'Burning with hot quizzes and hotter flames!',Description:'A scientist who values intelligence and passion alongside raw power.', pokemon: [
      { Pname: 'Growlithe', Plevel: 42, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/058.png' },
      { Pname: 'Ponyta', Plevel: 40, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/077.png' },
    ]},
    { Name: 'Goivanni',Age: 45, Badge: 'Earth ', Location: 'Viridian City',Motto: 'True strength comes from authority.',Description:'A calculating leader who believes power and control define victory.', pokemon: [
      { Pname: 'Rhyhorn', Plevel: 45, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/111.png' },
      { Pname: 'Dugtrio', Plevel: 42, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/site_search/051.png' },
    ]}

  ];
  message = signal('No Gym Leader selected');

  onLeaderSelected(description: string){
    this.message.set(`${description} was selected`);
  }

}
