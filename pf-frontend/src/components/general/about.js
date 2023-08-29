export const About = () => {
  return (
    <div className="" style={{ height: "100vh", marginTop: "30px" }}>
      <div className="about">
        <h4>
          Hello there, my name is Umar Roshidi and I am a full stack web
          developer. This website acts as my online portfolio where I showcase
          my personal projects for you to browse through.
        </h4>
        <br />
        <h4>
          My skills include : HTML5, CSS, JavaScript, EJS, React, Node, Express,
          MongoDB, Postgres, Git, Github, Linux server, WSL2, Python, PHP, C#,
          Unity
        </h4>
        {/* <div className="card">
        <img className="card-img" src="https://drive.google.com/uc?id=1kvDwAgI8BjK7-wTLNJkjKV6POleNtDDk" />
        </div> */}
        <br />
        <div class="cards-logo">
          <div class="wrapper">
            <img className="tech-img" style={{height: "80%", width: "80%"}} src="https://drive.google.com/uc?id=1kvDwAgI8BjK7-wTLNJkjKV6POleNtDDk" />
            <div class="overlay">
              <div class="content">
                {/* Slide in <span> From the Top </span> */}
                <div class="subcontent">
                  <p>JavaScript/CSS/HTML</p>
                  <img className="stars-img" src="https://drive.google.com/uc?id=1WHP8R38NcN6SkhcT2SafnsrDXbug1STk" />
                </div>                
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "60%", width: "60%"}} src="https://drive.google.com/uc?id=1ierJSUulYxo8f5PW-HF0N-IpgZqv4_5i" />
            <div class="overlay">
              <div class="content">
                <div class="subcontent">
                  <p>Node Package Manager</p>
                  <img className="stars-img" src="https://drive.google.com/uc?id=1MPqQlHJppQ5Cr3PBKtX1JLU74jNOtXhl" />
                </div>  
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "100%", width: "100%"}} src="https://drive.google.com/uc?id=1N6Yntccl8vIMP8cNb7Rq6jWj9DNrBYWM" />
            <div class="overlay">
              <div class="content">
                {/* Slide in <span> From the Top </span> */}
                <div class="subcontent">
                  <p>Node.JS</p>
                  <img className="stars-img" src="https://drive.google.com/uc?id=1MPqQlHJppQ5Cr3PBKtX1JLU74jNOtXhl" />
                </div> 
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "80%", width: "80%"}} src="https://drive.google.com/uc?id=1g8WXweXvkeK9s5JibEiPf8TFszZQ3Ely" />
            <div class="overlay">
              <div class="content">
                <div class="subcontent">
                  <p>Visual Studio Code</p>
                  <img className="stars-img" src="https://drive.google.com/uc?id=1WHP8R38NcN6SkhcT2SafnsrDXbug1STk" />
                </div>  
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "100%", width: "100%"}} src="https://drive.google.com/uc?id=1Tk-oK4PORWY2FKdQVxhavzF5RuYx8hRp" />
            <div class="overlay">
              <div class="content">
                <div class="subcontent">
                  <p>BASH</p>
                  <img className="stars-img" src="https://drive.google.com/uc?id=1MPqQlHJppQ5Cr3PBKtX1JLU74jNOtXhl" />
                </div>  
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "100%", width: "100%"}} src="https://drive.google.com/uc?id=1Wgri5sRRa3LiOuxoXlZRXu03E3Y4BLaN" />
            <div class="overlay">
              <div class="content">
                <div class="subcontent">
                  <p>React</p>
                  <img className="stars-img" src="https://drive.google.com/uc?id=1MPqQlHJppQ5Cr3PBKtX1JLU74jNOtXhl" />
                </div>  
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "80%", width: "80%"}} src="https://drive.google.com/uc?id=1jmCSJmgIv7X4vwiWVKpV7Ubvx81IOynz" />
            <div class="overlay">
              <div class="content">
                <div class="subcontent">
                  <p>MongoDB</p>
                  <img className="stars-img" src="https://drive.google.com/uc?id=114K2kmMwTMU-wCwSrAE-_43I_Gi0iiIr" />
                </div>  
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "100%", width: "100%"}} src="https://drive.google.com/uc?id=1qyhEPHzqyD-mAc5xENGTBbtoD3LE-kyx" />
            <div class="overlay">
              <div class="content">
                <div class="subcontent">
                  <p>PostgreSQL</p>
                  <img className="stars-img" src="https://drive.google.com/uc?id=114K2kmMwTMU-wCwSrAE-_43I_Gi0iiIr" />
                </div>  
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "100%", width: "100%"}} src="https://drive.google.com/uc?id=19gAps1RKkIJotzK2nhIL0HNqesNU3Oad" />
            <div class="overlay">
              <div class="content">
                <div class="subcontent">
                  <p>MySQL</p>
                  <img className="stars-img" src="https://drive.google.com/uc?id=114K2kmMwTMU-wCwSrAE-_43I_Gi0iiIr" />
                </div>  
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "90%", width: "90%"}} src="https://drive.google.com/uc?id=1tSaw5i158GeCxmFNGdPOi7H-NvvxXzXO" />
            <div class="overlay">
              <div class="content">
                <div class="subcontent">
                  <p>Git</p>
                  <img className="stars-img" src="https://drive.google.com/uc?id=1MPqQlHJppQ5Cr3PBKtX1JLU74jNOtXhl" />
                </div>  
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "100%", width: "100%"}} src="https://drive.google.com/uc?id=1YWFD2Gv3CtRO59_mHAFXf9mzW_wIzr9f" />
            <div class="overlay">
              <div class="content">
                <div class="subcontent">
                  <p>GitHub</p>
                  <img className="stars-img" src="https://drive.google.com/uc?id=1MPqQlHJppQ5Cr3PBKtX1JLU74jNOtXhl" />
                </div>  
              </div>
            </div>
          </div>          
          <div class="wrapper">
            <img className="tech-img" style={{height: "80%", width: "80%"}} src="https://drive.google.com/uc?id=1K0Kkz0wndsko4syS3XJk96Wn_xRV8Nr2" />
            <div class="overlay">
              <div class="content">
                <div class="subcontent">
                  <p>C#</p>
                  <img className="stars-img" src="https://drive.google.com/uc?id=1WHP8R38NcN6SkhcT2SafnsrDXbug1STk" />
                </div>  
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "80%", width: "80%"}} src="https://drive.google.com/uc?id=1WDzn3nzkmkx0Sq3LRHA4aK5ILkeSsxei" />
            <div class="overlay">
              <div class="content">
                <div class="subcontent">
                  <p>Unity</p>
                  <img className="stars-img" src="https://drive.google.com/uc?id=1WHP8R38NcN6SkhcT2SafnsrDXbug1STk" />
                </div>  
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "70%", width: "70%"}} src="https://drive.google.com/uc?id=1sxTteZuvr2FgSxDTsZmL7IgNSOlkZOBP" />
            <div class="overlay">
              <div class="content">
                <div class="subcontent">
                  <p>S.A.S.S</p>
                  <img className="stars-img" src="https://drive.google.com/uc?id=114K2kmMwTMU-wCwSrAE-_43I_Gi0iiIr" />
                </div>  
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "90%", width: "90%"}} src="https://drive.google.com/uc?id=1CuC0ZOgAM7GA_vIR-Ad57Rz3wakIm1Kr" />
            <div class="overlay">
              <div class="content">
                <div class="subcontent">
                  <p>Python</p>
                  <img className="stars-img" src="https://drive.google.com/uc?id=114K2kmMwTMU-wCwSrAE-_43I_Gi0iiIr" />
                </div>  
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "70%", width: "70%"}} src="https://drive.google.com/uc?id=1trQkOgTg3YaY-drXZ-fZ2TzNdGR9bwMx" />
            <div class="overlay">
              <div class="content">
                <div class="subcontent">
                  <p>PHP</p>
                  <img className="stars-img" src="https://drive.google.com/uc?id=114K2kmMwTMU-wCwSrAE-_43I_Gi0iiIr" />
                </div>  
              </div>
            </div>
          </div>          
        </div>
        {/* <img className="tech-img" src="https://drive.google.com/uc?id=1N6Yntccl8vIMP8cNb7Rq6jWj9DNrBYWM" />
        <img src="https://drive.google.com/uc?id=1iU0BSKlWWwSqWjQ_ME3qtRXE0tWr7Fpl" />
        <br />
        <h4>
          This website was made with React, Node, Express and MongoDB. If you
          would like to see the GitHub repo please click the below button.
        </h4>
        <br />
        <a
          href="https://github.com/Moja321/portfolio-site"
          className="btn btn-success"
          target="_blank"
          rel="noreferrer"
        >
          GitHub repo
        </a> */}
      </div>
    </div>
  );
};
