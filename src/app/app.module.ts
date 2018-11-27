import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NotesComponent } from './notes/notes.component';
import { EnergyComponent } from './energy/energy.component';
import { NoteFormComponent } from './note-form/note-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NotesComponent,
    EnergyComponent,
    NoteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
