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
export default class AboutLocation extends React.Component {
   constructor(props) {
    super(props);
    this.geocode = null;
    this.routingmap = null;
    this.state = {
      routeslist: []
    };
  }

  geoCode(address) {
    GMaps.geocode({
      address: address,
      callback: (results, status) => {
        if (status == 'OK') {
          var latlng = results[0].geometry.location;
          this.geocode.setCenter(latlng.lat(), latlng.lng());
          this.geocode.addMarker({
            lat: latlng.lat(),
            lng: latlng.lng(),
            infoWindow: {
              content: '<div><strong>Address:</strong> '+results[0].formatted_address+'</div>'
            }
          });
        }
      }
    });
  }
   componentDidMount() {
   
    (() => {
      this.geocode = new GMaps({
        scrollwheel: false,
        div: '#geocode',
        zoom: 16,
        lat: -12.043333,
        lng: -77.028333
      });
      this.geoCode('New York, NY, USA');
    })();

   

  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.geoCode($('#address').val());
  }

  getPath(path) {
    var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
    path = `/${dir}/${path}`;
    return path;
  }
  handleNavigation() {
    this.props.router.push('/ltr/SelectPhoto');
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
                          <h3 style={{margin: 0, padding: 25}}>About your location</h3>
                        </div>
                        <div className=' fg-black50 text-center' style={{padding: 25, paddingTop: 12.5,background:'#fff'}}>
                            <Grid>
                              <Row>
                                <Col xs={12} sm={6} smCollapseRight style={{paddingTop:30}}>
                                 <p>Enter your adress</p>
                                 <Image src='/imgs/app/gallery/tumblr_n6es0tRk5w1st5lhmo1_1280-thumb.jpg' width='200' height='200' />
                                  
                                  <p>we just need a little more information to complete page</p>

                                </Col>
                                <Col xs={12} sm={6}>
                                  <MapContainer id='geocode' name='Geocoding'>
                                      <Form onSubmit={::this.handleSubmit}>
                                        <FormGroup>
                                          <InputGroup>
                                            <FormControl type='text' id='address' placeholder='Address' defaultValue='New York, NY, USA' />
                                            <InputGroup.Button className='plain'>
                                              <Button outlined onlyOnHover type='submit' bsStyle='darkgreen45'>search</Button>
                                            </InputGroup.Button>
                                          </InputGroup>
                                        </FormGroup>
                                      </Form>
                                  </MapContainer>
                                  <Button block type='submit' id='twitter-btn'  onClick={::this.handleNavigation} 
                                          style={{background:'#f0ad4e',width:100,height:40,color:'#000000',float:'right'}}>
                                    
                                    <span>Next</span>
                                  </Button>
                                </Col>
                                
            
            
            
          
                              </Row>
        
                            </Grid>

                            
                        </div>
                        <div className=' fg-black50 text-center' style={{background:'#ddd',height:30}}>
                          
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

class MapContainer extends React.Component {
  render() {
    return (
      
        <Panel>
          <PanelBody style={{padding: 25}}>
            {this.props.children}
            <div id={this.props.id} style={{height: 300}}></div>
          </PanelBody>
        </Panel>
      
    );
  }
}

/*export default class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.geocode = null;
    this.routingmap = null;
    this.state = {
      routeslist: []
    };
  }

  geoCode(address) {
    GMaps.geocode({
      address: address,
      callback: (results, status) => {
        if (status == 'OK') {
          var latlng = results[0].geometry.location;
          this.geocode.setCenter(latlng.lat(), latlng.lng());
          this.geocode.addMarker({
            lat: latlng.lat(),
            lng: latlng.lng(),
            infoWindow: {
              content: '<div><strong>Address:</strong> '+results[0].formatted_address+'</div>'
            }
          });
        }
      }
    });
  }

  componentDidMount() {
   
    (() => {
      this.geocode = new GMaps({
        scrollwheel: false,
        div: '#geocode',
        zoom: 16,
        lat: -12.043333,
        lng: -77.028333
      });
      this.geoCode('New York, NY, USA');
    })();

   

  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.geoCode($('#address').val());
  }

  
  render() {
    return (
      <div>
        <Row>
          
          <Col sm={6}>
            
            <MapContainer id='geocode' name='Geocoding'>
              <Form onSubmit={::this.handleSubmit}>
                <FormGroup>
                  <InputGroup>
                    <FormControl type='text' id='address' placeholder='Address' defaultValue='New York, NY, USA' />
                    <InputGroup.Button className='plain'>
                      <Button outlined onlyOnHover type='submit' bsStyle='darkgreen45'>search</Button>
                    </InputGroup.Button>
                  </InputGroup>
                </FormGroup>
              </Form>
            </MapContainer>
            
          </Col>
        </Row>
       
      </div>
    );
  }
}*/
