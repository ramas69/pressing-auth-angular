import { Component, OnInit, inject } from '@angular/core';
import { HeroService } from '../shared/services/hero.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {


  service = inject(HeroService);
  heroes:[] = []

  ngOnInit(): void {
    this.service.fetchAll().subscribe(data => {
      this.heroes = data;
      console.log(data);
      
})
 
}


}