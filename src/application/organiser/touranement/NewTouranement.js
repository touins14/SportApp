import React from 'react';
import { render } from 'react-dom';
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



export default class NewTouranement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameChampion: '',
      typeChampion:'',
      datestartChampion:'',
      dateendChampion:'',
      nbrTeamChampion:'',
      erreurNameChampion:'',
       erreurdatestartChampion:'',
      erreurdateendChampion:'',

    };

 //Champion Ship
this.nameChampionChange = this.nameChampionChange.bind(this);
this.typeChampionChange = this.typeChampionChange.bind(this);
this.datestartChampionChange = this.datestartChampionChange.bind(this);
this.dateendChampionChange = this.dateendChampionChange.bind(this);
this.nbrTeamChampionChange = this.nbrTeamChampionChange.bind(this);

  }

 datestartChampionChange(event) {
    this.setState({

      datestartChampion: event.target.value});

  }
        dateendChampionChange(event) {
    this.setState({
      dateendChampion: event.target.value});
  }
  nameChampionChange(event) {

  this.setState({nameChampion: event.target.value});
}
nbrTeamChampionChange(event) {

  this.setState({nbrTeamChampion: event.target.value});
}
typeChampionChange(event) {

  this.setState({typeChampion: event.target.value});
}


// Champion Ship
 datestartChampion() {
   var todayDateString;

    todayDateString = new Date().toJSON().slice(0, 10);

    vex.dialog.open({

      input: "<style>\n    .vex-custom-field-wrapper {\n        margin: 1em 0;\n    }\n    .vex-custom-field-wrapper > label {\n        display: inline-block;\n        margin-bottom: .2em;\n    }\n</style>\n<div class=\"vex-custom-field-wrapper\">\n    <label for=\"date\">Date</label>\n    <div class=\"vex-custom-input-wrapper\">\n        <input name=\"date\" type=\"date\" value=\"" + todayDateString + "\" />\n    </div>\n</div>\n<div class=\"vex-custom-field-wrapper\">\n        </div>\n</div>",

      callback: (data) => {
        vex.dialog.alert("<h4>Result</h4>\n<p>\n    Date: <b>" + data.date + "</b><br/>\n ");

  this.setState({datestartChampion: data.date });

   }

    });


  }
 dateendChampion() {
   var todayDateString;

    todayDateString = new Date().toJSON().slice(0, 10);

    vex.dialog.open({

      input: "<style>\n    .vex-custom-field-wrapper {\n        margin: 1em 0;\n    }\n    .vex-custom-field-wrapper > label {\n        display: inline-block;\n        margin-bottom: .2em;\n    }\n</style>\n<div class=\"vex-custom-field-wrapper\">\n    <label for=\"date\">Date</label>\n    <div class=\"vex-custom-input-wrapper\">\n        <input name=\"date\" type=\"date\" value=\"" + todayDateString + "\" />\n    </div>\n</div>\n<div class=\"vex-custom-field-wrapper\">\n        </div>\n</div>",

      callback: (data) => {
        vex.dialog.alert("<h4>Result</h4>\n<p>\n    Date: <b>" + data.date + "</b><br/>\n ");

  this.setState({dateendChampion: data.date });

   }

    });


  }






    back(e) {
    e.preventDefault();


    e.stopPropagation();

  }

  NavigationChampion() {
  if(this.state.nameChampion=='')
  {
   this.setState({ erreurNameChampion: 'vérifier  Champion Ship name' })
  }

 if(this.state.datestartChampion=='')
  {
   this.setState({ erreurdatestartChampion: 'vérifier datestart Champion Ship' })
  }
    if(this.state.dateendChampion=='')
  {
   this.setState({ erreurdateendChampion: 'vérifier dateend Champion Ship' })
  }
   if(this.state.nameChampion !='')
{
 this.setState({ erreurNameChampion: '' })
}
if(this.state.datestartChampion !='')
{
 this.setState({ erreurdatestartChampion: '' })
}
if(this.state.dateendChampion !='')
{
 this.setState({ erreurdateendChampion: '' })
}
   if((this.state.nameChampion!='') && (this.state.datestartChampion!='') && (this.state.datestartChampion!='undefined') && (this.state.dateendChampion!=''))
   {
    console.log('stateone',this.state.datestartChampion);
  this.props.router.push('/ltr/Organiser/SecondNewTouranement');

}
}

  render() {

    return (
      <PanelTabContainer id='tabs-basic' style={{marginTop:2}}>
        <PanelHeader style={{background:'#43496a'}}>
          <Grid>
            <Row>
              <Col sm={12}>
                <h3>Add new Touranement</h3>
              </Col>
            </Row>
          </Grid>
        </PanelHeader>
        <PanelBody>
          <Grid>
            <Row>
              <Col sm={12}>
               <div className=' fg-black50 text-center' style={{padding: 25, paddingTop: 25,background:'#fff'}}>
                            <Grid>
                              <Row>
                                <Col xs={12}>
                                  <Col xs={3}>
                                  </Col>
                                  <Col xs={6}>
                                  <Form id='form-2' onSubmit={::this.back}>
                                   <div id='wizard-2'>
                                      <FormGroup controlId='nameChampion'>
                                        <InputGroup bsSize='large'>
                                          <InputGroup.Addon>
                                            <Icon glyph='icon-fontello-user' />
                                          </InputGroup.Addon>
                                          <FormControl autoFocus type='text' value={this.state.nameChampion} onChange={this.nameChampionChange} className='border-focus-blue' placeholder='Name of compétition' />
                                        </InputGroup>
                                      </FormGroup>
                                       <p style={{color:'red'}}>{this.state.erreurNameChampion}</p>
                                      <FormGroup controlId='datestartChampion'>
                                        <InputGroup bsSize='large'>
                                          <InputGroup.Addon>
                                            <Icon glyph='glyphicon glyphicon-calendar' onClick={::this.datestartChampion}/>
                                          </InputGroup.Addon>
                                          <FormControl autoFocus type='text' value={this.state.datestartChampion} onClick={::this.datestartChampion} onChange={this.datestartChampionChange} className='border-focus-blue' placeholder='start date' />
                                        </InputGroup>
                                      </FormGroup>
                                      <p style={{color:'red'}}>{this.state.erreurdatestartChampion}</p>
                                  <FormGroup controlId='dateendChampion'>
                                        <InputGroup bsSize='large'>
                                          <InputGroup.Addon>
                                            <Icon glyph='glyphicon glyphicon-calendar' onClick={::this.dateendChampion}/>
                                          </InputGroup.Addon>
                                          <FormControl autoFocus  type='text' value={this.state.dateendChampion} onClick={::this.dateendChampion} onChange={this.dateendChampionChange} className='border-focus-blue' placeholder='end date' />
                                        </InputGroup>
                                      </FormGroup>
                                      <p style={{color:'red'}}>{this.state.erreurdateendChampion}</p>
                                          <FormGroup controlId="nbrTeamChampion">
                                       <ControlLabel>numbre of teams</ControlLabel>
                                      <FormControl componentClass="select"  value={this.state.nbrTeamChampion} onChange={this.nbrTeamChampionChange} placeholder="select">
                                        <option value='1'>8</option>
                                        <option value='2'>16</option>
                                        <option value='3'>32</option>
                                    </FormControl>
                                    </FormGroup>
                                    <FormGroup controlId="typeChampion">
                                       <ControlLabel>Type of compétition</ControlLabel>
                                      <FormControl componentClass="select"  value={this.state.typeChampion} onChange={this.typeChampionChange} placeholder="select">
                                        <option value='1'> Foot de 6</option>
                                        <option value='2'> Foot de 8</option>
                                        <option value='3'>Foot de 10</option>
                                    </FormControl>
                                    </FormGroup>
                                   </div>
                                      </Form>

                                         <Button block type='submit' id='twitter-btn'   onClick={::this.NavigationChampion}
                                          style={{background:'#f0ad4e',width:100,height:40,color:'#000000',float:'right'}}>

                                         <span>Next</span>
                                       </Button>
                                  </Col>
                                  <Col xs={3}>
                                  </Col>
                                       </Col>
                              </Row>

                            </Grid>


                        </div>

              </Col>
            </Row>
          </Grid>
        </PanelBody>
      </PanelTabContainer>
    );
  }
}
