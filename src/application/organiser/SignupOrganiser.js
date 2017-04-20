import React from 'react';
import classNames from 'classnames';
import { Link, withRouter } from 'react-router';

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
  Image
} from '@sketchpixy/rubix';

@withRouter
export default class SignupOrganiser extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          username: '',
          email: '',
          password: '',
          confirmation: '',
          erreurusername:'',
          erreurpassword:'',
          erreurEmail:''
    }

          this.usernameChange = this.usernameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
          this.passwordChange = this.passwordChange.bind(this);
            this.confirmationChange = this.confirmationChange.bind(this);

          this.back = this.back.bind(this);
    }
    usernameChange(event) {
  this.setState({username: event.target.value});
}
emailChange(event) {
this.setState({email: event.target.value});
}
passwordChange(event) {
this.setState({password: event.target.value});
}
confirmationChange(event) {
this.setState({confirmation: event.target.value});
}


  back(e) {
    e.preventDefault();


    e.stopPropagation();

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
  validateEmail(emaill) {
  var emaill=this.state.email;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emaill);
}
   handleNavigation() {
if((this.state.username !='') && (this.state.password == this.state.confirmation) && (this.state.password !='') && (this.validateEmail()))
{
  this.props.router.push('/ltr/Organiser/SecondSignupOrganiser');
 }
 if(this.state.username !='')
{
 this.setState({ erreurusername: '' })
}
if (this.state.username =='' )
{
 this.setState({ erreurusername: 'vérifier username' })
}
if((this.state.password == this.state.confirmation) && (this.state.password !=''))
 {
  this.setState({ erreurpassword: '' })
}
 if(this.state.password != this.state.confirmation)
{
this.setState({ erreurpassword: 'vérifier password ' })  
}
if (this.state.password =='' )
{
 this.setState({ erreurpassword: 'vérifier password' })
}
if (this.state.confirmation =='' )
{
 this.setState({ erreurpassword: 'vérifier password' })
}
if(this.validateEmail())
{
  this.setState({erreurEmail: '' })
}
if(this.validateEmail()==false)
{
  this.setState({erreurEmail: 'vérifier email' })
}
  }
    componentDidMount() {
    $('#my-awesome-dropzone').dropzone({
      paramName: "file", // The name that will be used to transfer the file
      maxFilesize: 2, // MB
      accept: (file, done) => {
        done();
      }
    });
  }
  render() {

    return (
      <div id='auth-container' className='login' style={{background:"#fff"}}>
        <div id='auth-row'>
          <div id='auth-cell' >
            <Grid>
              <Row>
                <Col sm={6} smOffset={3} xs={10} xsOffset={1} >
                  <PanelContainer controls={false} >
                    <Panel>
                      <PanelBody style={{padding: 0}} >
                        <div className='text-center  fg-white'style={{background:"#281454"}}>
                          <h3 style={{margin: 0, padding: 25}}>Signup Organiser</h3>
                        </div>
                        <div className=' fg-black50 text-center' style={{padding: 25, paddingTop: 12.5,background:'#fff'}}>
                            <Grid>
                              <Row>
                                <Col xs={12}>

                                  <Form onSubmit={::this.back}>
                                      <FormGroup controlId='username'>
                                        <InputGroup bsSize='large'>
                                          <InputGroup.Addon>
                                            <Icon glyph='icon-fontello-user' />
                                          </InputGroup.Addon>
                                          <FormControl autoFocus type='text' value={this.state.username} onChange={this.usernameChange} className='border-focus-blue' placeholder='Username' />
                                        </InputGroup>
                                      </FormGroup>
                                      <p style={{color:'red'}}>{this.state.erreurusername}</p>
                                      <FormGroup controlId='email'>
                                        <InputGroup bsSize='large'>
                                          <InputGroup.Addon>
                                            <Icon glyph='icon-fontello-mail' />
                                          </InputGroup.Addon>
                                          <FormControl type='email' value={this.state.email} onChange={this.emailChange} className='border-focus-blue' placeholder='emailaddress' />
                                        </InputGroup>
                                      </FormGroup>
                                      <p style={{color:'red'}}>{this.state.erreurEmail}</p>
                                      <FormGroup controlId='password'>
                                        <InputGroup bsSize='large'>
                                          <InputGroup.Addon>
                                            <Icon glyph='icon-fontello-key' />
                                          </InputGroup.Addon>
                                          <FormControl type='password' value={this.state.password} onChange={this.passwordChange} className='border-focus-blue' placeholder='Password' />
                                        </InputGroup>
                                      </FormGroup>
                                      <p style={{color:'red'}}>{this.state.erreurpassword}</p>
                                      <FormGroup controlId='confirmation'>
                                        <InputGroup bsSize='large'>
                                          <InputGroup.Addon>
                                            <Icon glyph='icon-fontello-key' />
                                          </InputGroup.Addon>
                                          <FormControl type='password' value={this.state.confirmation} onChange={this.confirmationChange} className='border-focus-blue' placeholder='confirmation password' />
                                        </InputGroup>
                                      </FormGroup>
 
                                  </Form>

                                  <Button block type='submit' id='twitter-btn' lg  onClick={::this.handleNavigation} style={{background:'pink'}}>

                                    <span>continue</span>
                                  </Button>
                                </Col>
                              </Row>

                            </Grid>


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
