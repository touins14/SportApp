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

class CurrentTouranement extends Component {
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
                  <h4>CurrentTouranement</h4>

                </Col>
              </Row>
            </Grid>
          </PanelHeader>
          <PanelBody>
           <Grid>
           <Row style={{marginTop:15}}>

           <Col xs={8}>
                      <div className="list-group">
        <a className="list-group-item list-group-item-action active">Classement</a>
  <li className="list-group-item justify-content-between">
    ESS
    <span className="badge badge-default badge-pill">14</span>
  </li>
  <li className="list-group-item justify-content-between">
    EST
    <span className="badge badge-default badge-pill">2</span>
  </li>
  <li className="list-group-item justify-content-between">
    CSS
    <span className="badge badge-default badge-pill">1</span>
  </li>
</div>
           </Col>
           <Col xs ={4}>
           <div className="list-group">
        <a className="list-group-item list-group-item-action active">Top Scorer</a>
  <li className="list-group-item justify-content-between">
    saber fathallah
    <span className="badge badge-default badge-pill">14</span>
  </li>
  <li className="list-group-item justify-content-between">
    lotfi lefi
    <span className="badge badge-default badge-pill">2</span>
  </li>
  <li className="list-group-item justify-content-between">
    haythem wesleti
    <span className="badge badge-default badge-pill">1</span>
  </li>
</div>
           </Col>
           </Row>
           </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>

        );
  }
}
export default CurrentTouranement;
