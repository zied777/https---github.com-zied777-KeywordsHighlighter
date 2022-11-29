import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeywordsTextPipe } from './keywordsTextView.pipe';


@NgModule({
  declarations: [
    KeywordsTextPipe
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [KeywordsTextPipe]
})
export class KeywordsModule { }
