import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {AnimationComponent} from './animation/animation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    AnimationComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private router: any;

}
