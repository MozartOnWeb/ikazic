import Head from "next/head";

//Import pages
import {
  Welcome,
  About,
  Features,
  Goals,
  FAQs,
  Waitlist,
  HowItWork,
  Footer,
} from "../sections";

//import fonts
import { clashDisplay, inter } from "../assets/fonts";

import NewsletterSubscribe from "../sections/Waitlist/NewsletterSubscribe";

//Import components
import NavBar from "../components/NavBar/NavBar";

export default function Home() {
  return (
    <div className={`${inter.variable} ${clashDisplay.variable}`}>
      <Head>
        <title>IKAZIC</title>
        <meta
          name="description"
          content="Ikazic, La meilleure plateforme de streaming audio au Mali."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="container">
        <Welcome />
        <HowItWork />
        <About />
        <Features />
        <Goals />
        <FAQs />
        <NewsletterSubscribe />
      </div>
      <Footer />
    </div>
  );
}
