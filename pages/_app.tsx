import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider, createClient } from "urql";
import Nav from "../components/Nav";
import {Context} from './../lib/Context';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Toaster } from 'react-hot-toast'

const client = createClient({ url: "http://localhost:1337/graphql" });

export default function App({ Component, pageProps }: AppProps) {
  return(
    <UserProvider>
    <Context>
      <Provider value={client}>
        <Toaster/>
        <Nav></Nav>
        <Component {...pageProps} />
      </Provider>
  </Context>
  </UserProvider>
  )
}
