import { Helmet } from "react-helmet-async";
import { Hero } from "@/components/home/Hero";
import { Ticker } from "@/components/home/Ticker";
import { Work } from "@/components/home/Work";
import { Erp } from "@/components/home/Erp";
import { Research } from "@/components/home/Research";
import { About } from "@/components/home/About";
import { Now } from "@/components/home/Now";
import { Contact } from "@/components/home/Contact";

const title = "Aman Kumar Bhamboo - Data Analyst & Researcher | Portfolio";
const desc =
  "Data Analyst and Researcher specializing in Python, SQL, Tableau, and data visualization — now going deep on Rust and systems programming. Explore projects in brain MRI segmentation, ETL pipelines, and business intelligence.";

export const Home = () => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content="https://amanbhamboo.vercel.app/" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
    </Helmet>
    <Hero />
    <Ticker />
    <Work />
    <Erp />
    <Research />
    <About />
    <Now />
    <Contact />
  </>
);
