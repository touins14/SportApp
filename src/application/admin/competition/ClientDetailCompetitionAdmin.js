import React from 'react';

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
export default class ClientDetailCompetitionAdmin extends React.Component {


  componentDidMount() {
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
      <PanelContainer style={{marginTop: 2}}>
        <Panel style={{background:'#43496a'}}>
          <PanelHeader>
            <Grid className='gallery-item' >
              <Row>
                <Col xs={12} className='fg-white' style={{padding: 12.5}}>
                
                <Col xs={3} style={{border: '2px solid #e9f0f5',marginTop:20}}>
                  <a className='gallery-1 gallery-item-link' href={`/imgs/app/gallery/tumblr_n6es0tRk5w1st5lhmo1_1280.jpg`} title={this.props.title} style={{marginTop:25}}>
                    <Image responsive src={`/imgs/app/gallery/tumblr_n6es0tRk5w1st5lhmo1_1280-thumb.jpg`} alt={this.props.title} width='200' height='150'/>
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

       <h5 className='fg-darkgrayishblue75 hidden-xs' style={{color:'#fff'}}>Ronaldo@gmail.com</h5>
                    <h5 className='fg-darkgrayishblue75 hidden-xs' style={{color:'#fff'}}>22/22/1985</h5>
                     <h5 className='fg-darkgrayishblue75 hidden-xs' style={{color:'#fff'}}>lachbouna</h5>
                      <h5 className='fg-darkgrayishblue75 hidden-xs' style={{color:'#fff'}}>lach</h5>
                      <h5 className='fg-darkgrayishblue75 hidden-xs' style={{color:'#fff'}}>22456789</h5>
                  </div>
                  </Col>
                  <Col xs={9} style={{marginTop:40}}>
                  <div className='text-center'> 
                   <h3 className='fg-darkgrayishblue75 hidden-xs' style={{color:'red',marginRight:500,marginTop:40}}>Cristiano Ronaldo </h3>
                    <div className="rating" style={{marginRight:20,marginTop:-100}}>
                  <a href="#5" title="Give 5 stars" style={{marginLeft:20}}>☆</a>
                  <a href="#4" title="Give 4 stars" style={{marginLeft:20}}>☆</a>
                   <a href="#3" title="Give 3 stars" style={{marginLeft:20}}>☆</a>
                  <a href="#2" title="Give 2 stars" style={{marginLeft:20}}>☆</a>
                     <a href="#1" title="Give 1 star">☆</a>
                    </div>
                   <div>
                    <p style={{marginTop:-100,marginLeft:620}}>Speed</p>
                    <p style={{marginTop:-38,marginLeft:470}}>Endurance</p>
                    <p style={{marginTop:-38,marginLeft:305}}>Technique</p>
                    <p style={{marginTop:-38,marginLeft:150}}>Shoot</p>
                    <p style={{marginTop:-38,marginLeft:-12}}>Drible</p>
               </div>
                    <DropdownButton title='Compétitions' id='dropdown-basic' style={{marginRight:500,marginTop:-50,background:'#20243f'}}>
                      <MenuItem eventKey="1">Current Compétitions</MenuItem>
                      <MenuItem eventKey="2">All Compétitions</MenuItem>
                    </DropdownButton>

                  </div>

                  </Col>
                </Col>
                <Col xs={12}>
                <div style={{marginLeft:90,marginTop:20}}>
      
                        
                          <div style={{marginRight:790}}>
                            <Badge  style={{height:40,width:100,background:'#20243f'}}>
                             <Icon glyph='icon-fontello-trophy' style={{width:50}} />
                              <h5 style={{marginTop:1}}> Trophies </h5>

                              <h4 style={{color:'fg-white',marginTop:-13}}> 22</h4>
                             
                            </Badge>
                         
                          </div>

                     <div style={{marginRight:500,marginTop:-40}}>
                            <Badge style={{height:40,width:150,background:'#20243f'}}>
                              <h5 style={{marginTop:1}}> Numbre of matchs </h5>
                              <h4 style={{color:'fg-white',marginTop:-13}}> 22</h4>
                             
                            </Badge>
                         
                          </div>
                      <div style={{marginRight:160,marginTop:-40}}>
                            <Badge style={{height:40,width:150,background:'#20243f'}}>
                              <h5 style={{marginTop:1}}> Numbre of gools </h5>
                              <h4 style={{color:'rfg-white',marginTop:-13}}> 22</h4>
                             
                            </Badge>
                         
                          </div>
                      <div style={{marginLeft:130,marginTop:-40}}>
                            <Badge style={{height:40,width:100,background:'#20243f'}}>
                              <h5 style={{marginTop:1}}> Teams </h5>
                              <h4 style={{color:'fg-white',marginTop:-13}}> 22</h4>
                             
                            </Badge>
                         
                          </div>
                      <div style={{marginLeft:370,marginTop:-40}}>
                            <Badge style={{height:40,width:100,background:'#20243f'}}>
                              <h5 style={{marginTop:1}}> Timming </h5>
                              <h4 style={{color:'fg-white',marginTop:-13}}> 22</h4>
                             
                            </Badge>
                         
                      </div>
                      <div style={{marginLeft:610,marginTop:-40}}>
                            <Badge style={{height:40,width:100,background:'#20243f'}}>
                              <h5 style={{marginTop:1}}> Cards </h5>
                              <h4 style={{color:'fg-white',marginTop:-13}}> 22</h4>
                             
                            </Badge>
                         
                       </div>
                </div>
                <div style={{marginTop:60,marginRight:400}}>
                                      <div style={{marginLeft:130,marginTop:-40}}>
                            <Badge  style={{height:40,width:100,background:'red'}}>
                              <h5 style={{marginTop:1}}> Loss </h5>
                              <h4 style={{color:'fg-white',marginTop:-13}}> 22</h4>
                             
                            </Badge>
                         
                          </div>
                      <div style={{marginLeft:370,marginTop:-40}}>
                            <Badge style={{height:40,width:100,background:'yellow'}}>
                              <h5 style={{marginTop:1}}> Draw </h5>
                              <h4 style={{color:'fg-white',marginTop:-13}}> 22</h4>
                             
                            </Badge>
                         
                      </div>
                      <div style={{marginLeft:555,marginTop:-40}}>
                            <Badge style={{height:40,width:100,background:'green'}}>
                              <h5 style={{marginTop:1}}> Win </h5>
                              <h4 style={{color:'fg-white',marginTop:-13}}> 22</h4>
                             
                            </Badge>
                         
                       </div>
                </div>
                </Col>
                <Col xs={12} style={{marginTop:20}}>
                <Col xs={1}>
                </Col>
               <Col xs={10} style={{border: '2px solid #e9f0f5',height:200}}>
               <Col xs={4} style={{marginTop:20}} >
                    <a className='gallery-1 gallery-item-link' href={`/imgs/app/gallery/tumblr_n6es0tRk5w1st5lhmo1_1280.jpg`} title={this.props.title} >
                    <Image responsive src={`/imgs/app/gallery/tumblr_n6es0tRk5w1st5lhmo1_1280-thumb.jpg`} alt={this.props.title} width='200' height='150'/>
                    </a>
                </Col>
                <Col xs={8} style={{marginTop:20}}>
                    <Badge style={{background:'#43496a'}}  style={{height:158,width:470}}>
                              <h2 style={{marginTop:-1,color:'#fff'}}> Championnat amateur Tunisie </h2>
                              
                             
                            </Badge>
                </Col>

             
                    </Col>
                 <Col xs={1}>
                </Col>
                </Col>
                <Col xs={12}>
                <Col xs={1}>
                </Col>
                <Col xs={10}>
                <Table bordered striped condensed style={{width:833,marginLeft:-25,background:'white'}}>
                          <thead>
                            <tr>
                          
                              <td style={{background:'gray',color:'white'}} colSpan="3">Match</td>
                              <td style={{background:'gray',color:'white'}}> Gools
                                </td>
                                 <td style={{background:'gray',color:'white'}}> Yellew Cards
                                </td>
                                 <td style={{background:'gray',color:'white'}}> Red Cards
                                </td>
                                 <td style={{background:'gray',color:'white'}}> Timming
                                </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>ESS</td>
                              <td>1-1</td>
                              <td>EST</td>
                                  <td> Gools
                                </td>
                                 <td> Gools
                                </td>
                                 <td> Gools
                                </td>
                                 <td> Gools
                                </td>
                            </tr>
                            <tr>
                     <td>ESS</td>
                              <td>1-1</td>
                              <td>CA</td>
                                  <td> 1
                                </td>
                                 <td> 2
                                </td>
                                 <td> 1
                                </td>
                                 <td> 50
                                </td>
                            </tr>
                              <tr>
                     <td>ESS</td>
                              <td>1-1</td>
                              <td>CA</td>
                                  <td> 1
                                </td>
                                 <td> 2
                                </td>
                                 <td> 1
                                </td>
                                 <td> 50
                                </td>
                            </tr>
                                     <tr>
                     <td>ESS</td>
                              <td>1-1</td>
                              <td>CA</td>
                                  <td> 1
                                </td>
                                 <td> 2
                                </td>
                                 <td> 1
                                </td>
                                 <td> 50
                                </td>
                            </tr>
                                     <tr>
                     <td>ESS</td>
                              <td>1-1</td>
                              <td>CA</td>
                                  <td> 1
                                </td>
                                 <td> 2
                                </td>
                                 <td> 1
                                </td>
                                 <td> 50
                                </td>
                            </tr>
                                     <tr>
                     <td>ESS</td>
                              <td>1-1</td>
                              <td>CA</td>
                                  <td> 1
                                </td>
                                 <td> 2
                                </td>
                                 <td> 1
                                </td>
                                 <td> 50
                                </td>
                            </tr>
                          </tbody>
                        </Table>
                        </Col>
                        <Col xs={1}>
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
