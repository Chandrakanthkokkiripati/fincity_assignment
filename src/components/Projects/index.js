import { Component } from "react";
import ProjectItem from "../ProjectItem";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

let initialProjectList = [
  {
    id: 1,
    projectName: "Project Name",
    projectDescription:
      "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
    projectImgUrl:
      "https://res.cloudinary.com/drjim6cqm/image/upload/v1704431418/pexels-elly-fairytale-3823207_1_e38y1n.png",
  },
  {
    id: 2,
    projectName: "Project Name",
    projectDescription:
      "What was your role, your deliverables, if the project was personal, freelancing.",
    projectImgUrl:
      "https://res.cloudinary.com/drjim6cqm/image/upload/v1704431424/Rectangle_7_zqxq2t.png",
  },
  {
    id: 3,
    projectName: "Project Name",
    projectDescription:
      "You can also add in this description the type of the project, if it was for web, mobile, electron.",
    projectImgUrl:
      "https://res.cloudinary.com/drjim6cqm/image/upload/v1704431429/Rectangle_7_1_ffrs1q.png",
  },
];

class Projects extends Component {
  state = {
    projectList: initialProjectList,
    inputProjectName: "",
    projectImgUrl: "",
    inputProjectDescription: "",
  };

  onChangeProjectname = (e) => {
    this.setState({ inputProjectName: e.target.value });
  };

  onChangeProjectlink = (e) => {
    this.setState({ projectImgUrl: e.target.value });
  };

  onChangeProjectdescription = (e) => {
    this.setState({ inputProjectDescription: e.target.value });
  };

  submitProjectDetails = (event) => {
    event.preventDefault();
    const { inputProjectName, inputProjectLink, inputProjectDescription } =
      this.state;
    const projectDetails = {
      id: uuidv4(),
      projectName: inputProjectName,
      projectLink: inputProjectLink,
      projectDescription: inputProjectDescription,
    };
    this.setState((prevState) => ({
      projectList: [...prevState.projectList, projectDetails],
      projectName: "",
      projectLink: "",
      projectDescription: "",
    }));
  };
  render() {
    const {
      inputProjectName,
      projectImgUrl,
      inputProjectDescription,
      projectList,
    } = this.state;

    return (
      <div className="projects-bg-container" id="projectsSection">
        <h1 className="project-heading">Add Project</h1>
        <hr />
        <form onSubmit={this.submitProjectDetails} className="form-container">
          <div className="input-container">
            <label className="label" htmlFor="project">
              Project Name
            </label>
            <input
              className="input-field"
              type="text"
              id="project"
              value={inputProjectName}
              onChange={this.onChangeProjectname}
            />
          </div>
          <div className="input-container">
            <label className="label" htmlFor="projectLink">
              Project link
            </label>
            <input
              className="input-field"
              type="text"
              id="projectLink"
              value={projectImgUrl}
              onChange={this.onChangeProjectlink}
            />
          </div>
          <div className="input-container">
            <label className="label" htmlFor="description">
              Description
            </label>
            <textarea
              type="text"
              name="description"
              className="textarea-field"
              rows="7"
              id="description"
              cols="30"
              value={inputProjectDescription}
              onChange={this.onChangeProjectdescription}
            />
          </div>
          <button className="submit-btn" type="submit">
            Add
          </button>
        </form>
        <div className="project-list-container">
          <h1 className="project-heading">Projects</h1>
          <hr />
          <ul className="project-list">
            {projectList.map((eachProject) => (
              <ProjectItem project={eachProject} key={eachProject.id} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
