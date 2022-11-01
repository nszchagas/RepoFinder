import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ComponentsModule} from './components/components.module';
import {HttpClientModule} from '@angular/common/http';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloLink, createHttpLink, from, InMemoryCache} from '@apollo/client/core';
import {MatButtonModule} from '@angular/material/button';
import {HttpLink} from 'apollo-angular/http';
import {environment} from '../environments/environment';

const GIT_URI = 'https://api.github.com/graphql';
const TOKEN = environment.gitToken;

const authMiddleware = new ApolloLink((operation, forward) => {

  operation.setContext(({headers = {}}) => ({

    headers: {
      ...headers,
      authorization: `Bearer ${TOKEN}`
    }
  }));
  return forward(operation);
})


@NgModule({
  declarations: [AppComponent,
  ],
  imports: [
    BrowserModule,
    ApolloModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    MatButtonModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {

        return {
          cache: new InMemoryCache(),
          link: authMiddleware.concat(createHttpLink({
            uri: GIT_URI
          }))

        }
      },
      deps: [HttpLink]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
