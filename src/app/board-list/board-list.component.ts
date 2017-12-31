import { Component, OnInit } from '@angular/core';
import { BoardService  } from '../@shared/services/board.service';
import { Board } from '../@shared/models/board';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { BoardDataService } from '../data-service/board-data.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
  
  private boards: Board[];
  subscription: Subscription;

  constructor(private boardService: BoardDataService) { }

  ngOnInit() {
    this.boardService
    .getBoardList()
    .subscribe(
      (boards) => { 
        this.boards = boards;
      }) 
      
      this.subscription = this.boardService.boards$.subscribe(
        message => {this.boards = message}
      );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
