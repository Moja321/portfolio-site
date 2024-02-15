import Projects from "./projects";
import { projects } from "../../data";
//import PushupCounter from "./increment";
import "../sass/style.css";

function ProjectsBody() {
  console.log(Projects);

  return (
    // <div style={{ height: "100vh" }}>
    <div>
      {/* <h1 className="projects-title">Current Projects</h1> */}
      <br />
      <div className="cards">
        {projects.map((project, index) => {
          return (
            <Projects
              key={index}
              name={project.name}
              img={project.img}
              description={project.description}
              tech={project.tech}
              index={index}
              url={project.url}
              github={project.github}
            />
          );
        })}
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default ProjectsBody;
