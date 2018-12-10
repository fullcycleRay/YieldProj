import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './static-ui/home/home.component';
import { AboutComponent } from './static-ui/about/about.component';
import { TopNavComponent } from './shared/ui/top-nav/top-nav.component';
import { OfferingsComponent } from './offering/offerings/offerings.component';
import { WhyYieldstreetComponent } from './static-ui/why-yieldstreet/why-yieldstreet.component';
import { InvestmentPhilosophyComponent } from './static-ui/investment-philosophy/investment-philosophy.component';
import { UniversityComponent } from './static-ui/university/university.component';
import { SupportCenterComponent } from './static-ui/support-center/support-center.component';
import { SignupComponent } from './userSignup/signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './shared/ui/footer/footer.component';
import { SignupStep2Component } from './userSignup/signup-step2/signup-step2.component';
import { UserService } from './services/user/user.service';
import { ViewportfolioComponent } from './viewportfolio/viewportfolio.component';
import { NotfoundComponent } from './static-ui/notfound/notfound.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { CreateInvestorAccountComponent } from './manage-account/create-investor-account/create-investor-account.component';
import { SelectInvestorAccountComponent } from './manage-account/select-investor-account/select-investor-account.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthServiceService} from './services/auth/auth-service.service';
import { OfferingDetailsComponent } from './offering/offering-details/offering-details.component';
import {JwtInterceptor} from './helper/jwt.interceptor';
import { OriginatorComponent } from './originator/originator.component';
import { GetMonths } from './shared/pipes/get-months.pipe';
import { CompleteInvestmentComponent } from './transactions/complete-investment/complete-investment.component';
import { InvestmentComponent } from './static-ui/investment/investment.component';
import { WalletComponent } from './wallet/wallet.component';
import { ManageAccountPartialComponent } from './manage-account/manage-account-partial/manage-account-partial.component';
import { TransferFundsComponent } from './bank-account/transfer-funds/transfer-funds.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AccountComponent } from './manage-account/manage-account-step1/account.component';
import { AddAccountManuallyComponent } from './bank-account/add-account-manually/add-account-manually.component';
import { ManualAccountStep2Component } from './manage-account/manual-account-step2/manual-account-step2.component';
import { ManualAccountStep3Component } from './manage-account/manual-account-step3/manual-account-step3.component';
import { SidebarNavigationComponent } from './shared/ui/sidebar-navigation/sidebar-navigation.component';
import { SignupStep3Component } from './userSignup/signup-step3/signup-step3.component';
import { SignupStep4Component } from './userSignup/signup-step4/signup-step4.component';
import { ConfirmInvestmentComponent } from './transactions/confirm-investment/confirm-investment.component';
import { TransferFundHeaderComponent } from './shared/ui/transfer-fund-header/transfer-fund-header.component';
import { ManageAccountHeaderComponent } from './shared/ui/manage-account-header/manage-account-header.component';
import { VerifyAccountComponent } from './manage-account/verify-account/verify-account.component';
import { FileUploadModule } from 'ng2-file-upload';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LoaderComponent } from './shared/loader/loader.component';
import {AppConfig} from '../environments/config';
import { InvestmentDetailsComponent } from './transactions/investment-details/investment-details.component';
import {RequestCache} from './services/request-cache';
import {CachingInterceptor} from './helper/cache.interceptor';
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
    SignupStep2Component,
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
    ConfirmInvestmentComponent,
    TransferFundHeaderComponent,
    ManageAccountHeaderComponent,
    VerifyAccountComponent,
    LoaderComponent,
    InvestmentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FileUploadModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    })
  ],
  providers: [
    UserService,
    AuthServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    AppConfig,
    RequestCache,
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
