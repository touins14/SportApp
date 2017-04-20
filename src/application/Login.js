import React from 'react';
import classNames from 'classnames';
import { Link, withRouter } from 'react-router';
import axios from 'axios'

import {
  Row,
  Col,
  Icon,
  Grid,
  Form,
  Badge,
  Panel,
  Button,
  PanelBody,
  FormGroup,
  LoremIpsum,
  InputGroup,
  FormControl,
  ButtonGroup,
  ButtonToolbar,
  PanelContainer,
} from '@sketchpixy/rubix';

@withRouter
export default class Login extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          email: '',
          password: '',
          erreurEmail:''
    }

          this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);


    }
    emailChange(event) {
  this.setState({email: event.target.value});
}
passwordChange(event) {
this.setState({password: event.target.value});
}

validateEmail(emaill) {
  var emaill=this.state.email;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emaill);
}

  back(e) {

       if ((this.validateEmail()) && (this.state.email !=''))
  {
  this.setState({erreurEmail: '' })
}
    if ((this.validateEmail()==false) && (this.state.email==''))
  {
  this.setState({erreurEmail: 'vérifier email' })
}
    if ((this.validateEmail()) && (this.state.email!='')) {
    e.preventDefault();
    const email = this.state.email;
  const password = this.state.password;

var self=this;


    e.stopPropagation();


    let form = new FormData();
       		    form.append('email', email)
       		    form.append('password', password)
              axios.post(
                                'http://sportapp.astrolabs.io/api/authenticate',form,
                                {headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  }}
                            )
                            .then(function (response) {
                              if(response.data.token){
                                localStorage.setItem('token', JSON.stringify(response.data.token));
                                localStorage.setItem('role', JSON.stringify(response.data.role));
                                localStorage.setItem('name', response.data.name);
                                localStorage.setItem('photo', response.data.photo);
                                localStorage.setItem('userid', JSON.stringify(response.data.id));


                                var tk=localStorage.getItem('token');
                                var role=localStorage.getItem('role');
                                console.log(role);






                              }

                                                console.log("it works");
                                                console.log(response);
                                                if (role.includes("ADMIN"))

                                                self.props.router.push('/ltr/Admin/DashboardAdmin');
                                                if (role.includes("ORGANIZER"))

                                                self.props.router.push('/ltr/Organiser/DashboardOrganiser');
                                                else
                                                console.log("mahouch admin");

                                            })
                                            .catch(function (error) {

                                                console.log(error);
                            console.log("it works 2 ");
                              });


  }
}
  componentDidMount() {
    $('html').addClass('authentication');
  }


  componentWillUnmount() {
    $('html').removeClass('authentication');
  }

  getPath(path) {
    var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
    path = `/${dir}/${path}`;
    return path;
  }

  render() {
    return (
      <div id='auth-container' className='login'>
        <div id='auth-row'>
          <div id='auth-cell'>
            <Grid>
              <Row>
                <Col sm={4} smOffset={4} xs={10} xsOffset={1} collapseLeft collapseRight>
                  <PanelContainer controls={false}>
                    <Panel>
                      <PanelBody style={{padding: 0}}>
                        <div className='text-center bg-darkblue fg-white'>
                          <h3 style={{margin: 0, padding: 25}}>Sign in</h3>
                        </div>
                        <div className='bg-hoverblue fg-black50 text-center' style={{padding: 12.5}}>
                          <div>You need to sign in for those awesome features</div>
                          <div style={{marginTop: 12.5, marginBottom: 12.5}}>
                            <Button id='facebook-btn' lg bsStyle='darkblue' type='submit' onClick={::this.back}>
                              <Icon glyph='icon-fontello-facebook' />
                              <span>Sign in <span className='hidden-xs'>with facebook</span></span>
                            </Button>
                          </div>

                        </div>
                        <div>
                          <div className='text-center' style={{padding: 12.5}}>
                            or use your account
                          </div>
                          <div style={{padding: 25, paddingTop: 0, paddingBottom: 0, margin: 'auto', marginBottom: 25, marginTop: 25}}>
                            <Form onSubmit={::this.back}>
                              <FormGroup controlId='emailaddress'>
                                <InputGroup bsSize='large'>
                                  <InputGroup.Addon>
                                    <Icon glyph='icon-fontello-mail' />
                                  </InputGroup.Addon>
                                  <FormControl autoFocus type='email' value={this.state.email} onChange={this.emailChange} className='border-focus-blue' placeholder='support@sketchpixy.com' />
                                </InputGroup>
                              </FormGroup>
                               <p>{this.state.erreurEmail}</p>
                              <FormGroup controlId='password'>
                                <InputGroup bsSize='large'>
                                  <InputGroup.Addon>
                                    <Icon glyph='icon-fontello-key' />
                                  </InputGroup.Addon>
                                  <FormControl type='password' value={this.state.password} onChange={this.passwordChange} className='border-focus-blue' placeholder='password' />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <Grid>
                                  <Row>
                                    <Col xs={6} collapseLeft collapseRight style={{paddingTop: 10}}>
                                      <Link to={::this.getPath('Organiser/SignupOrganiser')}>Create a organiser account</Link>
                                    </Col>
                                    <Col xs={6} collapseLeft collapseRight className='text-right'>
                                      <Button outlined lg type='submit' bsStyle='blue' onClick={::this.back}>Login</Button>
                                    </Col>
                                  </Row>
                                </Grid>
                              </FormGroup>
                            </Form>
                          </div>
                        </div>
                      </PanelBody>
                    </Panel>
                  </PanelContainer>
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
