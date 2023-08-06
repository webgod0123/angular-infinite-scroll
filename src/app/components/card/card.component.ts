import { Component, Input, OnInit } from '@angular/core';
import { ITourist } from '../../interfaces/tourist';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() tourist: ITourist | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
