import { logo } from "../assets";
import Themes from "./Themes";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-end items-center w-full mb-10 pt-3">

        <Themes/>

        <button 
        type="button" 
        onClick={() => window.open('https://github.com/Fw1zzy/iSummarize')}
        className="black_btn ml-10"
        >
          GitHub
        </button>
      </nav>

        <span className="flex justify-center items-center">
          <img src={logo} alt="logo" className="w-[500px] object-contain" />
        </span>
      <h2 className="desc">
        Simplify your reading with iSummarize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  )
}

export default Hero
