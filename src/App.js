import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Infobox from "./components/Infobox";
import TwoImages from "./components/TwoImages"
import ImageOne from "./assets/img/two-images-one.jpg"
import ImageTwo from "./assets/img/two-images-two.jpg"
import Videobox from "./components/Videobox";

function App() {

    return (
        <main>
            <Navbar />
            <Hero />
            <Infobox />
            <TwoImages backgroundAlign="right" content={[ImageOne,ImageTwo]} backgroundColor = "#fbffa7"/>
            <Infobox />
            <Videobox width="66%" videoId="BC19kwABFwc" label="A delightful music video"/>
        </main>
    );
}

export default App;