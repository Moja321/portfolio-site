const Projects = (props) => {
  return (
    <div className="card">
      {/* Here's the Project: */}
      <div>
        <h3>{props.name}</h3>
        <br />
        {/* <h4>Img:{props.img}</h4> */}
        <img className="card-img" src={props.img} />
        <h6>{props.description}</h6>
        <br />
        <h6>Made with : {props.tech}</h6>
        <br />
        {/* <b>{props.index}</b> */}
        <a href={props.url} className="btn btn-success" target="_blank" rel="noreferrer">
          Go to site
        </a>
        <br />
        <br />
        <a href={props.github} className="btn btn-success" target="_blank" rel="noreferrer">
          Github Repo
        </a>
      </div>
    </div>
  );
};

export default Projects;
