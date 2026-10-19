import { Link } from "react-router-dom";

export const NotFound = () => (
  <section className="wrap py-32">
    <p className="label">404</p>
    <h1 className="mt-4 text-6xl md:text-8xl">Nothing here.</h1>
    <Link to="/" className="btn mt-10">Back home</Link>
  </section>
);
