import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [trigger(
                'testAnimation',
                [
                  state('small', style({transform: 'scale(1)',})),
                  state('large', style({transform: 'scale(1.5)',})),
                  state('up', style({transform: 'translateY(0)'})),
                  state('down', style({transform: 'translateY(40px)'})),
                  state('left', style({transform: 'translateX(0)', opacity: 1,})),
                  state('right', style({transform: 'translateX(100%)', opacity: 0.5,})),
                  transition(
                    'small <=> large',
                    animate('300ms ease-in', )
                  ),
                  transition(
                    'up <=> down',
                    animate('300ms ease-in',)
                  ),
                  transition(
                    'left <=> right',
                    animate('1000ms ease-in',)
                  ),
                ]
              )],
})
export class AppComponent {
  title = 'app';

  scaleState: string = 'small';
  upAndDownState: string = 'up';
  leftAndRightState: string = 'left';

  scaleAnimate() {
    this.scaleState = (this.scaleState === 'small' ? 'large' : 'small');
  }

  upAndDownAnimate() {
    this.upAndDownState = (this.upAndDownState === 'up' ? 'down' : 'up');
  }

  leftAndRightAnimate() {
    this.leftAndRightState = (this.leftAndRightState === 'left' ? 'right' : 'left')
  }
}
