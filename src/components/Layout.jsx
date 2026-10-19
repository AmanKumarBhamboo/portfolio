import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollManager } from "./ScrollManager";

export const Layout = () => (
  <>
    <ScrollManager />
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
    >
      Skip to content
    </a>
    <Header />
    <main id="main">
      <Outlet />
    </main>
    <Footer />
  </>
);
