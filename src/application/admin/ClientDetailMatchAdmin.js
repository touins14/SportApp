
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
} from '@sketchpixy/rubix';

class ClientDetailMatchAdmin extends Component {
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
                  <h4>Détails match</h4>
                
                </Col>
              </Row>
            </Grid>
          </PanelHeader>
          <PanelBody>
            <Grid className='gallery-item'>
              <Row>
                <Col xs={12}>
                <Col xs={6}>
                <Col xs={2}>
                </Col>
                <Col xs={8}>
                 <a className='gallery-1 gallery-item-link' href={`/imgs/app/gallery/tumblr_n6eszmeQMR1st5lhmo1_1280.jpg`} title={this.props.title} style={{marginTop:25,height:200}}>
                    <Image responsive src={`/imgs/app/gallery/tumblr_n6eszmeQMR1st5lhmo1_1280.jpg`} alt={this.props.title} width='200' height='150'/>
                    <h4 className='fg-darkgrayishblue75 hidden-xs' >Etoile Sprtif du sahel</h4>
                    
                 </a>
                 <h2 className='fg-darkgrayishblue75 hidden-xs'style={{marginTop:-55}} >3</h2>
                    
                 </Col>
                  <Col xs={2}>
                </Col>
                 </Col>
                        <Col xs={6}>
                <Col xs={2}>
                </Col>
                <Col xs={8}>
                 <a className='gallery-1 gallery-item-link' href={`/imgs/app/gallery/tumblr_n6eszmeQMR1st5lhmo1_1280.jpg`} title={this.props.title} style={{marginTop:25,height:200}}>    
                   <Image responsive src={`/imgs/app/gallery/tumblr_n6eszmeQMR1st5lhmo1_1280.jpg`} alt={this.props.title} width='200' height='150'/>
                   <h4 className='fg-darkgrayishblue75 hidden-xs' >Etoile Sprtif du sahel</h4>
                 </a>
                 <h2 className='fg-darkgrayishblue75 hidden-xs' style={{marginTop:-55}} >3</h2>
                 </Col>
                  <Col xs={2}>
                </Col>
                 </Col>
                 </Col>
                   <Col xs={12}>
                  
                        <Table bordered striped condensed>
                          <thead>
                            <tr>
                          
                              <td style={{background:'gray',color:'white'}} colSpan="3">First half</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={{width:400}}>5' but diago acosta</td>
                              <td>1-1</td>
                              <td style={{width:400}}> 12'carton rouge ferjeni sassi</td>

                            </tr>
                  
                     
                          </tbody>
                        </Table>
                                   <Table bordered striped condensed>
                          <thead>
                            <tr>
                          
                                     <td style={{background:'gray',color:'white'}} colSpan="3">Second half</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={{width:400}}>55' but bangoura</td>
                              <td rowSpan="2">3-0</td>
                              <td style={{width:400}}>55' but bangoura</td>

                            </tr>
                            <tr>
                              <td>55' but bangoura</td>
                              <td>55' but bangoura</td>
                            </tr>
                     
                          </tbody>
                        </Table>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
  
        );
  }
}
export default ClientDetailMatchAdmin;