import App, { Container } from "next/app";
import React from "react";
import withReduxStore from "../lib/with-redux-store.js";
import { Provider } from "react-redux";
import Head from "next/head";

import Navigation from "../components/navigation.js";

class BuntingApp extends App {

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <div>
        <Head>
          <link rel="stylesheet" href="./static/style.css"></link>

        </Head>
        <Container>
          <Provider store={reduxStore}>
            <Navigation/>
            <div className="main-content">
              <Component {...pageProps}/>
            </div>
          </Provider>
        </Container>
      </div>
    );
  }
}

export default withReduxStore(BuntingApp);
