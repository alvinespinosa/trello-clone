import { Component, OnInit, Input } from '@angular/core';
import { StatusService } from '../@shared/services/status.service';
import { Status } from '../@shared/models/status';
import { CardService } from '../@shared/services/card.service';
import { Card } from '../@shared/models/card';
import { Board } from '../@shared/models/board';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  @Input() currentBoard: Board;

  cards: Card[] = [];
  status: Status[] = [];

  constructor(private cardService: CardService, private statusService: StatusService) { }

  ngOnInit() {
    debugger
    this.getCardList();
    this.getStatusList();
    var s = this.status;
  }

  getStatusList() {
    return this.statusService
    .getStatusList()
    .subscribe(
      (stat) => {
        this.status = stat.filter(s => s.boardId == this.currentBoard.id);
      }
    )
  }

  getCardList() { 
    return this.cardService
    .getCardList()
    .subscribe(
      (cards) => {
        this.cards = cards.filter(c => c.boardId == this.currentBoard.id);
      }
    )
  }

}
