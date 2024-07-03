/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/github.jpg";

const imageAltText = "Github Profile";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Course Selling Application 🎉",
    description:
      "Built a FullStack CourseSellingWebsite. Where all the CURD Operations can be performed on the Courses",
    url: "https://github.com/falgun143/SoftwareProject",
  },
  {
    title: "Music Blocks Chat Bot",
    description:
      "This is a Chatbot created using Opensource llm model (llama2) for the Musicblocks Organisation",
    url: "https://github.com/falgun143/MusicBlocksChatBot",
  },
  {
    title: "React Projects",
    description:
      "Collection of All my Personal React Projects",
    url: "https://github.com/falgun143/ReactProjects",
  },
  {
    title: "Open AI Chat Bot",
    description: "Chatbot using the OpenAI models using langchain and Cassandradb for vectorstore",
    url: "https://github.com/falgun143/ChatBotUsingCassandra",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div className="Content">
        <div style={{ minWidth:"50%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container" >
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
