import ReactDOM from 'react-dom';
import axios from 'axios';
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
  TimelineBody,
  TimelineIcon,
  TimelineView,
  TimelineItem,
  TimelineTitle,
  TimelineHeader,
  Label,
} from '@sketchpixy/rubix';

class TouranementCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teamsimported:[],
      teamsimportedname:[],
    idcompetition:'',
    myteams:[],
    myteam1:[],
    myteam2:[],
    teamskeyvalue:{},


    };


 }
 aMettreDansComponentDidMoiuntAfterServiceLotfi()
 {
   var tk=this.state.tk
     axios.get('http://sportapp.astrolabs.io/api/validCompetition'+'?token='+tk+'&idCompetition='+id
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
 }

  componentDidMount()
  { var tk=localStorage.getItem('token');
    var idcompetition=localStorage.getItem('idcompetition');
     axios.get('http://sportapp.astrolabs.io/api/teamsOfCompetitionValide'+'?token='+tk+'&id='+idcompetition
           )
           .then((response) => {
          
this.setState({teamsimported: response.data[0].team})
 console.log('haw chnoua jé ya 7ammadi',this.state.teamsimported);


     //console.log('fsfds',this.state.ar);

//***************************************************************
var color = [];
console.log('teamsimported',this.state.teamsimported);
    this.state.teamsimported.map(user =>
color.push(user.name)
  )
  console.log("tableau des equipes",color);

    //*******************
    var idcompetition=localStorage.getItem('idcompetition');
     this.setState({idcompetition: idcompetition})

    var color2=[];
    while (color.length != 0) {
        var index = Math.floor(Math.random()*color.length);
        var pickedColor = color[index];
        console.log(pickedColor);
        color.splice(index, 1);
        color2.push(pickedColor);
        console.log("haw table jdid chwala fyh",color2);

    }


    for (var i = 0; i < color2.length; i++) {
    this.state.myteams.push(color2[i])



    }
    console.log("awinou",this.state.myteams);
    for (var i = 0; i < this.state.myteams.length; i+=2) {

    console.log(color2[i]+" "+color2[i+1]);
    this.state.myteam1.push(color2[i])
    this.state.myteam2.push(color2[i+1])
this.state.teamskeyvalue[color2[i]]=color2[i+1];


    }
    console.log("team 1",this.state.myteam1);
    console.log("team 2",this.state.myteam2);
console.log("el cle valeur 7adhra w hay chfyha",this.state.teamskeyvalue);

//******** ici envoyer le service a lotfi
//**************************************************************

             }).catch((error) => {
             console.log(error);
           });




  }

  render() {
    console.log(this.state.idcompetition);
    return (
      <PanelContainer>
            <Panel>
              <PanelHeader style={{background:'#43496a'}} >
                <Grid>
                  <Row>
                    <Col xs={12} className='fg-white'>
                      <h4>Touranement Calendar</h4>

                    </Col>
                  </Row>
                </Grid>
              </PanelHeader>
              <PanelBody>
                <Grid>
                <Row>
                <Col xs={12}>



                            </Col>
                </Row>

          <Row>
          <Col xs={2}>
          </Col>
          <Col xs={8}>
              <h4>Touranememnt has been validated with success </h4>
  {  this.state.myteam1.map((item, index) => {
    return(<TimelineView className='border-hoverblue tl-blue'>
            <TimelineItem>
              <TimelineHeader>
                <TimelineIcon className='bg-blue fg-white' glyph='icon-fontello-chat-1' />
                <TimelineTitle>
                match number {index+1}
                </TimelineTitle>
              </TimelineHeader>
              <TimelineBody>
                <ul>
                  <li>
                 <Col xs={6}>
                <Label className='bg-darkorange45 fg-white' >{item}</Label>
    </Col>
                <Col xs={6}>
               <Label className='bg-darkorange45 fg-white' >{this.state.myteam2[index]}</Label>
    </Col>
                  </li>
                </ul>
              </TimelineBody>
            </TimelineItem>
          </TimelineView>)

  })

    }



                </Col>
                <Col xs={2}>
          </Col>
          </Row>
                </Grid>

              </PanelBody>
            </Panel>
          </PanelContainer>
        );
  }
}
export default TouranementCalendar;
