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
          <script type="text/javascript" id="bunting_script_1">(function(){if(typeof window.$_Bunting=="undefined")window.$_Bunting={d:{}};$_Bunting.src=("https:"==document.location.protocol?"https://":"http://")+"hartsofstur.1.bunting.com/call.js?wmID=6";$_Bunting.s=document.createElement("script");$_Bunting.s.type="text/javascript";$_Bunting.s.async=true;$_Bunting.s.defer=true;$_Bunting.s.charset="UTF-8";$_Bunting.s.src=$_Bunting.src;document.getElementsByTagName("head")[0].appendChild($_Bunting.s)})()</script>
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
