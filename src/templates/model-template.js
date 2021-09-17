import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from "../components/layout"
import { Container, Row, Col } from "react-bootstrap"
import '../styles/index.scss'
import {FaInstagram} from 'react-icons/fa'

export default function ModelTemplate({ data }) {
    data = data.strapiGalleries
    const model_picture = data.portrait.localFile.childImageSharp.gatsbyImageData;
    console.log(data)
    return (
        <Layout>
            <Container>
                <Row>
                    <Col sm={8}>
                        <GatsbyImage className="model-template-image" image={model_picture} alt="Model"/>
                    </Col>
                    <Col className="model-template">
                        <h3>{data.FullName}</h3>
                        <p><b>Height</b> {data.Height}</p>
                        <p><b>Hair</b> {data.HairColour}</p>
                        <p><b>Eyes</b> {data.EyeColor}</p>
                        <p><b>Measurements</b> {data.BustWaistHips}</p>
                        <a href={"https://www." + data.Instagram}><FaInstagram aria-label="Ig-logo" className="instagram"/></a>
                    </Col>
                </Row>
            </Container>
        </Layout>

    )
}

export const query = graphql`
  query($slug: String!) {
    strapiGalleries(id: {eq: $slug}) {
        FullName
        Height
        HairColour
        EyeColor
        BustWaistHips
        Instagram
        portrait{localFile{childImageSharp{gatsbyImageData}}}
    }
  }
`

