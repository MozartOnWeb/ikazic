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
} from "../sections";

//Import components
import NavBar from "../components/NavBar/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>IKAZIC</title>
        <meta
          name="description"
          content="Ikazic, La meilleure plateforme de streaming au Mali."
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
        <Waitlist />
      </div>
    </div>
  );
}
