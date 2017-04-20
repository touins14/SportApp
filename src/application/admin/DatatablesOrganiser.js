
import React from 'react';
import ReactDOM from 'react-dom';
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
class DatatablesOrganiserComponent extends React.Component {

  constructor(props) {
      super(props);
    this.state = {  ar:[] };
    }




  componentDidMount() {

    var tk=localStorage.getItem('token');



  axios.get('http://sportapp.astrolabs.io/api/accountAccept'+'?token='+tk
        )
        .then((response) => {
          console.log('haw chnoua jé',response);
  this.setState({ar: response.data.result})
   
           


  console.log('fsfds',this.state.ar);


          }).catch((error) => {
          console.log(error);
        });
  console.log('fsfds',this.state.ar);

    $(ReactDOM.findDOMNode(this.example))
      .addClass('nowrap')
      .dataTable({
        responsive: true,
        columnDefs: [
          { targets: [-1, -3], className: 'dt-body-right' }
        ]
    });
  }


v(id)

{console.log(id);
  localStorage.setItem('id',id);
  this.props.router.push('/ltr/Admin/DatatablesCompetition')

}
  delete(id)
  {
    var tk=localStorage.getItem('token');
    axios.post(
                    'http://sportapp.astrolabs.io/api/deleteOrganizer'+'?token='+tk+'&id='+id


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
 var that = this;
    return (
      <Table ref={(c) => this.example = c} className='display' cellSpacing='0' width='100%'>
        <thead>
          <tr>
            <th>Username</th>
            <th>Adresse email</th>
            <th>adresse</th>
            <th>city</th>
            <th>country</th>
            <th>birthday</th>
            <th>Phone</th>
            <th>action</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Username</th>
            <th>Adresse email</th>
            <th>adresse</th>
            <th>city</th>
            <th>country</th>
            <th>birthday</th>
            <th>Phone</th>
            <th>action</th>
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
              <td><Button xs outlined   style={{marginBottom: 5}} onClick={that.v.bind(that,eval(JSON.stringify(user.id)))}  bsStyle='primary'>View profile</Button>{' '}<Button xs outlined style={{marginBottom: 5}} onClick={()=>{this.delete(user.id)}}  bsStyle='danger'>Delete</Button>{' '}</td>
            </tr>

                    )
          }
        </tbody>
      </Table>
    );
  }
}

export default class DatatablesOrganiser extends React.Component {
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
                      <DatatablesOrganiserComponent />
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
