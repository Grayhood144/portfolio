import React from 'react';
import './Page.css';

const Projects = () => {
  const projects = [
    {
      title: 'Exercise Tracker',
      description: 'React Native app to track exercises by time and reps.',
      link: 'https://github.com/Grayhood144/exercise-tracker2'
    },
    {
      title: 'Quiz App',
      description: 'Interactive quiz with multi-answer questions.',
      link: 'https://github.com/Grayhood144/QuizApp'
    },
    {
      title: 'Todo App',
      description: 'A simple and clean React todo list app.',
      link: 'https://github.com/Grayhood144/todo-app'
    }
  ];

  return (
    <section className="page projects">
      <h2>My Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
