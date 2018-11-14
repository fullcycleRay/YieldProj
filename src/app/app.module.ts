import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
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
import { NotfoundComponent } from './notfound/notfound.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { CreateInvestorAccountComponent } from './create-investor-account/create-investor-account.component';
import { SelectInvestorAccountComponent } from './select-investor-account/select-investor-account.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthServiceService} from'./auth-service.service';
import { OfferingDetailsComponent } from './offering-details/offering-details.component';
import {JwtInterceptor} from './helper/jwt.interceptor';
import { OriginatorComponent } from './originator/originator.component';
import { GetMonths } from './offering-details/get-months.pipe';
import { CompleteInvestmentComponent } from './complete-investment/complete-investment.component';
import { InvestmentComponent } from './investment/investment.component';
import { WalletComponent } from './wallet/wallet.component';
import { ManageAccountPartialComponent } from './manage-account-partial/manage-account-partial.component';
import { TransferFundsComponent } from './transfer-funds/transfer-funds.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AccountComponent } from './account/account.component';
import { AddAccountManuallyComponent } from './add-account-manually/add-account-manually.component';
import { ManualAccountStep2Component } from './manual-account-step2/manual-account-step2.component';
import { ManualAccountStep3Component } from './manual-account-step3/manual-account-step3.component';
import { SidebarNavigationComponent } from './shared/sidebar-navigation/sidebar-navigation.component';
import { SignupStep3Component } from './signup-step3/signup-step3.component';
import { SignupStep4Component } from './signup-step4/signup-step4.component';
import { GooglePlacesDirective } from './google-places.directive'
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
    NotfoundComponent,
    ForgetpasswordComponent,
    CreateInvestorAccountComponent,
    SelectInvestorAccountComponent,
    OfferingDetailsComponent,
    OriginatorComponent,
    GetMonths,
    CompleteInvestmentComponent,
    InvestmentComponent,
    WalletComponent,
    ManageAccountPartialComponent,
    TransferFundsComponent,
    TransactionComponent,
    AccountComponent,
    AddAccountManuallyComponent,
    ManualAccountStep2Component,
    ManualAccountStep3Component,
    SidebarNavigationComponent,
    SignupStep3Component,
    SignupStep4Component,
    GooglePlacesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    AuthServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
