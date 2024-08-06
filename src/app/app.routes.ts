import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroComponent } from './hero/hero.component';
import { SignalComponent } from './signal/signal.component';
import { authGuard } from './shared/services/auth.guard';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'hero', component: HeroComponent },
            { path: 'signal', component: SignalComponent },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },

        ]
    },
    { path: '**', redirectTo: '' } // Redirection vers HomeComponent pour les routes non définies
];
