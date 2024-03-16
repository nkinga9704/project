import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './part/signup/signup.component';
import { SigninComponent } from './part/signin/signin.component';
import { HomeComponent } from './part/home/home.component';
import { NavComponent } from './part/nav/nav.component';
import { Environments } from './environments';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './part/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './part/verify-email/verify-email.component';
import { RecipesAdminComponent } from './part/recipes-admin/recipes-admin.component';
import { UploadRecipesComponent } from './part/upload-recipes/upload-recipes.component';
import { RecipeBookComponent } from './part/recipe-book/recipe-book.component';
import { FilterPipe } from './filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    NavComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    RecipesAdminComponent,
    UploadRecipesComponent,
    RecipeBookComponent,
    FilterPipe    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(Environments.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
