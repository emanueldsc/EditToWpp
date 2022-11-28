import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class HeaderComponent {

  @Output('number') emitter = new EventEmitter<string>;

  issueNumber(nb: string): void {
    const wppNumber = nb.replace(/\D/g,"");
    this.emitter.emit(wppNumber);
  }

}
