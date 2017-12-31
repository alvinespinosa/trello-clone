import { Component, OnInit } from '@angular/core';
import { Board } from '../@shared/models/board';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../@shared/services/board.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private board: Board;

  constructor(private boardService: BoardService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.boardService.getBoardById(id)
        .subscribe(board => this.board = board);
  }

}
