import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/projectcard"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      randomWorkoutGenerator: file(relativePath: { eq: "RandomWorkoutGenerator.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      projectTwoImage: file(relativePath: { eq: "day66-travel.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      projectThreeImage: file(relativePath: { eq: "day68-happy-cat.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const projects = [
    {
      title: "Random Workout Generator",
      description: "A little random workout generator I built to provide people workout inspiration. It was born from a friend working from home saying she was doing random workout exercises based on a card she drew from a deck. It was built with React and hosted on GitHub pages. It contains an option for a random workout exercise, random yoga pose, or an advanced mode.",
      demoUrl: "https://janeschwab.co/random-workout-generator/",
      sourceUrl: "https://github.com/schwabthedeck/random-workout-generator",
      image: data.randomWorkoutGenerator.childImageSharp.fluid
    },
    {
      title: "Project Two Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida nec justo ut cursus. Ut pretium interdum turpis, id consectetur risus.",
      url: "https://www.github.com",
      image: data.projectTwoImage.childImageSharp.fluid
    },
    {
      title: "Project Three Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida nec justo ut cursus. Ut pretium interdum turpis, id consectetur risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
      url: "https://www.github.com",
      image: data.projectThreeImage.childImageSharp.fluid

    }
  ]
  return (
    <Layout>
      <SEO title="About" />
      <h1>Projects</h1>
      {projects.map((project, index) =>
        <ProjectCard key={index} project={project}></ProjectCard>
      )}
    </Layout>
  )
}

export default ProjectsPage
