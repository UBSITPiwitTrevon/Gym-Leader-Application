import { Component,signal} from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   history =signal ([

    {kanto:'Kanto is one of the earliest documented regions in the Pokémon world and the first region introduced in the franchise’s history. It is known for establishing the structured Pokémon League system, complete with eight Gym Leaders and the Indigo Plateau as its central championship site. Kanto played a major role in early scientific research on Pokémon, most notably the cloning experiments that led to the creation of Mewtwo. The region also faced significant criminal activity from Team Rocket, whose attempts to exploit Pokémon shaped much of Kanto’s modern history. Overall, Kanto is often associated with technological advancement, organized competition, and foundational Pokémon training traditions.',
      johto:'In contrast, Johto is portrayed as a region deeply rooted in history, legend, and tradition. Its culture centers around ancient sites such as the towers of Ecruteak City and the Ruins of Alph, reflecting a strong reverence for the past. Johto’s mythology prominently features the legendary Pokémon Ho-Oh and Lugia, including the tale of a great tower fire and the resurrection of three Pokémon that became Raikou, Entei, and Suicune. Geographically and politically linked to Kanto, Johto shares the same Pokémon League structure, yet it maintains a distinct identity shaped by folklore and spiritual tradition rather than scientific progress.'}

  ])

}
