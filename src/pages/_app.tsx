import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import Header from "@/components/header";
import AppHeader from "@/components/appHeader";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppHeader />
      <Component {...pageProps} />
    </Provider>
  );
}
