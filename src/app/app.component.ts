import { Component } from '@angular/core';
import { AfterViewChecked, ChangeDetectorRef } from '@angular/core'
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'templateDrivenForm';

  statuts=['Célibataire','Marié(e)','Divorcé(e)']

  user:User={email:"test@gmail.com",nationalite:"TUNISIEN",nom:"Ahmed",statut:"Célibataire",termes:true}
  
}
