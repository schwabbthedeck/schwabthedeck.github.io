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
      announcementsWebPart: file(relativePath: { eq: "AnnouncementsWebPartScreenShot.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fancyTileWebPart: file(relativePath: { eq: "FancyTileExampleScreenShot.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gatsbyStarter: file(relativePath: { eq: "GatsbyStarter.png" }) {
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
      title: "Gatsby Starter",
      description: "This Gatsby starter is a minimalist style portfolio site primarily developed with developers in mind. It contains a page to show off projects, your resume, and blog posts. It also has support for code blocks in the blog posts. This is the base I am using for this site.",
      demoUrl: "https://gatsby-min-dev-blog-portfolio.netlify.app/",
      sourceUrl: "https://github.com/schwabthedeck/gatsby-min-dev-blog-portfolio",
      image: data.gatsbyStarter.childImageSharp.fluid

    },
    {
      title: "Random Workout Generator",
      description: "A little random workout generator I built to provide people workout inspiration. It was born from a friend working from home saying she was doing random workout exercises based on a card she drew from a deck. It was built with React and hosted on GitHub pages. It contains an option for a random workout exercise, random yoga pose, or an advanced mode.",
      demoUrl: "https://schwabthedeck.github.io/random-workout-generator/",
      sourceUrl: "https://github.com/schwabthedeck/random-workout-generator",
      image: data.randomWorkoutGenerator.childImageSharp.fluid
    },
    {
      title: "Fancy Tile SharePoint App",
      description: "The Fancy Tiles App is a SharePoint App that installs the Fancy Tiles web part that renders list items into 'tiles'. The tiles are based on a configuration list in the app web. The web part can be configured to have text overlays on hover from all directions. Instructions on how to download, install, and configure are in the source GitHub repository.",
      sourceUrl: "https://github.com/schwabthedeck/FancyTiles",
      image: data.fancyTileWebPart.childImageSharp.fluid
    },
    {
      title: "Announcements SharePoint App",
      description: "The Announcements SharePoint App is a SharePoint app that installs the Announcements web part. It is designed to display announcements from an out-of-the-box announcements list in SharePoint. The web part relies on the out-of-the-box columns that are associated with the announcements list template. This is why the web part can only be used with a list that was created using the announcements list template. Instructions on how to download, install, and configure are in the source GitHub repository.",
      sourceUrl: "https://github.com/schwabthedeck/AnnouncementsWebPart",
      image: data.announcementsWebPart.childImageSharp.fluid
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
