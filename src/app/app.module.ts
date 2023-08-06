import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { LoadingComponent } from './components/loading/loading.component';
import { HeaderComponent } from './components/header/header.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HomeComponent } from './pages/home/home.component';
import { TripService } from './services/trip.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    LoadingComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
  ],
  providers: [TripService],
  bootstrap: [AppComponent],
})
export class AppModule {}
