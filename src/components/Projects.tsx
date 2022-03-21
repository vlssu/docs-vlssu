import Link from "@docusaurus/Link";
import React from "react";
import styles from "../css/projects.module.css";

const projects: Project[] = [
  {
    title: "VLssuSkin",
    description:
      "VLssu下的皮肤站文档，让你更容易、实时的找到你需要的内容",
    link: "/vlssuskin",
  },
];
/**<Link className={styles.projectGitHub} to={`https://github.com/${project.repo}`}>*/
function Project(project: Project) {
  return (
    <div className={styles.project}>
      <div className={styles.flex}>
        <Link className={styles.projectGitHub}>
          {project.title}
        </Link>
        <p>{project.description}</p>
      </div>
      <div>
        <Link className="button button--primary" to={project.link}>
          Go
        </Link>
      </div>
    </div>
  );
}

export default function Projects(): JSX.Element {
  return (
    <section className={styles.projects}>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

interface Project {
  title: string;
  description: string;
  repo: string;
  link: string;
}
