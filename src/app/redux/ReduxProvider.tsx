"use client"; // Mark this as a Client Component

import { Provider } from "react-redux";
import { store } from "./store";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>
    <Navbar/>
    <main>
    {children}
    </main>
    <Footer/>
    </Provider>;
}
