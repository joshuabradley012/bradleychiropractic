import Navbar from './navbar';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <section>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </section>
  );
}
