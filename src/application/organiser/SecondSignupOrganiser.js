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
  Image
} from '@sketchpixy/rubix';

@withRouter
export default class SecondSignupOrganiser extends React.Component {
  constructor(props) {

      super(props);
      this.state = {
        usr: username.value,
        email: email.value,
        password:password.value,
        confirmation:confirmation.value,
        adresse:'',
        city: '',
        country: '',
        birthday: '',
        phone: '',
        photo: '',
        erreurAdresse:'',
        erreurCity:'',
        erreurCountry:'',
        erreurPhone:'',
        erreurPhoto:'',
        erreurBirthday:''

    }

          this.adresseChange = this.adresseChange.bind(this);
        this.cityChange = this.cityChange.bind(this);
          this.countryChange = this.countryChange.bind(this);
            this.birthdayChange = this.birthdayChange.bind(this);
            this.phoneChange = this.phoneChange.bind(this);

          this.back = this.back.bind(this);
    }
    adresseChange(event) {
  this.setState({adresse: event.target.value});
}
cityChange(event) {
this.setState({city: event.target.value});
}
countryChange(event) {
this.setState({country: event.target.value});
}
birthdayChange(event) {
this.setState({birthday: event.target.value});
}
phoneChange(event) {
this.setState({phone: event.target.value});
}
  back(e) {
     if(this.state.adresse !='')
{
 this.setState({ erreurAdresse: '' })
}
    if (this.state.adresse =='' )
{
 this.setState({ erreurAdresse: 'vérifier adresse' })
}
if (this.state.city !='' )
{
 this.setState({ erreurCity: '' })
}
if (this.state.city =='' )
{
 this.setState({ erreurCity: 'vérifier city' })
}
if (this.state.country !='' )
{
 this.setState({ erreurCountry: '' })
}
if (this.state.country =='' )
{
 this.setState({ erreurCountry: 'vérifier country' })
}
if (this.state.phone.length == 8 )
{
 this.setState({ erreurPhone: '' })
}
if (this.state.phone.length != 8 )
{
 this.setState({ erreurPhone: 'vérifier Phone' })
}
if(this.state.photo !='')
{
  this.setState({erreurPhoto: ''})
}
if(this.state.photo=='')
{
  this.setState({erreurPhoto: 'vérifier Photo'})
}
if(this.validateBirthday())
{
  this.setState({erreurBirthday: ''})
}
if(this.validateBirthday()==false)
{
  this.setState({erreurBirthday: 'vérifier birthday'})
}

    e.preventDefault();

  const username2 = this.state.usr;
  const email2 = this.state.email;
  const password2 = this.state.password;
  const confirmation2 = this.state.confirmation;

 if((this.state.city !='' ) && (this.state.country !='' ) && (this.state.adresse !='' ) && (this.state.phone.length ==8) && (this.validateBirthday()==true) && (this.state.photo!=''))

{
    e.stopPropagation();
    let form = new FormData();
              form.append('name', username2)
       		    form.append('email', email2)
       		    form.append('password', password2)
              form.append('phone', this.state.phone)

               form.append('adresse', this.state.adresse)
               form.append('city', this.state.city)
               form.append('country', this.state.country)
               form.append('birthday', this.state.birthday)

               form.append('photo', this.state.photo)
               console.log(form.get('adresse'));


              axios.post(
                                'http://sportapp.astrolabs.io/api/registerOrganizer',form,
                                {headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  }}
                            )
                            .then(function (response) {

                                                console.log("it works");
                                                console.log(response);

                                            })
                                            .catch(function (error) {

                                                console.log(error);
                            console.log("it works 2 ");
                              });

  }
}
validateBirthday(birth) {
  var birth=this.state.birthday;
    var re = /(^(((0[1-9]|1[0-9]|2[0-8])[-](0[1-9]|1[012]))|((29|30|31)[-](0[13578]|1[02]))|((29|30)[-](0[4,6,9]|11)))[-](19|[2-9][0-9])\d\d$)|(^29[-]02[-](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;
    return re.test(birth);
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
   handleNavigation() {
    this.props.router.push('/ltr/ContactInformation');
  }
    componentDidMount() {
    $('#my-awesome-dropzone').dropzone({
      paramName: "file", // The name that will be used to transfer the file
      maxFilesize: 2, // MB
      accept: (file, done) => {
        done();
        this.state.photo = file
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

                                      <FormGroup controlId='adresse'>
                                        <InputGroup bsSize='large'>
                                          <InputGroup.Addon>
                                            <Icon glyph='icon-fontello-location-6' />
                                          </InputGroup.Addon>
                                          <FormControl autoFocus type='text' value={this.state.adresse} onChange={this.adresseChange} className='border-focus-blue' placeholder='Adresse' />
                                        </InputGroup>
                                      </FormGroup>
                                  </Form>
                                  <p style={{color:'red'}}>{this.state.erreurAdresse}</p>
                                       <FormGroup controlId='city'>
                                        <InputGroup bsSize='large'>
                                          <InputGroup.Addon>
                                            <Icon glyph='icon-fontello-location-6' />
                                          </InputGroup.Addon>
                                          <FormControl autoFocus type='text' value={this.state.city} onChange={this.cityChange} className='border-focus-blue' placeholder='City' />
                                        </InputGroup>
                                      </FormGroup>
                                      <p style={{color:'red'}}>{this.state.erreurCity}</p>
                                      <FormGroup controlId='country'>
                                        <InputGroup bsSize='large'>
                                          <InputGroup.Addon>
                                            <Icon glyph='icon-fontello-location-6' />
                                          </InputGroup.Addon>
                                          <FormControl autoFocus type='text' value={this.state.country} onChange={this.countryChange} className='border-focus-blue' placeholder='Country' />
                                        </InputGroup>
                                      </FormGroup>
                                      <p style={{color:'red'}}>{this.state.erreurCountry}</p>
                                           <FormGroup controlId='birthday'>
                                        <InputGroup bsSize='large'>
                                          <InputGroup.Addon>
                                            <Icon glyph='icon-fontello-calendar-5' />
                                          </InputGroup.Addon>
                                          <FormControl autoFocus type='text' value={this.state.birthday} onChange={this.birthdayChange} className='border-focus-blue' placeholder='Birthday' />
                                        </InputGroup>
                                      </FormGroup>
                                      <p style={{color:'red'}}>{this.state.erreurBirthday}</p>
                                       <FormGroup controlId='phone'>
                                        <InputGroup bsSize='large'>
                                          <InputGroup.Addon>
                                            <Icon glyph='icon-fontello-phone-3' />
                                          </InputGroup.Addon>
                                          <FormControl autoFocus type='text' value={this.state.phone} onChange={this.phoneChange} className='border-focus-blue' placeholder='Phone' />
                                        </InputGroup>
                                      </FormGroup>
                                      <p style={{color:'red'}}>{this.state.erreurPhone}</p>
                                   <Form action='/dropzone/file-upload'
                            className='dropzone'
                            style={styles.dropz}
                            id='my-awesome-dropzone'>
                      </Form>
                                <p style={{color:'red'}}>{this.state.erreurPhoto}</p>
                                  <p>Accept term and conditions</p>
                                  <Button block type='submit' id='twitter-btn' lg  onClick={::this.back} style={{background:'pink'}}>

                                    <span>Create account</span>
                                  </Button>
                                </Col>
                              </Row>

                            </Grid>


                        </div>
                          <div>
                            Already have an account? <Link to={::this.getPath('Login')}>Login</Link>
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
const styles = {
  dropz:{
minHeight:10
  }
}
