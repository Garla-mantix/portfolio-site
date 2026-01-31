import { Sidebar, Footer } from './components/layout';
import { About, Projects, TypingGame, Skills, Experience } from './components/sections';

function App() {
  return (
    <div className="min-h-screen bg-ink">
      <div className="lg:flex">
        {/* Left sidebar - 50% on desktop */}
        <div className="lg:w-1/2 px-6 sm:px-8 lg:pl-24 xl:pl-40 2xl:pl-52 lg:pr-0">
          <Sidebar />
        </div>

        {/* Right content - 50% on desktop, larger right margin */}
        <main className="lg:w-1/2 px-6 sm:px-8 lg:pl-0 lg:pr-16 xl:pr-32 2xl:pr-48">
          <About />
          <Projects />
          <TypingGame />
          <Skills />
          <Experience />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
