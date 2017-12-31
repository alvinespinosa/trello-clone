import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, fadeInContent } from '@angular/material';
import { BoardPopupComponent } from '../board-popup/board-popup.component';
import { BoardService } from '../@shared/services/board.service';
import { Board } from '../@shared/models/board';
import { Observable } from 'rxjs/Observable';
import {Subscription} from 'rxjs/subscription';
import { NewBoardComponent } from '../new-board/new-board.component';
import { BoardDataService } from '../data-service/board-data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  private boards: Board[];

  private subscription: Subscription;

  private newBoardTitle: string;
  private newBoardId: number;

  private message: string;


  constructor(public dialog: MatDialog,private boardDataService: BoardDataService) { }

  ngOnInit() {
    this.getBoardList();
    this.subscription = this.boardDataService.boards$.subscribe(
      message => {this.boards = message}
    );
  }

  showBoardPopUp(e) {
    const confirmDialog = this.dialog.open(BoardPopupComponent, {
      width: '250px',
      data: { boards: this.boards }
    });

    confirmDialog.afterClosed().subscribe(result => {
      debugger
      if(result) { 
        let confirmDialog2 = this.dialog.open(NewBoardComponent, {
          width: '250px',
          data: { newBoardTitle: '' }
        });

        confirmDialog2.afterClosed().subscribe(result => {
          if(result != undefined) {
            this.newBoardTitle = result;
            this.newBoardId = this.boards.length + 1;

            let newBoard = new Board();
            newBoard.id = this.newBoardId;
            newBoard.title = this.newBoardTitle;

            this.addBoard(newBoard);
          }

        })
      }

    })
  }

  getBoardList()
  {
    this.boardDataService
    .getBoardList()
    .subscribe(
      (boards) => {
        this.boards = boards;
      }
    )
  }

  addBoard(board) {
    this.boardDataService
    .addBoard(board)
    .subscribe(
      (newBoard) => {
        this.boards = this.boards.concat(newBoard);
        this.updateBoardList();
      }
    );      
  }

  updateBoardList()
  {
    this.boardDataService.updateBoardList(this.boards);
  }

}
