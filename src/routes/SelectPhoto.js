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
export default class SelectPhoto extends React.Component {
  back(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.router.goBack();
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
    this.props.router.push('/ltr/AboutLocation');
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
                          <h3 style={{margin: 0, padding: 25}}>You're nearly ready to go live on Lilly</h3>
                        </div>
                        <div className=' fg-black50 text-center' style={{padding: 25, paddingTop: 12.5,background:'#fff'}}>
                            <Grid>
                              <Row>
                                <Col xs={12} sm={6} smCollapseRight style={{paddingTop:30}}>
                                 <p>Just few more details</p>
                                 <Image src='/imgs/app/gallery/tumblr_n6es0tRk5w1st5lhmo1_1280-thumb.jpg' width='200' height='200' />
                                  <p>Make shure to select good quality photo with hight resolution</p>
                                  <p>We recommand 1200*1000 pixel minimum</p>

                                </Col>
                                <Col xs={12} sm={6}>
                                 
                                  
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
