import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {

  nom = signal("rama");
  euros = signal(1000);
  dollars = computed(()=> this.euros()*1.2);

calcul (){
this.euros.set(this.euros()*2);
  console.log(this.dollars, "dollars");
  console.log(this.euros, "euros");

} 

}
