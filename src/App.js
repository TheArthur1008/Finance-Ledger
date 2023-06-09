import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Cases from "./pages/Cases/Cases";
import Contacts from "./pages/Contacts/Contacts";
import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";

function App() {
  return (
    <>
      <Home />
      <main>
        <About />
        <Cases />
        <Blog />
        <Team />
      </main>
      <Contacts />
    </>
  );
}

export default App;
