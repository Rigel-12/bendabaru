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
import image from "../images/asli.jpg";

const imageAltText = "Picture of Luqman Nasution smiling at the aboriginal people.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Featured in Local Newspaper👏",
    description:
      "Featured in Local Newspaper",
    url: "https://www.nst.com.my/news/nation/2020/07/606401/students-win-3-categories-international-stem-competition",
    },
  {
    title: " My LinkedIn Profile",
    description:
      "My LinkedIn profile where I share my experiences and connect with others in the community.",
    url: "https://www.linkedin.com/in/luqmannasution/",
  },
  {
    title: "CHEPAT Initiatives",
    description:
      "A student-led non-profit initiative that aims to provide aid for the UiTM Pasir Gudang Chemical Engineering students.",
    url: "https://www.linkedin.com/company/chepat2023/",
  },
  {
    title: "CERYA Project",
    description:
      "A youth-led organisation aspiring to bridge Mental Health and Sex Education among youths.",
    url: "https://www.linkedin.com/company/ceria-project-movement/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
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
