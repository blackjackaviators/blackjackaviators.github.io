import { Component } from '@angular/core';
import { MenuComponent } from './menu';
import { ContactComponent } from './contact';

@Component({
  moduleId: module.id,
  selector: 'blackjack-aviators-app',
  directives: [ MenuComponent, ContactComponent ],
  templateUrl: 'blackjack-aviators.component.html',
  styleUrls: ['blackjack-aviators.component.css']
})
export class BlackjackAviatorsAppComponent {
  title = 'Blackjack Aviators';
}
