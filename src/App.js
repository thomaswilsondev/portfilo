import PageTop from "./pages/PageTop/PageTop.component";
import PageMedium from "./pages/PageMedium/PageMedium.component";
import PageBottom from "./pages/PageBottom/PageBotom.component";
import "../src/css/mobile.styles.scss";

function App() {
  return (
    <>
      <PageTop />
      <PageMedium />
      {/* <PageBottom /> */}
    </>
  );
}

export default App;
