import {Component, ElementRef, ViewChild} from '@angular/core';
import {AnimationService} from './service/animation.service';

@Component({
  selector: 'app-animation',
  standalone: true,
  imports: [],
  templateUrl: './animation.component.html',
  styleUrl: './animation.component.css'
})
export class AnimationComponent {

  model;

  @ViewChild('renderCanvas',{static:true})
  public renderCanvas: ElementRef<HTMLCanvasElement>;

  public constructor(public animServ: AnimationService) {};

  ngOnInit(): void {

    this.modelStatus();
    this.animServ.createScene(this.renderCanvas);

  }

  modelStatus():void{
    this.model=this.animServ.theModel;
  }


}
