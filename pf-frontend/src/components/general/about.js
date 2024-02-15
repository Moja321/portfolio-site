export const About = () => {
  return (
    <div className="about-container" style={{ paddingTop: "30px" }}>
      <div className="about">
        <h4>
          Hello there, my name is Umar Roshidi and I am a full stack web
          developer. This website acts as my online portfolio where I showcase
          my personal projects for you to browse through.
        </h4>
        <br />
        <h4>
          My skills include :
        </h4>
        {/* <div className="card">
        <img className="card-img" src="https://drive.google.com/uc?id=1kvDwAgI8BjK7-wTLNJkjKV6POleNtDDk" />
        </div> */}
        <br />
        <div class="cards-logo">
          <div class="wrapper">
            <img className="tech-img" style={{height: "80%", width: "80%"}} src="https://raw.githubusercontent.com/Moja321/pf-images/main/html-css-js-logo.png" />
            <div class="overlay">
              <div class="content">
                {/* Slide in <span> From the Top </span> */}
                <div class="subcontent">
                  <p style={{fontSize : "80%"}}>JavaScript/CSS/HTML</p>
                  <img className="stars-img" src="https://raw.githubusercontent.com/Moja321/pf-images/main/3Star.png" />
                  {/* 3 stars */}
                </div>                
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "60%", width: "60%"}} src="https://raw.githubusercontent.com/Moja321/pf-images/main/npm-logo.png.png" />
            <div class="overlay">
              <div class="content">
                <div class="subcontent">
                  <p style={{fontSize : "75%"}}>Node Package Manager</p>
                  <img className="stars-img" src="https://raw.githubusercontent.com/Moja321/pf-images/main/2.5Star.png" />
                  {/* 2.5 stars */}
                </div>  
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "100%", width: "100%"}} src="https://raw.githubusercontent.com/Moja321/pf-images/main/node.js-logo.png" />
            <div class="overlay">
              <div class="content">
                {/* Slide in <span> From the Top </span> */}
                <div class="subcontent">
                  <p>Node.JS</p>
                  <img className="stars-img" src="https://raw.githubusercontent.com/Moja321/pf-images/main/2.5Star.png" />
                  {/* 2.5 */}
                </div> 
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "80%", width: "80%"}} src="https://raw.githubusercontent.com/Moja321/pf-images/main/expressjs-logo.png" />
            <div class="overlay">
              <div class="content">
                {/* Slide in <span> From the Top </span> */}
                <div class="subcontent">
                  <p>Express.JS</p>
                  <img className="stars-img" src="https://raw.githubusercontent.com/Moja321/pf-images/main/2.5Star.png" />
                  {/* 2.5 */}
                </div> 
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "80%", width: "80%"}} src="https://raw.githubusercontent.com/Moja321/pf-images/main/vscode-logo.png" />
            <div class="overlay">
              <div class="content">
                <div class="subcontent">
                  <p style={{fontSize : "90%"}}>Visual Studio Code</p>
                  <img className="stars-img" src="https://raw.githubusercontent.com/Moja321/pf-images/main/3Star.png" />
                  {/* 3 */}
                </div>  
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "100%", width: "100%"}} src="https://raw.githubusercontent.com/Moja321/pf-images/main/bash-logo.png" />
            <div class="overlay">
              <div class="content">
                <div class="subcontent">
                  <p>BASH</p>
                  <img className="stars-img" src="https://raw.githubusercontent.com/Moja321/pf-images/main/2.5Star.png" />
                  {/* 2.5 */}
                </div>  
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "100%", width: "100%"}} src="https://raw.githubusercontent.com/Moja321/pf-images/main/react-logo.png" />
            <div class="overlay">
              <div class="content">
                <div class="subcontent">
                  <p>React</p>
                  <img className="stars-img" src="https://raw.githubusercontent.com/Moja321/pf-images/main/2.5Star.png" />
                  {/* 2.5 */}
                </div>  
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "80%", width: "80%"}} src="https://raw.githubusercontent.com/Moja321/pf-images/main/mongoDB-logo.png" />
            <div class="overlay">
              <div class="content">
                <div class="subcontent">
                  <p>MongoDB</p>
                  <img className="stars-img" src="//raw.githubusercontent.com/Moja321/pf-images/main/2Star.png" />
                  {/* 2 */}
                </div>  
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "100%", width: "100%"}} src="https://raw.githubusercontent.com/Moja321/pf-images/main/postgresql-logo.png" />
            <div class="overlay">
              <div class="content">
                <div class="subcontent">
                  <p>PostgreSQL</p>
                  <img className="stars-img" src="//raw.githubusercontent.com/Moja321/pf-images/main/2Star.png" />
                  {/* 2 */}
                </div>  
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "100%", width: "100%"}} src="https://raw.githubusercontent.com/Moja321/pf-images/main/mysql-logo.png" />
            <div class="overlay">
              <div class="content">
                <div class="subcontent">
                  <p>MySQL</p>
                  <img className="stars-img" src="//raw.githubusercontent.com/Moja321/pf-images/main/2Star.png" />
                  {/* 2 */}
                </div>  
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "90%", width: "90%"}} src="https://raw.githubusercontent.com/Moja321/pf-images/main/git-logo.png" />
            <div class="overlay">
              <div class="content">
                <div class="subcontent">
                  <p>Git</p>
                  <img className="stars-img" src="https://raw.githubusercontent.com/Moja321/pf-images/main/2.5Star.png" />
                  {/* 2.5 */}
                </div>  
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "100%", width: "100%"}} src="https://raw.githubusercontent.com/Moja321/pf-images/main/github-logo.png" />
            <div class="overlay">
              <div class="content">
                <div class="subcontent">
                  <p>GitHub</p>
                  <img className="stars-img" src="https://raw.githubusercontent.com/Moja321/pf-images/main/2.5Star.png" />
                  {/* 2.5 */}
                </div>  
              </div>
            </div>
          </div>          
          <div class="wrapper">
            <img className="tech-img" style={{height: "80%", width: "80%"}} src="https://raw.githubusercontent.com/Moja321/pf-images/main/c%23-logo.png" />
            <div class="overlay">
              <div class="content">
                <div class="subcontent">
                  <p>C#</p>
                  <img className="stars-img" src="https://raw.githubusercontent.com/Moja321/pf-images/main/3Star.png" />
                  {/* 3 */}
                </div>  
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "80%", width: "80%"}} src="https://raw.githubusercontent.com/Moja321/pf-images/main/unity-logo.png" />
            <div class="overlay">
              <div class="content">
                <div class="subcontent">
                  <p>Unity</p>
                  <img className="stars-img" src="https://raw.githubusercontent.com/Moja321/pf-images/main/3Star.png" />
                  {/* 3 */}
                </div>  
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "70%", width: "70%"}} src="https://raw.githubusercontent.com/Moja321/pf-images/main/sass-logo.png" />
            <div class="overlay">
              <div class="content">
                <div class="subcontent">
                  <p>S.A.S.S</p>
                  <img className="stars-img" src="//raw.githubusercontent.com/Moja321/pf-images/main/2Star.png" />
                  {/* 2 */}
                </div>  
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "90%", width: "90%"}} src="https://raw.githubusercontent.com/Moja321/pf-images/main/py-logo.png" />
            <div class="overlay">
              <div class="content">
                <div class="subcontent">
                  <p>Python</p>
                  <img className="stars-img" src="//raw.githubusercontent.com/Moja321/pf-images/main/2Star.png" />
                  {/* 2 */}
                </div>  
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "70%", width: "70%"}} src="https://raw.githubusercontent.com/Moja321/pf-images/main/php-logo.png" />
            <div class="overlay">
              <div class="content">
                <div class="subcontent">
                  <p>PHP</p>
                  <img className="stars-img" src="//raw.githubusercontent.com/Moja321/pf-images/main/2Star.png" />
                  {/* 2 */}
                </div>  
              </div>
            </div>
          </div>
          <div class="wrapper">
            <img className="tech-img" style={{height: "70%", width: "70%"}} src="https://raw.githubusercontent.com/Moja321/pf-images/main/bootstrap-logo.png" />
            <div class="overlay">
              <div class="content">
                <div class="subcontent">
                  <p>Bootstrap</p>
                  <img className="stars-img" src="//raw.githubusercontent.com/Moja321/pf-images/main/2Star.png" />
                  {/* 2 */}
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
