import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent}from './login/login.component';
import { OfferingsComponent } from './offerings/offerings.component';
import { WhyYieldstreetComponent } from './why-yieldstreet/why-yieldstreet.component';
import { InvestmentPhilosophyComponent } from './investment-philosophy/investment-philosophy.component';
import { ManageaccountComponent } from './manageaccount/manageaccount.component';
import {Step2Component} from'./step2/step2.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {ForgetpasswordComponent} from './forgetpassword/forgetpassword.component';
import {ViewportfolioComponent} from './viewportfolio/viewportfolio.component';
import {CreateInvestorAccountComponent} from './create-investor-account/create-investor-account.component';
import {SelectInvestorAccountComponent} from'./select-investor-account/select-investor-account.component';
import {OfferingDetailsComponent} from './offering-details/offering-details.component';
import {OriginatorComponent} from './originator/originator.component';
import {CompleteInvestmentComponent} from './complete-investment/complete-investment.component';
import {InvestmentComponent} from './investment/investment.component'
import {WalletComponent} from './wallet/wallet.component'
import {TransferFundsComponent} from './transfer-funds/transfer-funds.component'
import {TransactionComponent} from './transaction/transaction.component'
import {AccountComponent} from './account/account.component'
const routes: Routes = [
{
  path:'',
  component: HomeComponent
},
{
  path:'about',
  component: AboutComponent
},
{
  path:'viewportfolio',
  component: ViewportfolioComponent
},
{
  path: 'investments',
  component: InvestmentComponent
},
{
  path: 'wallet',
  component: WalletComponent
},
{
  path: 'funds',
  component: TransferFundsComponent
},
{
  path: 'transactions',
  component: TransactionComponent
},
{
  path: 'account',
  component: AccountComponent
},
{
  path:'signup',
  component: SignupComponent
},
{
  path:'step2',
  component: Step2Component
},
{
  path:'login',
  component: LoginComponent
},
{
  path:'offerings',
  component: OfferingsComponent
},
{
  path:'why-yieldstreet',
  component: WhyYieldstreetComponent
},
{
  path:'investment-philosophy',
  component: InvestmentPhilosophyComponent
},
{
  path:'manageaccount',
  component: ManageaccountComponent
},
{
  path:'createaccount',
  component: CreateInvestorAccountComponent
},
{
  path:'selectinvestor',
  component: SelectInvestorAccountComponent
},
{
  path:'forgetpassword',
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
  component: CompleteInvestmentComponent
},
{
  path:'**',
  component: NotfoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
