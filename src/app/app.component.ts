import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [trigger(
                'testAnimation',
                [
                  state('small', style({transform: 'scale(1)', backgroundColor: '#eee'})),
                  state('large', style({transform: 'scale(1.5)', backgroundColor: '#3F51B5', color: '#fff'})),
                  state('up', style({transform: 'translateY(0)', backgroundColor: '#eee',})),
                  state('down', style({transform: 'translateY(40px)', backgroundColor: '#3F51B5', color: '#fff'})),
                  state('left', style({transform: 'translateX(0)', opacity: 1, backgroundColor: '#eee'})),
                  state('right', style({transform: 'translateX(100%)', opacity: 0.5, backgroundColor: '#3F51B5', color: '#fff'})),
                  state('appear', style({backgroundColor: '#eee'})),
                  state('disappear', style({height: 0, padding: 0})),

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
                    animate('300ms ease-in',)
                  ),
                  transition(
                    'appear <=> disappear', [
                      animate(1000)
                    ]
                  ),
                ]
              )],
})
export class AppComponent {
  title = 'app';

  scaleState: string = 'small';
  upAndDownState: string = 'up';
  leftAndRightState: string = 'left';
  disappearState: string = 'appear';

  scaleAnimate() {
    this.scaleState = (this.scaleState === 'small' ? 'large' : 'small');
  }

  upAndDownAnimate() {
    this.upAndDownState = (this.upAndDownState === 'up' ? 'down' : 'up');
  }

  leftAndRightAnimate() {
    this.leftAndRightState = (this.leftAndRightState === 'left' ? 'right' : 'left')
  }

  disappearAnimate() {
    this.disappearState = (this.disappearState === 'appear' ? 'disappear' : 'appear')
  }
}
