import react from "../assets/images/techstack/react.png";
import tailwind from "../assets/images/techstack/tailwind.png";
import js from "../assets/images/techstack/js.png";
import java from "../assets/images/techstack/java.png";
import html from "../assets/images/techstack/html.png";
import css from "../assets/images/techstack/css.png";
import bootstrap from "../assets/images/techstack/bootstrap.png";
import sass from "../assets/images/techstack/sass.png";
import vscode from "../assets/images/techstack/vscode.png";
import git from "../assets/images/icon/github.png";
import github from "../assets/images/techstack/github.png";
import npm from "../assets/images/techstack/npm.png";
import next from "../assets/images/techstack/nextJS.png";
import typescript from "../assets/images/techstack/typescript.png";

const TechStack = () => {
  return (
    <div className="h-[calc(100vh_+_20rem)] w-full relative overflow-hidden bg-[#482ff7]">
      <h1 className="2xl:text-[8rem] font-Glimer-Outlined font-semibold xl:text-[7rem] lg:text-[6rem] md:text-[5rem] sm:text-[4rem] vvs:text-[3rem] text-[2.5rem] absolute text-center sm:bottom-[40px] xl:bottom-[40px] bottom-[100px] opacity-100 leading-normal text-white/60">
        Languages, Frameworks & Tools
      </h1>

      {/* nextJS */}
      {/* <img
        src={next}
        alt="tech"
        className="tech 2xl:h-30 2xl:w-30 xl:h-34 xl:w-34 lg:h-28 lg:w-28 md:h-24 md:w-24 sm:h-20 sm:w-20 vvs:h-16 vvs:w-16 w-16 absolute 2xl:top-[260px] 2xl:left-[300px] 1xl:top-[240px] 1xl:left-[300px] 1/2xl:top-[220px] 1/2xl:left-[300px] xl:top-[260px] xl:left-[300px] lg:top-[200px] lg:left-[290px] md:top-[200px] md:left-[200px] sm:top-[300px] sm:left-[180px] vvs:top-[300px] vvs:left-[120px] top-[340px] left-[60px] opacity-1 rotate-[10deg]"
      /> */}

      {/* npm */}
      <img
        src={npm}
        alt="tech"
        className="tech 2xl:h-28 2xl:w-28 xl:h-30 xl:w-30 lg:h-20 lg:w-24 md:h-24 md:w-26 sm:h-18 sm:w-18 vvs:h-14 vvs:w-14 w-12 h-12 absolute 2xl:top-[260px] 2xl:right-[300px]  1xl:top-[240px] 1xl:right-[300px] 1/2xl:top-[220px] 1/2xl:right-[300px]   xl:top-[260px] xl:right-[300px] lg:top-[200px] lg:right-[290px] md:top-[200px] md:right-[200px] sm:top-[300px] sm:right-[180px] vvs:top-[300px] vvs:right-[120px] top-[340px] right-[60px] opacity-1 rotate-[10deg]"
      />

      {/* reactJS */}
      <img
        src={react}
        alt="tech"
        className="tech 2xl:h-36 2xl:w-36 xl:h-32 xl:w-32 lg:h-28 lg:w-28 md:h-24 md:w-24 sm:h-20 sm:w-20 vvs:h-16 vvs:w-16 w-16 absolute 2xl:top-[260px] 2xl:left-[300px] 1xl:top-[240px] 1xl:left-[300px] 1/2xl:top-[220px] 1/2xl:left-[300px] xl:top-[260px] xl:left-[300px] lg:top-[200px] lg:left-[290px] md:top-[200px] md:left-[200px] sm:top-[300px] sm:left-[180px] vvs:top-[300px] vvs:left-[120px] top-[340px] left-[60px] opacity-1 rotate-[10deg]"
      />

      {/* tailwind */}
      <img
        src={tailwind}
        alt="tech"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-20 md:w-20 sm:h-16 sm:w-16 vvs:h-14 vvs:w-14 w-12 h-12 absolute 2xl:top-[460px] 2xl:left-[400px] 1xl:top-[400px] 1xl:left-[350px] 1/2xl:top-[400px] 1/2xl:left-[360px] xl:top-[420px] xl:left-[360px] lg:top-[360px] lg:left-[320px] md:top-[340px] md:left-[230px] sm:top-[440px] sm:left-[100px] vvs:top-[440px] vvs:left-[40px] top-[490px] left-[40px] opacity-1 rotate-[-10deg]"
      />

      {/* js */}
      <img
        src={js}
        alt="tech"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-20 md:w-20 sm:h-16 sm:w-16 vvs:h-14 vvs:w-14 w-12 h-12 absolute 2xl:top-[420px] 2xl:right-[750px] 1xl:top-[400px] 1xl:right-[750px] 1/2xl:top-[270px] 1/2xl:right-[680px] xl:top-[510px] xl:right-[650px] lg:top-[410px] lg:right-[450px] md:top-[450px] md:right-[350px] sm:top-[450px] sm:right-[350px] vvs:top-[490px] vvs:right-[150px] top-[430px] right-[150px] opacity-1 rotate-[4deg]"
      />

      {/* java */}
      <img
        src={java}
        alt="java_image"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24 lg:h-20 lg:w-20 md:h-20 md:w-20 sm:h-16 sm:w-16 vvs:h-14 vvs:w-14 w-12 h-12 absolute left-1/2 transform-translate-x-1/2 top-1/2 transform-translate-y-1/2 opacity-1 rotate-[-50deg]"
      />

      {/* html */}
      <img
        src={html}
        alt="tech"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24 lg:h-20 lg:w-20 md:h-20 md:w-20 sm:h-16 sm:w-16 vvs:h-14 vvs:w-14 w-12 h-12 absolute 2xl:left-[260px] 2xl:bottom-[600px] 1xl:left-[270px] 1xl:bottom-[540px] 1/2xl:left-[260px] 1/2xl:bottom-[510px] xl:left-[260px] xl:bottom-[540px] lg:left-[260px] lg:bottom-[480px] md:left-[220px] md:bottom-[480px] sm:left-[120px] sm:bottom-[480px] vvs:left-[20px] vvs:bottom-[460px] left-[20px] bottom-[460px] opacity-1 rotate-45"
      />

      {/* css */}
      <img
        src={css}
        alt="tech"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24 lg:h-20 lg:w-20 md:h-20 md:w-20 sm:h-16 sm:w-16 vvs:h-14 vvs:w-14 w-12 h-12 absolute 2xl:right-[370px] 2xl:top-[520px] 1xl:right-[380px] 1xl:top-[550px] 1/2xl:right-[370px] 1/2xl:top-[570px] xl:right-[370px] xl:top-[570px] lg:right-[310px] lg:top-[520px] md:right-[210px] md:top-[570px] sm:right-[240px] sm:top-[570px] vvs:right-[30px] vvs:top-[570px] right-[30px] top-[520px] opacity-1 rotate-[-300deg]"
      />

      {/* bootstrap */}
      <img
        src={bootstrap}
        alt="tech"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-20 md:w-20 sm:h-16 sm:w-16 vvs:h-14 vvs:w-14 w-12 h-12 absolute 2xl:right-[620px] 2xl:top-[350px]  xl:right-[520px] xl:top-[350px] lg:right-[400px] lg:top-[250px] md:right-[280px] md:top-[300px] sm:right-[280px] sm:top-[300px] vvs:right-[80px] vvs:top-[200px] right-[80px] top-[220px] opacity-1 rotate-[-48deg]"
      />

      {/* typescript */}
      <img
        src={typescript}
        alt="tech"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24 lg:h-20 lg:w-20 md:h-20 md:w-20 sm:h-18 sm:w-16 vvs:h-14 vvs:w-14 w-12 h-18 absolute 2xl:left-[660px] 2xl:top-[320px] xl:left-[560px] xl:top-[380px] lg:left-[440px] lg:top-[280px] md:left-[320px] md:top-[310px] sm:left-[320px] sm:top-[310px] vvs:left-[120px] vvs:top-[180px] left-[120px] top-[260px] rotate-[-48deg]"
      />

      {/* sass */}
      <img
        src={sass}
        alt="tech"
        className="tech 2xl:h-28 2xl:w-28 xl:w-24 xl:h-24 lg:h-20 lg:w-20 md:h-20 md:w-20 sm:h-16 sm:w-16 vvs:h-14 vvs:w-14 w-12 h-12 absolute 2xl:left-[260px] 2xl:bottom-[480px] xl:left-[260px] xl:bottom-[400px] lg:left-[180px] lg:bottom-[340px] md:left-[220px] md:bottom-[530px] sm:left-[80px] sm:bottom-[530px] vvs:left-[70px] vvs:bottom-[390px] left-[70px] bottom-[390px] opacity-1 rotate-[48deg]"
      />

      {/* github */}
      <img
        src={github}
        alt="tech"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-20 md:w-20 sm:h-16 sm:w-16 vvs:h-14 vvs:w-14 w-12 h-12 absolute 2xl:right-[420px] 2xl:top-[240px] xl:right-[420px] xl:top-[240px] lg:right-[320px] lg:top-[360px] md:right-[250px] md:top-[400px] sm:right-[250px] sm:top-[380px] vvs:right-[55px] vvs:top-[300px] right-[40px] top-[420px] opacity-1 rotate-[18deg]"
      />

      {/* vscode */}
      <img
        src={vscode}
        alt="tech"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24 lg:h-20 lg:w-20 md:h-20 md:w-20 sm:h-16 sm:w-16 vvs:h-14 vvs:w-14 w-12 h-12 absolute 2xl:left-[520px] 2xl:top-[240px] xl:left-[520px] xl:top-[240px] lg:left-[420px] lg:top-[360px] md:left-[350px] md:top-[400px] sm:left-[350px] sm:top-[380px] vvs:left-[155px] vvs:top-[300px] left-[140px] top-[420px] opacity-1 rotate-[18deg]"
      />

      {/* git */}
      <img
        src={git}
        alt="tech"
        className="tech 2xl:h-28 2xl:w-28 xl:h-24 xl:w-24  lg:h-20 lg:w-20 md:h-20 md:w-20 sm:h-16 sm:w-16 vvs:h-14 vvs:w-14 w-12 h-12 absolute  2xl:top-[140px] 2xl:right-[620px] xl:top-[440px] xl:right-[320px] lg:top-[480px] lg:right-[210px] md:top-[480px] md:right-[210px] sm:top-[400px] sm:right-[140px] vvs:top-[220px] vvs:right-[240px] top-[220px] right-[240px] opacity-1 rotate-[18deg]"
      />
    </div>
  );
};

export default TechStack;
