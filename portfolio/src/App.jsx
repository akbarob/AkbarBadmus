import { Navbar } from "./components";
import { About, Header, Footer, Skills, Testimonial, Project } from "./pages";

export default function App() {
  return (
    <div className="text-3xl font-bold underline text-indigo-700">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Project />
      <Testimonial />
      <Footer />
    </div>
  );
}
