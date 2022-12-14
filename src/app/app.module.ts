import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeModule } from './prime-module/prime.module';
import { ContainerComponent } from './shared/container/container.component';
import { HeaderComponent } from './shared/sender/sender.component';
import { WppPipe, ItalicPipe, StrongPipe, UnderlinePipe } from './shared/Pipes/to-wpp.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    WppPipe, ItalicPipe, StrongPipe, UnderlinePipe
  ],
  imports: [
    BrowserModule,
    PrimeModule,
    FormsModule
  ],
  providers: [WppPipe, ItalicPipe, StrongPipe, UnderlinePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
