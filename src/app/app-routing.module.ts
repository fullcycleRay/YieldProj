import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import { OfferingsComponent } from './offerings/offerings.component';
import { WhyYieldstreetComponent } from './why-yieldstreet/why-yieldstreet.component';
import { InvestmentPhilosophyComponent } from './investment-philosophy/investment-philosophy.component';
import {Step2Component} from './step2/step2.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {ForgetpasswordComponent} from './forgetpassword/forgetpassword.component';
import {ViewportfolioComponent} from './viewportfolio/viewportfolio.component';
import {CreateInvestorAccountComponent} from './create-investor-account/create-investor-account.component';
import {SelectInvestorAccountComponent} from './select-investor-account/select-investor-account.component';
import {OfferingDetailsComponent} from './offering-details/offering-details.component';
import {OriginatorComponent} from './originator/originator.component';
import {CompleteInvestmentComponent} from './complete-investment/complete-investment.component';
import {InvestmentComponent} from './investment/investment.component';
import {WalletComponent} from './wallet/wallet.component';
import {TransferFundsComponent} from './transfer-funds/transfer-funds.component';
import {TransactionComponent} from './transaction/transaction.component';
import {AccountComponent} from './account/account.component';
import {AddAccountManuallyComponent} from './add-account-manually/add-account-manually.component';
import {ManualAccountStep2Component} from './manual-account-step2/manual-account-step2.component';
import {ManualAccountStep3Component} from './manual-account-step3/manual-account-step3.component';
import {SignupStep3Component} from './signup-step3/signup-step3.component';
import {SignupStep4Component} from './signup-step4/signup-step4.component';
import {UserSessionGuard} from './user-session.guard';
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
  path: 'account',
  component: AccountComponent,
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
  path: 'new-account-step-2',
  component: ManualAccountStep2Component,
  canActivate: [UserSessionGuard]
},
{
  path: 'new-account-step-3',
  component: ManualAccountStep3Component,
  canActivate: [UserSessionGuard]
},
{
  path: 'signup',
  component: SignupComponent
},
{
  path: 'step2',
  component: Step2Component
},
{
  path: 'step3',
  component: SignupStep3Component
},
{
  path: 'step4',
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
  path: 'complete-investment/:id/:minAmt',
  component: CompleteInvestmentComponent,
  canActivate: [UserSessionGuard]
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
