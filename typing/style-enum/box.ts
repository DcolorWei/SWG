export type ViewportWidth = "1vw" | "5vw" | "10vw" | "15vw" | "20vw" | "25vw" | "30vw" | "35vw" | "40vw" | "45vw" | "50vw" | "55vw" | "60vw" | "65vw" | "70vw" | "75vw" | "80vw" | "85vw" | "90vw" | "95vw" | "100vw"
export type ViewportHeight = "1vh" | "5vh" | "10vh" | "15vh" | "20vh" | "25vh" | "30vh" | "35vh" | "40vh" | "45vh" | "50vh" | "55vh" | "60vh" | "65vh" | "70vh" | "75vh" | "80vh" | "85vh" | "90vh" | "95vh" | "100vh"
export type ViewportSize = ViewportWidth | ViewportHeight

export type ProportionWidth = "1%" | "5%" | "20%" | "25%" | "33.3%" | "40%" | "50%" | "60%" | "66.6%" | "80%" | "100%"
export type ProportionHeight = "1%" | "5%" | "20%" | "25%" | "33.3%" | "40%" | "50%" | "60%" | "66.6%" | "80%" | "100%"
export type ProportionSize = ProportionWidth | ProportionHeight

export type PixelWidth = "1px" | "10px" | "32px" | "50px" | "64px" | "100px" | "128px" | "960px" | "980px" | "1190px" | "1210px"
export type PixelHeight = "1px" | "10px" | "32px" | "50px" | "64px" | "100px" | "128px" | "540px" | "551px" | "670px" | "680px"
export type PixelSize = PixelWidth | PixelHeight

export type Size = ViewportSize | ProportionSize | PixelSize

export type BorderType = "solid" | "dashed" | "dotted" | "double" | "groove" | "ridge" | "inset" | "outset"