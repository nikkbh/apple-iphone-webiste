import DisplaySection from "./components/DisplaySection.jsx";
import Jumbotron from "./components/Jumbotron.jsx";
import Nav from "./components/Nv.jsx";
import SoundSection from "./components/SoundSection.jsx";
import WebgiViewer from "./components/WebgiViewer.jsx";
import { useRef } from 'react';
import Loader from "./components/Loader.jsx";

function App() {

  const webgiViewerRef = useRef();
  const contentRef = useRef();

  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview();
  };

  return (
    <div className="App">
      <Loader />
      <div id="content" ref={contentRef}>
        <Nav />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview} />
      </div>
      <WebgiViewer contentRef={contentRef} ref={webgiViewerRef} />
    </div>
  );
}

export default App;
