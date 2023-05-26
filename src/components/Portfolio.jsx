import React from "react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "A website was made for Marbel showroom.",
      imageUrl: "./marble.png"
    },
    {
      id: 2,
      title: "Project 2",
      description:
        "Blockchain was made where one can sell and buy different kind of food items.",
      imageUrl: "./buysell.png"
    },
    {
      id: 3,
      title: "Project 3",
      description:
        "A Blood donater registration app was made where donaters can register themselves.",
      imageUrl: "./img/todo.png"
    } /*,
    {
      id: 5,
      title: "Project 5",
      description: "A Weather app was made.",
      imageUrl: "./img/todo.png"
    },
    {
      id: 6,
      title: "Project 6",
      description: "A music player was made.",
      imageUrl: "./img/todo.png"
    }
    */
  ];

  return (
    <div id="portfolio">
      <h1>Portfolio</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <img src={project.imageUrl} alt={project.title} />
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
