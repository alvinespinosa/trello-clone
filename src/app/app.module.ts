import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardPopupComponent } from './board-popup/board-popup.component';
import { NewBoardComponent } from './new-board/new-board.component';
import { BoardComponent } from './board/board.component';
import { CardListComponent } from './card-list/card-list.component';
import { MovePopupComponent } from './move-popup/move-popup.component';

import { MyMaterials} from '../app/@shared/my-materials.module'
import { BoardService } from './@shared/services/board.service';
import { HttpModule  } from '@angular/http';
import { AppRoutingModule } from './/app-routing.module';
import { CardService } from './@shared/services/card.service';
import { StatusService } from './@shared/services/status.service';
import { BoardDataService } from './data-service/board-data.service';

@NgModule({
  declarations: [
    AppComponent,   
    NavigationComponent,
    BoardListComponent,
    BoardPopupComponent,
    BoardComponent,
    CardListComponent,
    MovePopupComponent,
    NewBoardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule ,
    BrowserAnimationsModule,
    MyMaterials,
    AppRoutingModule,
    FormsModule
  ],
  entryComponents: [
    BoardPopupComponent,
    MovePopupComponent,

    NewBoardComponent
  ],
  providers: [ BoardService, CardService, StatusService, BoardDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
