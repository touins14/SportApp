import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link, withRouter } from 'react-router';
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
class DatatablesClientssComponent extends React.Component {
  constructor(props) {
      super(props);
    this.state = {  ar:[],

     };
    }
  componentDidMount() {
    var tk=localStorage.getItem('token');



    axios.get('http://sportapp.astrolabs.io/api/allClients'+'?token='+tk
          )
          .then((response) => {
            console.log('haw chnoua jé',response);
    this.setState({ar: response.data})
     
             


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
viewclient(id)
{
  localStorage.setItem('clientid',id);
    this.props.router.push('/ltr/Admin/ClientProfilAdmin',id)
}
refuse()
{
  return null;
}
  render() {
    var that = this;
    return (
      <Table ref={(c) => this.example = c} className='display' cellSpacing='0' width='100%'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>adresse</th>
            <th>city</th>
            <th>country</th>
            <th>birthday</th>
              <th>phone</th>
                <th>action</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>adresse</th>
            <th>city</th>
            <th>country</th>
            <th>birthday</th>
              <th>phone</th>
                <th>action</th>
          </tr>
        </tfoot>
        <tbody>

          {  this.state.ar.map(user =>
             
            <tr style={{margin:10}}  key={user.user.id} id={eval(JSON.stringify(user.user.id))} >

              <td>{user.user.name}</td>
              <td>{user.user.email}</td>
              <td>{user.user.adresse}</td>
              <td>{user.user.city}</td>
              <td>{user.user.country}</td>
              <td>{user.user.birthday}</td>
              <td>{user.user.phone}</td>
              <td><Button xs outlined onClick={that.viewclient.bind(that,eval(JSON.stringify(user.user.id)))}  style={{marginBottom: 5}} bsStyle='primary'>View Client</Button>{' '}<Button xs outlined style={{marginBottom: 5}} onClick={()=>{this.refuse(user.user.id)}} bsStyle='danger'>delete Client</Button>{' '}</td>
            </tr>

                    )
          }


        </tbody>
      </Table>
    );
  }
}

export default class DatatablesClientss extends React.Component {
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
                     <p style={styles.numbreClienttext} > numbre of clients </p>
                     </div>
                      <ButtonGroup>
                        <Button style={styles.numbreClient} bsStyle='darkgreen45'>10</Button>
                      </ButtonGroup>
                      <DatatablesClientssComponent />
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
