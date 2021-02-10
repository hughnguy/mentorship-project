import React from "react";

import { BrowserRouter } from "react-router-dom";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@shopify/react-graphql";
import { createHttpLink } from "apollo-link-http";
import { I18nContext, I18nManager } from "@shopify/react-i18n";
import { UrlProvider } from "./utils/url/component";

import { Router } from "./Router";

const i18nManager = new I18nManager({ locale: "en" });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({ uri: "http://localhost:3000/graphql" }),
});

export default function App() {
  return (
    <BrowserRouter>
      <I18nContext.Provider value={i18nManager}>
        <ApolloProvider client={client}>
          <UrlProvider locale="en">
            <Router />
          </UrlProvider>
        </ApolloProvider>
      </I18nContext.Provider>
    </BrowserRouter>
  );
}
