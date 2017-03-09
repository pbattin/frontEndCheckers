import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { GameBoardPage } from '../pages/game-board/game-board';
import { GridPage } from '../pages/grid/grid';

import { MoveService } from '../pages/services/move-service';
import { HttpModule } from '@angular.http';
import { jsonInterface } from '../pages/jsonInterface';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GameBoardPage,
    GridPage,
   
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GameBoardPage,
    GridPage,
    
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, MoveService]
})
export class AppModule {}
