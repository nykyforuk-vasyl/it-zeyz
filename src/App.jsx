import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WatchSection from "./components/WatchSection/WatchSection";
import GraphicPrice from "./components/GraphicPrice/GraphicPrice";
import AiChat from "./components/AiChat/AiChat";

function App() {
  return (
    <>
      <Header />
      <main>
        <WatchSection />
        <GraphicPrice />
        <AiChat />
      </main>
      <Footer />
    </>
  );
}

export default App;
