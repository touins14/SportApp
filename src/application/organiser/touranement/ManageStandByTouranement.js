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
  Table,


} from '@sketchpixy/rubix';


export default class ManageStandByTouranement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab:'',
      numbercompetetion:'',
      ar:[],
      mytab:[],
      mytabrefused:[],
      mytabstandby:[],
      tk:'',
      buttonname:'',
      dodo:'1',
      teamsnotinvited:[] ,
      name:'',
      type:'',
      start:'',
      end:'',
      nbr:'',
      myteams:[],


      itemchecked:{}
    };


 }
    checkitem(id,e){
      if(e.target.checked)
      {
        console.log("hani chekit");
        this.state.itemchecked[id]="true";

        console.log(this.state.itemchecked);
      }
      else
      {
        this.state.itemchecked[id]="false";
          console.log(this.state.itemchecked);
        console.log("hani na7it el chek");
      }

console.log(id);
    }
    raka7li(){
let mylist = this.state.itemchecked;
var mytab= [];

var key;
for (key in mylist) {
    if (mylist.hasOwnProperty(key)) {
      if (mylist[key]=="true")
      { mytab.push(key)
         console.log(key + " = " + mylist[key]);
console.log('el liste t3aba w haw chfyh',mylist);
       }
    }
}
console.log(mytab);
var json_arr = JSON.stringify(mytab);

var tk=localStorage.getItem('token');
let form = new FormData();
form.append('idCompetition', this.state.activeTab);
       form.append('tableau', json_arr);
        axios.post('http://sportapp.astrolabs.io/api/addToCompetitionExistante'+'?token='+tk,form,
        {headers: {
'Accept': 'application/json',
'Content-Type': 'application/json',
}})
        .then((response) => {
      console.log("c'est bon mchét ya haythem ya laj3éb",response);
          
        });
}





  handleActiveState(eventKey) {
    this.setState({
      activeTab: eventKey,
      mytab:[],
      mytabrefused:[],
      mytabstandby:[]

    });
  console.log('id0',eventKey);

    axios.get('http://sportapp.astrolabs.io/api/teamsNotInvitedToCompetition'+'?token='+this.state.tk+'&id='+eventKey
          )
          .then((response) => {
      console.log('id',eventKey);
          
 this.setState({teamsnotinvited: response.data})
console.log(this.state.teamsnotinvited);
            }).catch((error) => {
            console.log(error);
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




  this.setState({buttonname: "show"})
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
otherteam()
{

if (this.state.buttonname=="show")
{  var elem = document.getElementById("bigtable");
       elem.style.display='block';
       this.setState({buttonname:"hide"})
    }
    else {
      var elem = document.getElementById("bigtable");
             elem.style.display='none';
             this.setState({buttonname:"show"})
    }


}

cancelcompetition(id)
{var tk=this.state.tk
  axios.get('http://sportapp.astrolabs.io/api/cancelCompetition'+'?token='+tk+'&idCompetition='+id
        )
        .then((response) => {
         console.log('haw chnoua jé',response);

  var elem = document.getElementById("bigtable");
         elem.style.display='none';
         this.setState({buttonname:"show"})

  //console.log('fsfds',this.state.ar);


          }).catch((error) => {
          console.log(error);
        });

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

}
generateschedule(id)
{

localStorage.setItem('idcompetition', id);
this.props.router.push('/ltr/Organiser/TouranementCalendar');

}

  render() {
    return (
      <div>
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
<Button xs outlined  style={{marginBottom: 5}} onClick={()=>{this.generateschedule(this.state.activeTab)}}  bsStyle='success'>validate Competetion</Button>{' '}

  <Button xs outlined  style={{marginBottom: 5}} onClick={()=>{this.cancelcompetition(this.state.activeTab)}}  bsStyle='danger'>Cancel this Competition</Button>{' '}
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
              <Button xs outlined onClick={()=>{this.otherteam()}}  style={{marginBottom: 5}}   bsStyle='primary'>{this.state.buttonname} other Teams</Button>{' '}
          </Grid>

        </PanelBody>
            <div id="bigtable" style={{display:"none"}}>

         <Row>
      <Col xs={12}>
        <Col xs={4}>
        </Col>
        <Col xs={4} style={{border: '2px solid #e9f0f5'}}>
  <Table   ref={(c) => this.example = c} className='display' cellSpacing='0' width='100%' style={{marginTop:-10}} >
    <thead>
      <tr>
        <th>Team</th>
        <th>action</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <th>Team</th>
        <th>action</th>
      </tr>
    </tfoot>
    <tbody>
      {  this.state.teamsnotinvited.map(team =>
   <tr style={{margin:10}}  key={team.id} id={eval(JSON.stringify(team.id))} >
          <td>{team.name}</td>
            <td> <input type="checkbox" onChange={(e)=>{this.checkitem(team.id,e)}}/>  </td>
        </tr>

                )
      }
    </tbody>
  </Table>
  <Button xs outlined onClick={this.raka7li.bind(this)} style={{marginBottom: 5}}   bsStyle='primary'>Send notification</Button>
 </Col>

<Col xs={4}>





</Col>
</Col>
</Row>
    </div>
<div id="schedule">
<p>Round 1</p>
<hr/>


</div>

      </PanelTabContainer>

      </div>

    );
  }
}
