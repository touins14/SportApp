
import React from 'react';
import ReactDOM from 'react-dom';
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

class StandByOrganiserComponent extends React.Component {

  constructor() {
      super();
    this.state = {  ar:[] };
    }


  componentDidMount() {

    var tk=localStorage.getItem('token');



  axios.get('http://sportapp.astrolabs.io/api/accountNotAccept'+'?token='+tk
        )
        .then((response) => {
          
 this.setState({ar: response.data.result})
   
           





          }).catch((error) => {
          console.log(error);
        });

    $(ReactDOM.findDOMNode(this.example))
      .addClass('nowrap')
      .dataTable({
        responsive: true,
        columnDefs: [
          { targets: [-1, -3], className: 'dt-body-right' }
        ]
    });

  }

refuse(id)
{
  var tk=localStorage.getItem('token');
  axios.post(
                  'http://sportapp.astrolabs.io/api/refuseOrganizer'+'?token='+tk+'&id='+id


              )
              .then(function (response) {

                                  console.log("it works");
                                  console.log(response);

                              })
                              .catch(function (error) {

                                  console.log(error);
              console.log("it works 2 ");
                });

                var elem = document.getElementById(id);
                     elem.style.display='none';

}






go(id) {


  var tk=localStorage.getItem('token');
axios.post(
                  'http://sportapp.astrolabs.io/api/acceptOrganizer'+'?token='+tk+'&id='+id


              )
              .then(function (response) {

                                  console.log("it works");
                                  console.log(response);

                              })
                              .catch(function (error) {

                                  console.log(error);
              console.log("it works 2 ");
                });

                var elem = document.getElementById(id);
                     elem.style.display='none';



}




  render() {



    return (

      <Table ref={(c) => this.example = c} className='display' cellSpacing='0' width='100%'>
        <thead>

          <tr>
            <th>Username</th>
            <th>Adresse email</th>
            <th>Adresse</th>
            <th>city</th>
            <th>country</th>
            <th>birthday</th>
            <th>phone</th>
            <th>Action</th>

          </tr>
        </thead>
        <tfoot>
          <tr>
           <th>Username</th>
            <th>Adresse email</th>
            <th>Adresse</th>
            <th>city</th>
            <th>country</th>
            <th>birthday</th>
            <th>phone</th>
            <th>Action</th>
          </tr>
        </tfoot>
        <tbody>

          {  this.state.ar.map(user =>
             
            <tr style={{margin:10}}  key={user.id} id={eval(JSON.stringify(user.id))} >

              <td>{user.user.name}</td>
              <td>{user.user.email}</td>
              <td>{user.user.adresse}</td>
              <td>{user.user.city}</td>
              <td>{user.user.country}</td>
              <td>{user.user.birthday}</td>
              <td>{user.user.phone}</td>
              <td><Button xs outlined onClick={()=>{this.go(user.id)}}  style={{marginBottom: 5}} bsStyle='success'>Accept</Button>{' '}<Button xs outlined style={{marginBottom: 5}} onClick={()=>{this.refuse(user.id)}} bsStyle='danger'>refuse</Button>{' '}</td>
            </tr>

                    )
          }


        </tbody>
      </Table>
    );
  }
}

export default class StandByOrganiser extends React.Component {
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
                    <div  className='client' cellSpacing='0' width='100%'>
                     <p style={styles.numbreClienttext} > numbre of organiser  </p>
                     </div>
                      <ButtonGroup>
                        <Button style={styles.numbreClient} bsStyle='darkgreen45'>10</Button>
                      </ButtonGroup>
                      <StandByOrganiserComponent />
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
