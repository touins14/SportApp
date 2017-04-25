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
      numbercompetetion:'',
      ar:[],
      mytab:[],
      mytabrefused:[],
      mytabstandby:[],
      tk:'',
      dodo:'1'

    };


 }


  handleActiveState(eventKey) {
    this.setState({
      activeTab: eventKey,
      mytab:[],
      mytabrefused:[],
      mytabstandby:[]

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
this.setState({tk:localStorage.getItem('token')})


  axios.get('http://sportapp.astrolabs.io/api/competitionConstruction'+'?token='+tk
        )
        .then((response) => {
          console.log('haw chnoua jé',response);
  //this.setState({ar: response.data})
   this.setState({numbercompetetion: response.data.numbersCompetitionConstruction})
           this.setState({ar:response.data.competitionConstruction})
console.log('piww',this.state.numbercompetetion);

console.log('ahawa el tableau',this.state.ar);

  //console.log('fsfds',this.state.ar);


          }).catch((error) => {
          console.log(error);
        });
  //console.log('fsfds',this.state.ar);
  //*******************************************************TEam accepted

}
//*****************
nombretab()
{
  var length=this.state.numbercompetetion
  console.log('haw menna',this.state.numbercompetetion);


}
getaccepted(id)
{
console.log('mytabpane',this.state.activeTab);

var tk=this.state.tk
if (id=this.state.activeTab)
{axios.get('http://sportapp.astrolabs.io/api/competitionConstructionAccepted'+'?token='+tk+'&id='+id
      )
      .then((response) => {
        console.log('haw chnoua jé',response.data[0].team_accepted);

 this.setState({mytab:response.data[0].team_accepted})
console.log('dazitou',this.state.mytab);

//console.log('fsfds',this.state.ar);


        }).catch((error) => {
        console.log(error);
      });}




}
getrefused(id)
{
  var tk=this.state.tk
  if (id=this.state.activeTab)
  {axios.get('http://sportapp.astrolabs.io/api/competitionConstructionRefused'+'?token='+tk+'&id='+id
        )
        .then((response) => {
         console.log('haw chnoua jé',response.data[0].team_refused);

   this.setState({mytabrefused:response.data[0].team_refused})
  console.log('dazitou',this.state.mytabrefused);

  //console.log('fsfds',this.state.ar);


          }).catch((error) => {
          console.log(error);
        });}
}
getstandby(id)
{var tk=this.state.tk
if (id=this.state.activeTab)
{axios.get('http://sportapp.astrolabs.io/api/competitionConstructionCurrent'+'?token='+tk+'&id='+id
      )
      .then((response) => {
       console.log('haw chnoua jé',response.data[0].team_current);



   this.setState({mytabstandby:response.data[0].team_current})
  console.log('dazitou',this.state.team_current);

//console.log('fsfds',this.state.ar);


        }).catch((error) => {
        console.log(error);
      });}
}
  render() {
    return (
      <PanelTabContainer id='tabs-basic' defaultActiveKey="0" style={{marginTop:25}}>
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
                {  this.state.ar.map(comp =>
                  <NavItem eventKey={comp.id} key={comp.id} > {comp.name}</NavItem>
                )}




                </Nav>
                <Tab.Content>
                  {  this.state.ar.map(comp =>
                  <Tab.Pane    eventKey={comp.id} key={comp.id}>
                  <Grid>

                  <Row>
                    <Col sm={4} collapseRight>
            <PanelContainer>
              <Panel>

                <PanelBody>

                <div className="list-group">
  <a  className="list-group-item active">Team accepted <Button xs outlined onClick={()=>{this.getaccepted(comp.id)}}  style={{marginBottom: 5}} bsStyle='success'>Show</Button></a>


    {this.state.mytab.map(team =>

      <a href="#" key={team.id} className="list-group-item">{team.name}</a>

  )
  }
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
  <a  className="list-group-item active">Team refused <Button xs outlined onClick={()=>{this.getrefused(comp.id)}}  style={{marginBottom: 5}} bsStyle='success'>Show</Button></a>
    {this.state.mytabrefused.map(team =>

      <a href="#" key={team.id} className="list-group-item">{team.name}</a>

  )
  }
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
  <a  className="list-group-item active">Team in standby  <Button xs outlined onClick={()=>{this.getstandby(comp.id)}}  style={{marginBottom: 5}} bsStyle='success'>Show</Button></a>
    {this.state.mytabstandby.map(team =>

      <a href="#" key={team.id} className="list-group-item">{team.name}</a>

    )
    }
</div>
<Button xs outlined  style={{marginBottom: 5}}   bsStyle='primary'>Contact Team</Button>{' '}
                </PanelBody>
              </Panel>
            </PanelContainer>
          </Col>
        </Row>
        </Grid>
                  </Tab.Pane>
                  )}

                </Tab.Content>
              </Col>
            </Row>
          </Grid>
        </PanelBody>
      </PanelTabContainer>
    );
  }
}
