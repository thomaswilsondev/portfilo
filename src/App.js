import PageTop from "./pages/PageTop/PageTop.component";
import PageMedium from "./pages/PageMedium/PageMedium.component";
import PageBottom from "./pages/PageBottom/PageBotom.component";
import "../src/css/mobile.styles.scss";

function App() {
  return (
    <div className="App">
      <PageTop />
      <PageMedium />
      <PageBottom />
    </div>
  );
}

export default App;
