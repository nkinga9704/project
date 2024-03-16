import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './part/home/home.component';
import { SignupComponent } from './part/signup/signup.component';
import { SigninComponent } from './part/signin/signin.component';
import { ForgotPasswordComponent } from './part/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './part/verify-email/verify-email.component';
import { RecipesAdminComponent } from './part/recipes-admin/recipes-admin.component';
import { UploadRecipesComponent } from './part/upload-recipes/upload-recipes.component';
import { RecipeBookComponent } from './part/recipe-book/recipe-book.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", redirectTo:""},
  {path:"signup", component:SignupComponent},
  {path:"signin", component:SigninComponent},
  {path:"forgotpassword", component:ForgotPasswordComponent},
  {path:"verifyemail", component:VerifyEmailComponent},
  {path:"recipesadmin", component:RecipesAdminComponent},
  {path:"uploadrecipes", component:UploadRecipesComponent},
  {path:"recipebook", component:RecipeBookComponent},
  {path:"**", redirectTo:""}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
