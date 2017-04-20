import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import {
  Row,
  Col,
  Nav,
  Tab,
  Tabs,
  Grid,
  Icon,
  Panel,
  Pager,
  Button,
  Navbar,
  BPanel,
  NavItem,
  MenuItem,
  PanelBody,
  Accordion,
  LoremIpsum,
  Breadcrumb,
  Pagination,
  SplitButton,
  PanelHeader,
  NavDropdown,
  ButtonGroup,
  ButtonToolbar,
  PanelContainer,
  DropdownButton,
  SplitHoverButton,
  PanelTabContainer,
  DropdownHoverButton,
  Form,
  Radio,
  HelpBlock,
  FormGroup,
  InputGroup,
  FormControl,
  PanelFooter,
  ControlLabel,


} from '@sketchpixy/rubix';



export default class ManageStandByTouranement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: '',

    };


 }


  handleActiveState(eventKey) {
    this.setState({
      activeTab: eventKey
    });
  }

  getItemProps(eventKey) {
    return {
      eventKey,
      active: this.state.activeTab === eventKey
    };
  }
  NavigationChampion() {

  this.props.router.push('/ltr/Organiser/SecondNewTouranement');
}

//*************************
componentDidMount() {
  var tk=localStorage.getItem('token');



  axios.get('http://sportapp.astrolabs.io/api/allTeams'+'?token='+tk
        )
        .then((response) => {
          console.log('haw chnoua jé',response);
  //this.setState({ar: response.data})
   
           


  //console.log('fsfds',this.state.ar);


          }).catch((error) => {
          console.log(error);
        });
  //console.log('fsfds',this.state.ar);
}
//*****************

  render() {
    return (
      <PanelTabContainer id='tabs-basic' defaultActiveKey="Champion1" style={{marginTop:25}}>
        <PanelHeader className='bg-lightblue fg-white'>
          <Grid>
            <Row>
              <Col sm={12}>
                <h3>Touranement</h3>
              </Col>
            </Row>
          </Grid>
        </PanelHeader>
        <PanelBody>
          <Grid>
            <Row>
              <Col sm={12}>
                <Nav bsStyle="tabs" onSelect={::this.handleActiveState} className='tab-lightblue'>
                  <NavItem eventKey="Champion1">Champion1</NavItem>
                  <NavItem eventKey="Champion2">Champion2</NavItem>
                  <NavItem eventKey="Champion3">Champion3</NavItem>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="Champion1">
                  <Grid>
                  <Row>
                    <Col sm={4} collapseRight>
            <PanelContainer>
              <Panel>
                <PanelBody>
                <div className="list-group">
  <a  className="list-group-item active">Team accepted</a>
  <a href="#" className="list-group-item">Second item</a>
  <a href="#" className="list-group-item">Third item</a>
</div>

                </PanelBody>
              </Panel>
            </PanelContainer>
          </Col>
          <Col sm={4} collapseRight>
            <PanelContainer>
              <Panel>
                <PanelBody>
  <div className="list-group">
  <a  className="list-group-item active">Team refused</a>
  <a href="#" className="list-group-item">Second item</a>
  <a href="#" className="list-group-item">Third item</a>
</div>
                </PanelBody>
              </Panel>
            </PanelContainer>
          </Col>
          <Col sm={4}>
            <PanelContainer>
              <Panel>
                <PanelBody>
 <div className="list-group">
  <a  className="list-group-item active">Team in standby</a>
  <a href="#" className="list-group-item">Second item</a>
  <a href="#" className="list-group-item">Third item</a>
</div>
<Button xs outlined  style={{marginBottom: 5}}   bsStyle='primary'>Contact Team</Button>{' '}
                </PanelBody>
              </Panel>
            </PanelContainer>
          </Col>
        </Row>
        </Grid>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Champion2">
                                        <Grid>
                  <Row>
                    <Col sm={4} collapseRight>
            <PanelContainer>
              <Panel>
                <PanelBody>
                <div className="list-group">
  <a  className="list-group-item active">Team accepted</a>
  <a href="#" className="list-group-item">Second item</a>
  <a href="#" className="list-group-item">Third item</a>
</div>

                </PanelBody>
              </Panel>
            </PanelContainer>
          </Col>
          <Col sm={4} collapseRight>
            <PanelContainer>
              <Panel>
                <PanelBody>
  <div className="list-group">
  <a  className="list-group-item active">Team refused</a>
  <a href="#" className="list-group-item">Second item</a>
  <a href="#" className="list-group-item">Third item</a>
</div>
                </PanelBody>
              </Panel>
            </PanelContainer>
          </Col>
          <Col sm={4}>
            <PanelContainer>
              <Panel>
                <PanelBody>
 <div className="list-group">
  <a  className="list-group-item active">Team in standby</a>
  <a href="#" className="list-group-item">Second item</a>
  <a href="#" className="list-group-item">Third item</a>
</div>
<Button xs outlined  style={{marginBottom: 5}}   bsStyle='primary'>Contact Team</Button>{' '}
                </PanelBody>
              </Panel>
            </PanelContainer>
          </Col>
        </Row>
        </Grid>


                  </Tab.Pane>
                <Tab.Pane eventKey="Champion3">
                              <Grid>
                  <Row>
                    <Col sm={4} collapseRight>
            <PanelContainer>
              <Panel>
                <PanelBody>
   <div className="list-group">
  <a  className="list-group-item active">Team accepted</a>
  <a href="#" className="list-group-item">Second item</a>
  <a href="#" className="list-group-item">Third item</a>
</div>
                </PanelBody>
              </Panel>
            </PanelContainer>
          </Col>
          <Col sm={4} collapseRight>
            <PanelContainer>
              <Panel>
                <PanelBody>
   <div className="list-group">
  <a  className="list-group-item active">Team refused</a>
  <a href="#" className="list-group-item">Second item</a>
  <a href="#" className="list-group-item">Third item</a>
</div>
                </PanelBody>
              </Panel>
            </PanelContainer>
          </Col>
          <Col sm={4}>
            <PanelContainer>
              <Panel>
                <PanelBody>
 <div className="list-group">
  <a  className="list-group-item active">Team in standby</a>
  <a href="#" className="list-group-item">Second item</a>
  <a href="#" className="list-group-item">Third item</a>
</div>
<Button xs outlined  style={{marginBottom: 5}}   bsStyle='primary'>Contact Team</Button>{' '}
                </PanelBody>
              </Panel>
            </PanelContainer>
          </Col>
        </Row>
        </Grid>

                  </Tab.Pane>

                </Tab.Content>
              </Col>
            </Row>
          </Grid>
        </PanelBody>
      </PanelTabContainer>
    );
  }
}
