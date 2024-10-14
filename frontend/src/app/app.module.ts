// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { NavComponent } from './components/templates/nav/nav.component'; // Verifique se o caminho está correto
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,        // Declarando o AppComponent
    HeaderComponent,
    FooterComponent,
    NavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
