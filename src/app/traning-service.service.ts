import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TraningServiceService {
  private hoennleaders = signal([
    { Name: 'Roxanne',location: 'Kanazumi City', Badge: 'Stone Badge', specialty: 'Rock Type', pokemon: [
      {Pname: 'Geodude', Plevel: 12, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/074.png' },
      {Pname: 'Nosepass', Plevel: 15, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/299.png' }
    ]},
    { Name: 'Brawly',location: 'Muro Town', Badge: 'Knuckle Badge', specialty: 'Fighting Type', pokemon: [
      {Pname: 'Machop', Plevel: 17 , image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/066.png' },
      {Pname: 'Makuhita', Plevel: 18 , image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNB65eqHp6kKeqRKuYXXg2ApfBvXVZREmblw&s' }
    ]},
     { Name: 'Wattson',location: 'Kinsetsu City', Badge: 'Dynamo Badge', specialty: 'Electric Type', pokemon: [
      {Pname: '	Magnemite', Plevel: 22, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMqqcxxsFgUU-qgpWAhU3A86W_TntDVR3cMQ&s' },
      {Pname: 'Voltorb', Plevel: 20, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/100.png' }
    ]},
    
     { Name: 'Flannery',location: 'Huen Town', Badge: 'Heat Badge', specialty: 'Fire Type', pokemon: [
      {Pname: 'Slugma', Plevel: 26, image: 'https://www.pokemon.com/us/pokedex/slugma' },
      {Pname: 'Torkoal', Plevel: 28, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/324.png' }
    ]},
     { Name: 'Norman',location: 'Touka City', Badge: 'Balance Badge', specialty: 'Normal Type', pokemon: [
      {Pname: '	Slaking', Plevel: 28 , image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/289.png' },
      {Pname: 'Vigoroth', Plevel: 30 , image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/288.png' }
    ]},
     { Name: 'Winona',location: 'Hiwamaki City	', Badge: 'Feather Badge', specialty: 'Flying Type', pokemon: [
      {Pname: '	Swellow', Plevel: 30 , image: 'https://pokemondb.net/pokedex/swellow' },
      {Pname: 'Pelipper ', Plevel: 31, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/279.png' }
    ]},
     { Name: 'Tate and Liza',location: 'Tokusane City', Badge: 'Mind Badge', specialty: 'Psychic', pokemon: [
      {Pname: 'Lunatone', Plevel: 42, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/337.png' },
      {Pname: 'Solrock', Plevel: 42, image: 'https://www.pokemon.com/us/pokedex/solrock' }
    ]},
     { Name: 'Wallace',location: 'Rune City', Badge: 'Rain Badge', specialty: 'Water Type', pokemon: [
      {Pname: 'Luvdisc', Plevel: 40 , image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzrTEzCNBMkZGDLXrfAV-zApHhnnJ7U1hjdQ&s' },
      {Pname: 'Whiscash', Plevel: 42, image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/340.png' }
    ]},
    
    
     
  ]);
   //Expose signal as read-only
  trainers = this.hoennleaders.asReadonly();
 
}
