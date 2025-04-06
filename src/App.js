import "./App.css";
// import logo from "mid_edod_sm.jpg";
const pubs = [
  {
    title:
      "LinnOS: Predictability on Unpredictable Flash Storage with a Light Neural Network.",
    authors:
      "Mingzhe Hao, Levent Toksoz, Nanqinqin Li, Edward Edberg Halim, Henry Hoffmann, Haryadi S. Gunawi.",
    web: "https://www.usenix.org/conference/osdi20/presentation/hao",
    conference: "OSDI",
    year: "2020",
  },
  {
    title:
      "OpenFraming: Open-sourced Tool for Computational Framing Analysis of Multilingual Data.",
    authors:
      "Vibhu Bhatia, Vidya Prasad Akavoor, Sejin Paik, Lei Guo, Mona Jalal, Alyssa Smith, David Assefa Tofu, Edward Edberg Halim, Yimeng Sun, Margrit Betke, Prakash Ishwar and Derry Tanti Wijaya.",
    web: "https://aclanthology.org/2021.emnlp-demo.28/",
    conference: "EMNLP",
    year: "2021",
  },
  {
    title:
      "Detecting Frames in News Headlines and Lead Images in U.S. Gun Violence Coverage.",
    authors:
      "Isidora Tourni, Lei Guo, Taufiq Daryanto, Fabian Zhafransyah, Edward Edberg Halim, Mona Jalal, Boqi Chen, Sha Lai, Hengchang Hu, Margrit Betke, Prakash Ishwar and Derry Tanti Wijaya.",
    web: "https://aclanthology.org/2021.findings-emnlp.339/",
    conference: "EMNLP",
    year: "2021",
  },
];
function App() {
  return (
    <div>
      <Contact />
      <Intro />
      <Publications />
      <Footer />
    </div>
  );
}

function Contact() {
  return (
    <div className="container contact">
      <div className="zoom">
        <img className="logo" src="images/mid_edod_sm_fix.jpg" alt="edward" />
      </div>
      <div>
        <h1 className="title">Edward Edberg Halim</h1>
        <br></br>
        <h2>PhD Student</h2>
        <h2>Department of Computer Science</h2>
        {/* <h2>
          {" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.cs.wisc.edu/"
          >
            Department of Computer Science
          </a>
        </h2> */}

        <h2>University of Wisconsin, Madison</h2>
        {/* <h2>
          {" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.wisc.edu/"
          >
            University of Wisconsin, Madison
          </a>
        </h2> */}
        <br></br>
        {/* <br></br> */}
        {/* <p>
          <i class="fa fa-fw fa-map-marker"></i>
          &nbsp;Hayward, California, USA
        </p> */}
        <p>
          <i class="fa fa-fw fa-envelope"></i>&nbsp;edwardedberg@cs.wisc.edu
        </p>
        <p>
          <i class="fa fa-fw fa-github"></i>{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/edward-edberg"
          >
            Github
          </a>
        </p>
        <p>
          <i class="fa fa-fw fa-graduation-cap"></i>{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://scholar.google.com/citations?user=dz1mEQIAAAAJ&hl=en"
          >
            Google Scholar
          </a>
        </p>
        <p>
          <i class="fa fa-fw fa-instagram"></i>{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/edwardedberg/"
          >
            Instagram
          </a>
        </p>
        {/* <p>
          <i class="fa fa-fw fa-file"></i>{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="./files/cv_edward_edberg_halim_2024.pdf"
          >
            CV
          </a>
        </p> */}
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className="container intro">
      <h1>👋 Hello, I'm Edward</h1>
      <p>
        I'm a PhD student in the&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.cs.wisc.edu/"
        >
          Department of Computer Science
        </a>
        &nbsp;at the&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.wisc.edu/"
        >
          University of Wisconsin, Madison
        </a>
        &nbsp;under the guidance of&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://swamittannu.com/"
        >
          Prof. Swamit Tannu
        </a>
        . My main interests are in the intersection of{" "}
        <b>Quantum Computing Systems and Machine Learning</b> to build the
        next-generation Fault Tolerant Quantum Computer. I'm currently exploring{" "}
        <b>Neutral Atom Quantum Computing Readout</b>. Before starting PhD program at UW-Madison, I worked
        with&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://people.cs.uchicago.edu/~haryadi/"
        >
          Prof. Haryadi Gunawi
        </a>
        &nbsp;from UChicago,&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://derrywijaya.github.io/web/"
        >
          Prof. Derry Wijaya
        </a>
        &nbsp;from Boston University, &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://huaicheng.github.io/"
        >
          Prof. Huaicheng Li
        </a>
        &nbsp;from CMU / Virginia Tech, and&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://pages.cs.wisc.edu/~mgliu/"
        >
          Prof. Ming Liu
        </a>
        &nbsp;from UW-Madison.
      </p>
      <p>
        I love sharing my experience and mentoring students. Feel free to
        contact me if you want to chat about futuristic stuffs, PhD journey,
        business, or life in general. 😊
      </p>
    </div>
  );
}

function Publications() {
  return (
    <div className="container">
      <h1>📚 Publications</h1>
      {pubs.map((pub) => (
        <Publication pubObj={pub} key={pub.title}></Publication>
      ))}
    </div>
  );
}

function Publication(props) {
  const isPaper = props.pubObj.web;
  console.log(isPaper);
  return (
    <div className="pub">
      <p>
        <b>
          <i>{props.pubObj.title}</i>
        </b>
      </p>
      <p>{props.pubObj.authors}</p>
      <p>
        <b>
          {props.pubObj.conference} {props.pubObj.year}
        </b>
        &nbsp;
        <a target="_blank" rel="noopener noreferrer" href={props.pubObj.web}>
          [pdf]
        </a>
        &nbsp;
        {/* {isPaper && props.pubObj.web} */}
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div className="container">
      <footer>© 2023 Edward Edberg Halim. All rights reserved.</footer>
    </div>
  );
}
export default App;
