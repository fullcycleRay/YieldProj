import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import{SignupComponent} from './signup/signup.component';
import{LoginComponent}from './login/login.component';
import { OfferingsComponent } from './offerings/offerings.component';
import { WhyYieldstreetComponent } from './why-yieldstreet/why-yieldstreet.component';
import { InvestmentPhilosophyComponent } from './investment-philosophy/investment-philosophy.component';
import { ManageaccountComponent } from './manageaccount/manageaccount.component';
import {Step2Component} from'./step2/step2.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {ForgetpasswordComponent} from './forgetpassword/forgetpassword.component';
import {ViewportfolioComponent} from './viewportfolio/viewportfolio.component';
import{CreateInvestorAccountComponent} from './create-investor-account/create-investor-account.component';
import{SelectInvestorAccountComponent} from'./select-investor-account/select-investor-account.component';
import{OfferingDetailsComponent} from './offering-details/offering-details.component';
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
  path:'selectivestor',
  component: SelectInvestorAccountComponent
},
{
  path:'forgetpassword',
  component: ForgetpasswordComponent
},
{
  path: 'offering-detail',
  component: OfferingDetailsComponent
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
