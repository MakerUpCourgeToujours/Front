import { Component } from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {NavbarComponent} from './features/navbar/navbar.component';
import {HomeComponent} from './features/home/home.component';
import {FooterComponent} from './features/footer/footer.component';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, FooterComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Courge Toujours !';
  showNavbar = true;

  constructor(private readonly router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showNavbar = !['login', 'createmangueur', 'createpartenaire'].some(path=>event.url.includes(`/${path}`))
      }
    })
  }


}
