import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import{FormsModule} from '@angular/forms';  
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TopNavComponent } from './ui/top-nav/top-nav.component';
import { OfferingsComponent } from './offerings/offerings.component';
import { WhyYieldstreetComponent } from './why-yieldstreet/why-yieldstreet.component';
import { InvestmentPhilosophyComponent } from './investment-philosophy/investment-philosophy.component';
import { UniversityComponent } from './university/university.component';
import { SupportCenterComponent } from './support-center/support-center.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { Step2Component } from './step2/step2.component';
import { UserService } from './user.service';
import { ViewportfolioComponent } from './viewportfolio/viewportfolio.component';
import { ManageaccountComponent } from './manageaccount/manageaccount.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { CreateInvestorAccountComponent } from './create-investor-account/create-investor-account.component';
import { SelectInvestorAccountComponent } from './select-investor-account/select-investor-account.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthServiceService} from'./auth-service.service';
import { OfferingDetailsComponent } from './offering-details/offering-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TopNavComponent,
    OfferingsComponent,
    WhyYieldstreetComponent,
    InvestmentPhilosophyComponent,
    UniversityComponent,
    SupportCenterComponent,
    SignupComponent,
    LoginComponent,
    FooterComponent,
    Step2Component,
    ViewportfolioComponent,
    ManageaccountComponent,
    NotfoundComponent,
    ForgetpasswordComponent,
    CreateInvestorAccountComponent,
    SelectInvestorAccountComponent,
    OfferingDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
