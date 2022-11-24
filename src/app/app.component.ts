import { Component, ViewEncapsulation } from '@angular/core';
import { WPP_URL } from './constans/constants';
import { ToWppPipe } from './shared/Pipes/to-wpp.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(
    private wppPipe: ToWppPipe
  ) { }

  sendtext = "";

  sendMessage(wpp: string): void {
    wpp = wpp ? `/55${wpp}` : "";
    let url = `${WPP_URL}${wpp}`;
    if (this.sendtext) {
      const text = this.wppPipe.transform(this.sendtext);
      url += `?text=${text}`;
      console.log(url);
    }
    debugger
    window.open(url, "_blank");
  }
}
