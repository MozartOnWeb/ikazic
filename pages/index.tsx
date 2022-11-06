import Head from "next/head";

//Import pages
import {
  Welcome,
  About,
  Features,
  Goals,
  FAQs,
  Newsletter,
  HowItWork,
} from "../sections";

//Import components
import NavBar from "../components/NavBar/NavBar";
import Drawer from "../components/drawer/Drawer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>IKAZIC</title>
        <meta
          name="description"
          content="La meilleure plateforme de streaming au Mali."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <Welcome />
      <HowItWork />
      <About />
      <Features />
      <Goals />
      <FAQs />
      <Newsletter />
    </div>
  );
}
