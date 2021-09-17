import * as React from "react"
import { Button } from 'react-bootstrap'
import { navigate } from 'gatsby'
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss'

const IndexPage = () => {
  return (
    <Layout>
      <div fluid className="hero"> 
        <div className="hero-container">
          <h1 className="display-3">B2 Models</h1>
          <p className="lead">Fulfil your dream of becoming a model.</p>
          <Button variant="danger" onClick={() => navigate('/contact')}>Get Scouted!</Button>{' '}
        </div>
      </div>
    </Layout>

  )
}

export default IndexPage
