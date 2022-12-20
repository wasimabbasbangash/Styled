import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider, createClient } from "urql";
import Nav from "../components/Nav";
import {Context} from './../lib/Context';

const client = createClient({ url: "http://localhost:1337/graphql" });

export default function App({ Component, pageProps }: AppProps) {
  return(
    <Context>
      <Provider value={client}>
        <Nav></Nav>
        <Component {...pageProps} />
      </Provider>
  </Context>
  )
}
