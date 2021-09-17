import React from 'react'
import Layout from '../components/layout'
import { Container, Form, Card } from "react-bootstrap"
import '../styles/index.scss'



const Contact = () => {
    return (
        <Layout>
            <div className="form-div">
                <Container className="form-container"> 
                    <Card body className="form-card">
                        <form class="form-horizontal">
                        <fieldset>

                        <legend>Get Scouted</legend>

                        <div class="form-group">
                        <label class="col-md-4 control-label" for="fname" aria-label="fname">First Name</label>  
                        <div class="col-md-4">
                    
                        <span class="help-block">Enter your first name</span>  
                        </div>
                        </div>

                        <div class="form-group">
                        <label class="col-md-4 control-label" for="lname">Last Name</label>  
                        <div class="col-md-4">
                        <input id="lname" name="lname" type="text" placeholder="Doe" class="form-control input-md"  required=""/>
                        <span class="help-block">Enter your last name</span>  
                        </div>
                        </div>


                        <div class="form-group">
                        <label class="col-md-4 control-label" for="birth">Date of Birth</label>  
                        <div class="col-md-4">
                        <input id="birth" name="birth" type="text" placeholder="20-04-1996" class="form-control input-md"  required=""/>
                        <span class="help-block">Enter birthdate (dd-mm-yyyy)</span>  
                        </div>
                        </div>

                        
                        <div class="form-group">
                        <label class="col-md-4 control-label" for="email">Email</label>  
                        <div class="col-md-4">
                        <input id="email" name="email" type="text" placeholder="janedoe@xyz.com" class="form-control input-md"  required=""/>
                        <span class="help-block">Enter your email address</span>  
                        </div>
                        </div>

                        
                        <div class="form-group">
                        <label class="col-md-4 control-label" for="pnumber">Phone Number</label>  
                        <div class="col-md-4">
                        <input id="pnumber" name="pnumber" type="text" placeholder="(555) 555-5555" class="form-control input-md"/>
                        <span class="help-block">Enter your phone number</span>  
                        </div>
                        </div>

                        
                        <div class="form-group">
                        <label class="col-md-4 control-label" for="igram">Instagram</label>  
                        <div class="col-md-4">
                        <input id="igram" name="igram" type="text" placeholder="@janedoe" class="form-control input-md"/>
                        <span class="help-block">Enter your IG (optional)</span>  
                        </div>
                        </div>

                        
                        <div class="form-group">
                        <label class="col-md-4 control-label" for="height">Height</label>  
                        <div class="col-md-4">
                        <input id="height" name="height" type="text" placeholder="180 cm" class="form-control input-md"  required=""/>
                        <span class="help-block">Enter your height (cm)</span>  
                        </div>
                        </div>

                        <div class="form-group">
                        <label class="col-md-4 control-label" for="measurements">Measurements</label>  
                        <div class="col-md-4">
                        <input id="measurements" name="measurements" type="text" placeholder="80-60-82" class="form-control input-md"  required=""/>
                        <span class="help-block">Enter B-W-H (cm)</span>  
                        </div>
                        </div>

                        <div class="form-group">
                        <label class="col-md-4 control-label" for="gender">Gender</label>
                        <div class="col-md-4"> 
                            <label class="radio-inline" for="gender-0">
                            <input type="radio" name="gender" id="gender-0" value="1" checked="checked" style={{marginRight: 7}}/>
                            Male
                            </label> 
                            <label class="radio-inline" for="gender-1">
                            <input type="radio" name="gender" id="gender-1" value="2" style={{marginRight: 7}}/>
                            Female
                            </label> 
                            <label class="radio-inline" for="gender-2">
                            <input type="radio" name="gender" id="gender-2" value="3" style={{marginRight: 7}}/>
                            Other
                            </label>
                        </div>
                        </div>

                        <Form.Group controlId="pictures" className="mb-3">
                        <Form.Label>Selfies</Form.Label><br/>
                        <Form.Control type="file" multiple />
                        </Form.Group>
                        <button type="submit" class="btn btn-success btn-form">Submit</button>

                        </fieldset>
                        </form>
                    </Card>
                </Container>
            </div>
        </Layout>
    )
}

export default Contact