import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloLink, createHttpLink, from, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import {environment} from '../environments/environment';
import {ComponentsModule} from './components/components.module';

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
    ComponentsModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory() {

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
