import { Component, ViewEncapsulation } from '@angular/core';
import { WPP_URL } from './constans/constants';
import { ItalicPipe, StrongPipe, UnderlinePipe, WppPipe } from './shared/Pipes/to-wpp.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(
    private wppPipe: WppPipe,
    private italic: ItalicPipe,
    private strong: StrongPipe,
    private underline: UnderlinePipe
  ) { }

  sendtext = "";

  sendMessage(wpp: string): void {
    wpp = wpp ? `/55${wpp}` : "";
    let url = `${WPP_URL}${wpp}`;
    if (this.sendtext) {
      let text = this.wppPipe.transform(this.sendtext);
      text = this.italic.transform(text);
      text = this.strong.transform(text);
      text = this.underline.transform(text);
      url += `?text=${text}`;
    }
    window.open(url, "_blank");
  }
}
