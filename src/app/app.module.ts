import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NotesComponent } from './notes/notes.component';
import { EnergyComponent } from './energy/energy.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { NoteFormContentComponent } from './note-form-content/note-form-content.component';


@NgModule({
  entryComponents: [
    NoteFormContentComponent
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    NotesComponent,
    EnergyComponent,
    NoteFormComponent,
    NoteFormContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
