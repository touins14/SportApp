
import React from 'react';
import axios from 'axios'

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
  DropdownButton,
  SplitHoverButton,
  DropdownHoverButton,
  MenuItem,
   
    Badge,
} from '@sketchpixy/rubix';
export default class TeamProfilAdmin extends React.Component {
constructor(props) {
      super(props);


    this.state = {
name:'',
city:'',
id:'',
logo:'',
created_at:''


    };
  };

  componentDidMount() {

 


    var tk=localStorage.getItem('token');



    axios.get('http://sportapp.astrolabs.io/api/team'+'?token='+tk+'&id='+localStorage.getItem('teamid')
          )
          .then((response) => {
            console.log('haw chnoua jé',response);
    console.log('haw el name',response.data.name);

    this.setState({name: response.data.name})
    this.setState({city: response.data.city})
    this.setState({logo: response.data.logo})
    this.setState({created_at: response.data.created_at})
     
     






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
        <Panel>
          <PanelHeader>
            <Grid className='gallery-item' >
              <Row>
                <Col xs={12} style={{padding: 12.5}}>
                <Col xs={3} style={{border: '2px solid #e9f0f5',marginTop:20}}>
                  <a className='gallery-1 gallery-item-link' href={'http://sportapp.astrolabs.io/'+this.state.logo} title={this.props.title} style={{marginTop:25,height:200}}>
                    <Image responsive src={'http://sportapp.astrolabs.io/'+this.state.logo} alt={this.props.title} width='200' height='150'/>
                    <div className='black-wrapper text-center'>
                      <Table style={{height: '100%', width: '100%'}}>
                        <tbody>
                          <tr>
                            <td>
                              <Icon glyph='icon-outlined-magnifier-plus icon-3x' />
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </a>
                  <div className='text-center'>
                 <h3 className='fg-darkgrayishblue75 hidden-xs' style={{color:'red'}}>{this.state.name}</h3>
    
                  </div>
                  </Col>
                  <Col xs={9} style={{marginTop:30}}>
                  <div className='text-center'> 
                <h4 className='fg-darkgrayishblue75 hidden-xs' style={{marginRight:500,marginTop:40}}>{this.state.created_at}</h4> 
                <div className="rating" style={{marginRight:20,marginTop:-90}}>
                  <a href="#4" title="Give 4 stars" style={{marginLeft:20}}>☆</a>
                  <a href="#3" title="Give 3 stars" style={{marginLeft:20}}>☆</a>
                   <a href="#2" title="Give 2 stars" style={{marginLeft:20}}>☆</a>
                  <a href="#1" title="Give 1 stars" style={{marginLeft:20}}>☆</a>
                                         </div>
                   <div>
                    <p style={{marginTop:-100,marginLeft:647}}>Goolkeeper</p>
                    <p style={{marginTop:-38,marginLeft:470}}>Midfielder</p>
                    <p style={{marginTop:-38,marginLeft:300}}>Defender</p>
                    <p style={{marginTop:-38,marginLeft:150}}>Stricker</p>
               </div>
                    <DropdownButton bsStyle='lightgreen' title='Compétitions' id='dropdown-basic' style={{marginRight:500,marginTop:-50}}>
                      <MenuItem eventKey="1">Current Compétitions</MenuItem>
                      <MenuItem eventKey="2">All Compétitions</MenuItem>
                    </DropdownButton>
                  </div>
                  </Col>
                </Col>
                <Col xs={12}>
               <div style={{marginLeft:90,marginTop:20}}>
      
                        
                          <div style={{marginRight:790}}>
                            <Badge className='bg-green fg-white'  style={{height:40,width:100}}>
                              <h5 style={{marginTop:1}}> Trophies </h5>
                              <h4 style={{color:'fg-white',marginTop:-13}}> 22</h4>
                             
                            </Badge>
                         
                          </div>

                     <div style={{marginRight:500,marginTop:-40}}>
                            <Badge className='bg-green fg-white'  style={{height:40,width:150}}>
                              <h5 style={{marginTop:1}}> Numbre of matchs </h5>
                              <h4 style={{color:'fg-white',marginTop:-13}}> 22</h4>
                             
                            </Badge>
                         
                          </div>
                      <div style={{marginRight:160,marginTop:-40}}>
                            <Badge className='bg-green fg-white'  style={{height:40,width:150}}>
                              <h5 style={{marginTop:1}}> Numbre of gools </h5>
                              <h4 style={{color:'rfg-white',marginTop:-13}}> 22</h4>
                             
                            </Badge>
                         
                          </div>
                      <div style={{marginLeft:130,marginTop:-40}}>
                            <Badge className='bg-green fg-white'  style={{height:40,width:100}}>
                              <h5 style={{marginTop:1}}> Loss </h5>
                              <h4 style={{color:'fg-white',marginTop:-13}}> 22</h4>
                             
                            </Badge>
                         
                          </div>
                      <div style={{marginLeft:370,marginTop:-40}}>
                            <Badge className='bg-green fg-white'  style={{height:40,width:100}}>
                              <h5 style={{marginTop:1}}> Draw </h5>
                              <h4 style={{color:'fg-white',marginTop:-13}}> 22</h4>
                             
                            </Badge>
                         
                      </div>
                      <div style={{marginLeft:610,marginTop:-40}}>
                            <Badge className='bg-green fg-white'  style={{height:40,width:100}}>
                              <h5 style={{marginTop:1}}> Win </h5>
                              <h4 style={{color:'fg-white',marginTop:-13}}> 22</h4>
                             
                            </Badge>
                         
                       </div>
                </div>
                </Col>
                <Col xs={12}>
                <div className='text-center'> 
                <h4 className='fg-darkgrayishblue75 hidden-xs' style={{textTransform: 'uppercase',marginTop:90}}>Positions</h4> 
              </div>
            
                <Col xs={2}>
                </Col>
                <Col xs={8} style={{border: '2px solid #e9f0f5'}}>
                <div style={{marginTop:45}}>   
                          <div>
         
                       
                            <Badge className='bg-green fg-white'style= {{marginRight:220,marginTop:13}}>
                              Goolkeeper
                            </Badge>
                             <div className="ratingVote" style={{marginLeft:220,marginTop:-55}}>
                  <a href="#5" title="Give 5 stars" >☆</a>
                  <a href="#4" title="Give 4 stars" >☆</a>
                   <a href="#3" title="Give 3 stars" >☆</a>
                  <a href="#2" title="Give 2 stars" >☆</a>
                     <a href="#1" title="Give 1 star">☆</a>
                   
                      </div>
                      </div> 

                      <div>
         
                       
                            <Badge className='bg-green fg-white'style= {{marginRight:220,marginTop:-95}}>
                              Midfielder
                            </Badge>
                             <div className="ratingVote" style={{marginLeft:220,marginTop:-105}}>
                  <a href="#5" title="Give 5 stars" >☆</a>
                  <a href="#4" title="Give 4 stars" >☆</a>
                   <a href="#3" title="Give 3 stars" >☆</a>
                  <a href="#2" title="Give 2 stars" >☆</a>
                     <a href="#1" title="Give 1 star">☆</a>
                   
                      </div>
                      </div> 
                      <div>
         
                       
                            <Badge className='bg-green fg-white'style= {{marginRight:220,marginTop:-95}}>
                              Defender
                            </Badge>
                             <div className="ratingVote" style={{marginLeft:220,marginTop:-105}}>
                  <a href="#5" title="Give 5 stars" >☆</a>
                  <a href="#4" title="Give 4 stars" >☆</a>
                   <a href="#3" title="Give 3 stars" >☆</a>
                  <a href="#2" title="Give 2 stars" >☆</a>
                     <a href="#1" title="Give 1 star">☆</a>
                   
                      </div>
                      </div> 
                      <div>
         
                       
                            <Badge className='bg-green fg-white'style= {{marginRight:220,marginTop:-95}}>
                              Stricker
                            </Badge>
                             <div className="ratingVote" style={{marginLeft:220,marginTop:-105}}>
                  <a href="#5" title="Give 5 stars" >☆</a>
                  <a href="#4" title="Give 4 stars" >☆</a>
                   <a href="#3" title="Give 3 stars" >☆</a>
                  <a href="#2" title="Give 2 stars" >☆</a>
                     <a href="#1" title="Give 1 star">☆</a>
                   
                      </div>
                      </div> 
                      </div>
                      
                </Col>
                   <Col xs={2}>
                </Col>
                </Col>
                 <Col xs={12}>
                <div className='text-center'> 
                <h4 className='fg-darkgrayishblue75 hidden-xs' style={{textTransform: 'uppercase',marginTop:90}}>Coments</h4> 
              </div>
            
                <Col xs={2}>
                </Col>
                <Col xs={8} style={{border: '2px solid #e9f0f5'}}>hahahahahah
       
                      
                </Col>
                   <Col xs={2}>
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