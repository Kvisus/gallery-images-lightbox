import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { slides } from "./data";
import "yet-another-react-lightbox/styles.css";
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Images from "./Images";

const App = () => {
  // const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-1);
  return (
    <>
      {/* <button onClick={() => setOpen(true)}>Open Lightbox</button> */}
      <Images
        data={slides}
        onClick={(currentIndex) => {
          setIndex(currentIndex);
        }}
      />
      <Lightbox
        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
        // open={open}
        // close={() => setOpen(false)}

        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
        captions={{
          showToggle: true,
          descriptionTextAlign: "end",
        }}
      />
    </>
  );
};
export default App;
