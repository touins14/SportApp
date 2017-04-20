import ReactDOM from 'react-dom';

import React, { Component } from 'react';
import {
  Row,
  Col,
  Nav,
  Tab,
  Icon,
  Grid,
  Panel,
  NavItem,
  MenuItem,
  PanelLeft,
  PanelBody,
  LoremIpsum,
  PanelRight,
  PanelHeader,
  PanelFooter,
  NavDropdown,
  PanelContainer,
  PanelTabContainer,
  Table,
  Image,
  Button,
  Badge
} from '@sketchpixy/rubix';

class ClientAllCompetitionAdmin extends Component {
    componentDidMount() {
    var links = document.getElementsByClassName('gallery-1');
    $('.gallery-1').unbind('click').bind('click', function(event) {
      blueimp.Gallery(links, {
        index: $(this).get(0),
        event: event
      });
    });
  }
  render() {
    return (
    
      <PanelContainer>
        <Panel>
          <PanelHeader style={{background:'#43496a'}} >
            <Grid>
              <Row>
                <Col xs={12} className='fg-white'>
                  <h4>ALL compétition</h4>
                
                </Col>
              </Row>
            </Grid>
          </PanelHeader>
          <PanelBody>
            <Grid className='gallery-item'>
            <Row>

  <Col sm={6} collapseRight>
            <PanelContainer style={{marginLeft:-20}}>
              <Panel >
                <PanelBody >
 <Col xs={4}>
                <a className='gallery-1 gallery-item-link' href={`/imgs/app/gallery/tumblr_n6es0tRk5w1st5lhmo1_1280.jpg`} title={this.props.title} >
                    <Image responsive src={`/imgs/app/gallery/tumblr_n6es0tRk5w1st5lhmo1_1280-thumb.jpg`} alt={this.props.title} width='200' height='150'/>
                    </a>
               </Col>
                 <Col xs={8}>
                   <Badge style={{background:'#43496a',width:300,height:95}}>
                              <h4 style={{marginTop:35,color:'#fff'}}> Championnat amateur Tunisie </h4>
                              
                             
                            </Badge>
               </Col>
                </PanelBody>
              </Panel>
            </PanelContainer>
          </Col>
          <Col sm={6}>
            <PanelContainer style={{marginLeft:-25}}>
              <Panel>
                <PanelBody>
 <Col xs={4}>
                <a className='gallery-1 gallery-item-link' href={`/imgs/app/gallery/tumblr_n6es0tRk5w1st5lhmo1_1280.jpg`} title={this.props.title} >
                    <Image responsive src={`/imgs/app/gallery/tumblr_n6es0tRk5w1st5lhmo1_1280-thumb.jpg`} alt={this.props.title} width='200' height='150'/>
                    </a>
               </Col>
                 <Col xs={8}>
                   <Badge style={{background:'#43496a',width:300,height:95}}>
                              <h4 style={{marginTop:35,color:'#fff'}}> Championnat amateur Tunisie </h4>
                              
                             
                            </Badge>
               </Col>
                </PanelBody>
              </Panel>
            </PanelContainer>
          </Col>
  














              </Row>
              hahhahaha7
              hahhahaha7hahahha
              hahahahah
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
  
        );
  }
}
export default ClientAllCompetitionAdmin;