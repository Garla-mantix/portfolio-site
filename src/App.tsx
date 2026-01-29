import { Header, Footer } from './components/layout';
import { Hero, Projects, TypingGame, Skills, Experience } from './components/sections';

function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Header />
      <main>
        <Hero />
        <Projects />
        <TypingGame />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
