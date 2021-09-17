import React from 'react'
import Layout from '../components/layout'
import { Container, Col } from "react-bootstrap"
import '../styles/index.scss'

import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


const Models = () => {

    const data = useStaticQuery(graphql`
    query{
        allStrapiGalleries {
          nodes {
            portrait {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 400)
                }
              }
            }
            FullName
            Height
            HairColour
            BustWaistHips
            EyeColor
            id
          }
        }
      }
`);
      console.log(data.allStrapiGalleries.nodes);
    return (
        <Layout>
            <Container fluid>
            <div className="gallery">
                <div className="row">
                    {data.allStrapiGalleries.nodes.map(arr => {
                    const imgg = arr.portrait.localFile.childImageSharp.gatsbyImageData;
                    const dynamic_link = arr.FullName.replace(/ /g, "") + arr.id.replace( /^\D+/g, ''); // replace all leading non-digits with nothing
                    return(
                        <Col md="4" sm="12">
                            <Link to={dynamic_link}><div className="model">
                                <GatsbyImage className="model-image" image={imgg} alt="Model"/>
                                    <div class="model-overlay"></div>
                                    <div className="model-details fadeIn-bottom">
                                        <h3>{arr.FullName}</h3> 
                                        <p>Height: {arr.Height}</p>
                                        <p>Hair Colour: {arr.HairColour}</p>
                                        <p>Measurements: {arr.BustWaistHips}</p>
                                        <p>Eye Colour: {arr.EyeColor}</p>
                                    </div>
                                </div>
                            </Link>
                            <h3 className="model-name">{arr.FullName}</h3>
                        </Col>


                    )})}
                    </div>
                </div>
                </Container>
        </Layout>
    )
}



export default Models