import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonHeader, IonToolbar, IonButtons, IonMenuButton ,IonTitle, IonButton, IonContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, receiptOutline, cogOutline, personCircleOutline, notificationsOutline  } from 'ionicons/icons';
import { MainMenuComponent } from './modules/main/components/main-menu/main-menu.component';
import { UserMenuComponent } from './modules/main/components/user-menu/user-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, MainMenuComponent, UserMenuComponent, IonRouterOutlet, IonTabs , IonTabBar, IonTabButton, IonIcon, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonButton, IonContent],
})
export class AppComponent {
  constructor() {
    addIcons(
      { homeOutline, receiptOutline, cogOutline, personCircleOutline, notificationsOutline }
    );
  }
}
