import React from 'react';
import axios from 'axios';

import {
  Row,
  Col,
  Icon,
  Grid,
  Panel,
  Image,
  Table,
  Button,
  PanelBody,
  PanelHeader,
  PanelContainer,
} from '@sketchpixy/rubix';

export default class OrganiserProfilOrganiser extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        id:'',
        name:'',
        email:'',
        phone:'',
        adresse:'',
        country:'',
        birthday:'',
        photo:''

    }
}
  componentDidMount() {

    var tk=localStorage.getItem('token');
localStorage.getItem('userid')
console.log('my id',localStorage.getItem('userid'));

    axios.get('http://sportapp.astrolabs.io/api/getOrganizer'+'?token='+tk+'&id='+localStorage.getItem('userid')
          )
          .then((response) => {
            console.log('haw chnoua jé',response);
    console.log('haw el name',response.data.name);
   this.setState({id: response.data.id});
    this.setState({name: response.data.name});
    this.setState({email: response.data.city});
    this.setState({phone: response.data.phone});
    this.setState({adresse: response.data.adresse});
    this.setState({country: response.data.country});
    this.setState({birthday: response.data.birthday});
    this.setState({photo: response.data.photo});








            }).catch((error) => {
            console.log(error);
          });



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
      <PanelContainer style={{marginTop: 30}}>
        <Panel style={{background:'#43496a'}}>
          <PanelHeader>
               <Grid className='gallery-item' >
              <Row>
                <Col xs={12} className='fg-white' style={{padding: 12.5}}>

                <Col xs={3} style={{border: '2px solid #e9f0f5',marginTop:20}}>
                  <a className='gallery-1 gallery-item-link' href={'http://sportapp.astrolabs.io/'+this.state.photo} title={this.props.title} style={{marginTop:20}}>
                    <Image responsive src={'http://sportapp.astrolabs.io/'+this.state.photo} alt={this.props.title} width='200' height='150'/>
                    <div className='black-wrapper text-center'>
                      <Table style={{height: '100%', width: '100%'}}>
                        <tbody>
                          <tr>
                            <td>
                              <Icon glyph='icon-outlined-magnifier-plus icon-3x' style={{marginTop:-40}}/>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                     <div className='text-center'>
                  <h3 className='fg-darkgrayishblue75' style={{color:'red'}}>{this.state.name}</h3>
                  </div>
                  </a>


                  </Col>
                  <Col xs={9} style={{marginTop:30}}>
                   <div className='text-center'>
                  <h4 className='fg-darkgrayishblue75' style={{color:'#fff'}}>{this.state.birthday}</h4>
                  <h4 className='fg-darkgrayishblue75' style={{color:'#fff'}}>{this.state.email}</h4>
                    <h4 className='fg-darkgrayishblue75' style={{color:'#fff'}}>{this.state.phone}</h4>
                     <h4 className='fg-darkgrayishblue75' style={{color:'#fff'}}>{this.state.adresse}</h4>
                      <h4 className='fg-darkgrayishblue75' style={{color:'#fff'}}>{this.state.country}</h4>
                      <h4 className='fg-darkgrayishblue75' style={{color:'#fff'}}>{this.state.city}</h4>
                       <Button lg style={{marginBottom: 5,background:'#20243f'}} bsStyle='primary' style={styles.Buttons}>Current compétitions</Button>{' '}
                     <Button lg style={{marginBottom: 5}} bsStyle='primary' style={styles.Buttons}>History compétitions</Button>{' '}

                  </div>
                  </Col>
                </Col>
              </Row>
            </Grid>
          </PanelHeader>
        </Panel>
      </PanelContainer>
    );
  }
}

const styles = {
  Buttons:{
marginTop:190
  }
}
