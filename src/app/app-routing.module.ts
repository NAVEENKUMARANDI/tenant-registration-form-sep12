import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamilyMemberComponent } from '../app/family-member/family-member.component';
import { RegistrationFormComponent } from '../app/registration-form/registration-form.component';

import { LoginPageComponent } from '../app/login-page/login-page.component';
import { FlatDetailComponent } from '../app/flat-detail/flat-detail.component'; 
import { EbMeterDetailsComponent } from '../app/eb-meter-details/eb-meter-details.component';
import { FlatOwnerDetailComponent } from '../app/flat-owner-detail/flat-owner-detail.component';
import { TenantMainMenuComponent } from '../app/tenant-main-menu/tenant-main-menu.component';

const routes: Routes = [
  { path: 'family', component: FamilyMemberComponent },
  { path: 'register', component: RegistrationFormComponent },
  { path: '', component: LoginPageComponent},
  { path: 'flatdetail', component: FlatDetailComponent},
  { path: 'ebmeterdetail', component: EbMeterDetailsComponent},
  { path: 'flatownerdetail', component: FlatOwnerDetailComponent},
  { path: 'tenantmainmenu', component: TenantMainMenuComponent }
];


// const routes: Routes = [];
// const routes: Routes = [
//   { path: '', component: ProductListComponent },
//   { path: 'products/:productId', component: ProductDetailsComponent },
//   { path: 'productspec/:productId', component: ProductSpecComponent },
//   { path: 'cart', component: CartComponent },
//   { path: 'shipping', component: ShippingComponent},
//   { path: 'address', component: AddressListComponent}
//   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }