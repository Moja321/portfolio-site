export const About = () => {
  return (
    <div className="" style={{ height: "100vh", marginTop: "20px" }}>
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
        </a>
      </div>
    </div>
  );
};
