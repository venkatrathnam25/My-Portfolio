import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {  MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    SkillsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatButtonModule, MatIconModule,
    NgxTypedJsModule,
    MatProgressBarModule,
    MatSidenavModule,MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
