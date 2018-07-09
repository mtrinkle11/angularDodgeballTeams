import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Mike';
  active = true;
  totalTeams = 4
  teams = [{
    teamName: 'Chupacabras',
    players: ['Michael', 'Diara', 'Tiny', 'Kenny', 'Johnny'],
    teamHome: 'Mission'
  }, 
  {
    teamName: 'Wrench Dodgers',
    players: ['Cesare', 'Erick', 'Victor', 'Jess', 'Jeremy'],
    teamHome: 'Mission'
  },
  {
    teamName: 'Los Tamales',
    players: ['Delia', 'Jorge', 'Jacqueline', 'Steven', 'Luis'],
    teamHome: 'Mission'
  },
  {
    teamName: 'Ocelots',
    players: ['Ernesto', 'Mike', 'Ernesto', 'Emmanuel', 'Roxanne'],
    teamHome: 'Tokyo'
  }
];
}