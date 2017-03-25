import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { FirebaseListObservable } from "angularfire2";

import { AngularFireService } from "../../services/angularFire.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewChecked {
  public newMessage: string;
  public messages: FirebaseListObservable<any>;
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  constructor(public afService: AngularFireService) {
    this.messages = this.afService.messages;
  }

  isYou(email) {
    if(email == this.afService.email)
      return true;
    else
      return false;
  }

  isMe(email) {
    if(email == this.afService.email)
      return false;
    else
      return true;
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { console.log('Scroll to bottom failed yo!') }
  }

  sendMessage(){
    this.afService.sendMessage(this.newMessage);
    this.newMessage = '';
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  ngOnInit() {}
}
