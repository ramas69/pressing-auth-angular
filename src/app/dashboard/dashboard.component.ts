import { Component, inject } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  out = inject(AuthService)

  logout(){ 
    this.out.logout()
  }

 
}

let result = 2+3;
console.log( result); 