import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NewBoardComponent } from '../new-board/new-board.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-popup',
  templateUrl: './board-popup.component.html',
  styleUrls: ['./board-popup.component.css']
})
export class BoardPopupComponent implements OnInit {

  constructor(public router: Router, public dialogRef: MatDialogRef<BoardPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
  }

  ngOnInit() {
  }
  
  goToBoard(id: number)
  {
    this.router.navigate(['/boards', id]);
  }

}
