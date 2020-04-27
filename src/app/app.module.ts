import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleSectionComponent } from './title-section/title-section.component';
import { YourChangesComponent } from './your-changes/your-changes.component';
import { IndexFileComponent } from './index-file/index-file.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleSectionComponent,
    YourChangesComponent,
    IndexFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
