import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { DetailComponent } from './components/detail/detail.component';
import { SeeComponent } from './components/see/see.component';
import { LoginComponent } from './components/login/login.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataPlayersComponent } from './components/data-players/data-players.component';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    DetailComponent,
    SeeComponent,
    LoginComponent,
    DataPlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [ DataPlayersComponent, DetailComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
