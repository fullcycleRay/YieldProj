import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './static-ui/home/home.component';
import {AboutComponent} from './static-ui/about/about.component';
import {SignupComponent} from './userSignup/signup/signup.component';
import {LoginComponent} from './login/login.component';
import { OfferingsComponent } from './offering/offerings/offerings.component';
import { WhyYieldstreetComponent } from './static-ui/why-yieldstreet/why-yieldstreet.component';
import { InvestmentPhilosophyComponent } from './static-ui/investment-philosophy/investment-philosophy.component';
import {SignupStep2Component} from './userSignup/signup-step2/signup-step2.component';
import {NotfoundComponent} from './static-ui/notfound/notfound.component';
import {ForgetpasswordComponent} from './forgetpassword/forgetpassword.component';
import {ViewportfolioComponent} from './viewportfolio/viewportfolio.component';
import {CreateInvestorAccountComponent} from './manage-account/create-investor-account/create-investor-account.component';
import {SelectInvestorAccountComponent} from './manage-account/select-investor-account/select-investor-account.component';
import {OfferingDetailsComponent} from './offering/offering-details/offering-details.component';
import {OriginatorComponent} from './originator/originator.component';
import {CompleteInvestmentComponent} from './transactions/complete-investment/complete-investment.component';
import {InvestmentComponent} from './static-ui/investment/investment.component';
import {WalletComponent} from './wallet/wallet.component';
import {TransferFundsComponent} from './bank-account/transfer-funds/transfer-funds.component';
import {TransactionComponent} from './transaction/transaction.component';
import {AccountComponent} from './manage-account/manage-account-step1/account.component';
import {AddAccountManuallyComponent} from './bank-account/add-account-manually/add-account-manually.component';
import {ManualAccountStep2Component} from './manage-account/manual-account-step2/manual-account-step2.component';
import {ManualAccountStep3Component} from './manage-account/manual-account-step3/manual-account-step3.component';
import {SignupStep3Component} from './userSignup/signup-step3/signup-step3.component';
import {SignupStep4Component} from './userSignup/signup-step4/signup-step4.component';
import {UserSessionGuard} from './shared/guards/user-session-guard/user-session.guard';
import {ConfirmInvestmentComponent} from './transactions/confirm-investment/confirm-investment.component';
import {InvestmentGuard} from './shared/guards/transaction/investment.guard';
const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'about',
  component: AboutComponent
},

{
  path: 'account',
  component: AccountComponent,
  canActivate: [UserSessionGuard]
},
{
  path: 'viewportfolio',
  component: ViewportfolioComponent,
  canActivate: [UserSessionGuard]
},
{
  path: 'investments',
  component: InvestmentComponent
},
{
  path: 'wallet',
  component: WalletComponent,
  canActivate: [UserSessionGuard]
},
{
  path: 'funds',
  component: TransferFundsComponent,
  canActivate: [UserSessionGuard]
},
{
  path: 'transactions',
  component: TransactionComponent,
  canActivate: [UserSessionGuard]
},
{
  path: 'create-investor-account',
  component: CreateInvestorAccountComponent,
  canActivate: [UserSessionGuard]
},
{
  path: 'new-account',
  component: AddAccountManuallyComponent,
  canActivate: [UserSessionGuard]
},
{
  path: 'new-account-step-3',
  component: ManualAccountStep2Component,
  canActivate: [UserSessionGuard]
},
{
  path: 'new-account-step-2',
  component: ManualAccountStep3Component,
  canActivate: [UserSessionGuard]
},
{
  path: 'signup',
  component: SignupComponent,
},
{
  path: 'signup-step2',
  component: SignupStep2Component
},
{
  path: 'signup-step3',
  component: SignupStep3Component
},
{
  path: 'signup-step4',
  component: SignupStep4Component
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'offerings',
  component: OfferingsComponent
},
{
  path: 'why-yieldstreet',
  component: WhyYieldstreetComponent
},
{
  path: 'investment-philosophy',
  component: InvestmentPhilosophyComponent
},
{
  path: 'createaccount',
  component: CreateInvestorAccountComponent,
  canActivate: [UserSessionGuard]
},
{
  path: 'selectinvestor',
  component: SelectInvestorAccountComponent,
  canActivate: [UserSessionGuard]
},
{
  path: 'forgetpassword',
  component: ForgetpasswordComponent
},
{
  path: 'offering-detail/:id',
  component: OfferingDetailsComponent
},
{
  path: 'originator/:oid',
  component: OriginatorComponent
},
{
  path: 'offering-detail/:id/:success',
  component: OfferingDetailsComponent
},
{
  path: 'complete-investment/:id',
  component: CompleteInvestmentComponent,
  canActivate: [UserSessionGuard, InvestmentGuard]
},
{
  path: 'confirm-investment',
  component: ConfirmInvestmentComponent
},
{
  path: '**',
  component: NotfoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
