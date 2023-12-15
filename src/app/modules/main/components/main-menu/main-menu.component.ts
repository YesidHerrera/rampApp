import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonRouterLink, IonList, IonItem, IonIcon, IonLabel, IonButton, IonBadge } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, receiptOutline, pricetagOutline,  peopleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  standalone: true,
  imports: [IonMenu , IonHeader,  IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel, IonRouterLink]
})
export class MainMenuComponent {

  constructor(private router: Router) {
    addIcons(
      { homeOutline, receiptOutline, pricetagOutline,  peopleOutline }
    );
  }

  navigate(path: string): void {
    this.router.navigate([path]);
  }

}
