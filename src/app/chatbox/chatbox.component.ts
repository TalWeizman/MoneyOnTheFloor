import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  @Output() chatClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {

  }

  ngOnInit() {
  }


  closeChat() {

    this.chatClosed.emit(false);
  }

}
