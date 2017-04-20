import React from 'react';
import { Link, withRouter } from 'react-router';
import axios from 'axios'
import {
  Row,
  Col,
  Grid,
  Panel,
  Table,
  PanelBody,
  PanelHeader,
  FormControl,
  PanelContainer,
  Nav,
  Icon,
  Form,
  Radio,
  Button,
  MenuItem,
  Checkbox,
  HelpBlock,
  FormGroup,
  InputGroup,
  SplitButton,
  ButtonGroup,
  PanelFooter,
  ControlLabel,
  DropdownButton,
} from '@sketchpixy/rubix';
@withRouter
 class TeamsOrganiserComponent extends React.Component {
  constructor(props) {
      super(props);
    this.state = {  ar:[] };
    }


    componentDidMount() {
      var tk=localStorage.getItem('token');



      axios.get('http://sportapp.astrolabs.io/api/allTeams'+'?token='+tk
            )
            .then((response) => {
              console.log('haw chnoua jé',response);
      this.setState({ar: response.data})
       
               


      console.log('fsfds',this.state.ar);


              }).catch((error) => {
              console.log(error);
            });
      console.log('fsfds',this.state.ar);
    }

v(id)

    {


  console.log(id);
  localStorage.setItem('teamid',id);
      this.props.router.push('/ltr/Organiser/ProfilTeamOrganiser')


    }
  render() {
  
  var that = this;
  return (
    <Table ref={(c) => this.example = c} className='display' cellSpacing='0' width='100%'>
      <thead>
        <tr>
          <th>Team</th>
          <th>city</th>
          <th>GamePlayed</th>
          <th>win</th>
          <th>loose</th>
          <th>draw</th>
          <th>rating</th>
          <th>action</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Team</th>
          <th>city</th>
          <th>GamePlayed</th>
          <th>win</th>
          <th>loose</th>
          <th>draw</th>
          <th>rating</th>
          <th>action</th>
        </tr>
      </tfoot>
      <tbody>
        {  this.state.ar.map(team =>

          <tr style={{margin:10}}  key={team.id} id={eval(JSON.stringify(team.id))} >

            <td>{team.name}</td>
            <td>{team.city}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>

            <td></td>
             <td><Button xs outlined onClick={that.v.bind(that,eval(JSON.stringify(team.id)))} style={{marginBottom: 5}}   bsStyle='primary'>View Team</Button>{' '}</td>
          </tr>

                  )
        }
      </tbody>
    </Table>
    );
}
}

export default class TeamsOrganiser extends React.Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <PanelContainer>
            <Panel>
              <PanelBody>
                <Grid>
                  <Row>
                    <Col xs={12}>


                      <TeamsOrganiserComponent/>
                      <br/>
                    </Col>
                  </Row>
                </Grid>
              </PanelBody>
            </Panel>
          </PanelContainer>
        </Col>
      </Row>
    );
  }
}
const styles = {
  numbreClienttext:{
marginLeft:400
  },
   numbreClient:{
marginLeft:430,
marginTop:-15
  }
}
