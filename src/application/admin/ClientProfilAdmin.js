import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router';
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
@withRouter
export default class ClientProfilAdmin extends React.Component {
  constructor(props) {
      super(props);
      console.log(props);
    this.state = {
      id:''
   };
    }

  componentDidMount() {
      var idc=localStorage.getItem('clientid');

console.log(idc);

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


                <Col xs={3} className='fg-white' style={{marginTop:20}}>
 <div style={{border: '2px solid #e9f0f5'}}>

                  <a className='gallery-1 gallery-item-link' href={`/imgs/app/gallery/tumblr_n6es0tRk5w1st5lhmo1_1280.jpg`} title={this.props.title}>
                    <Image responsive src={`/imgs/app/gallery/tumblr_n6es0tRk5w1st5lhmo1_1280-thumb.jpg`} alt={this.props.title} width='200' height='100'/>
                  </a>



       <h5 className='fg-darkgrayishblue75' style={{color:'#fff'}}>Ronaldo@gmail.com</h5>
                    <h5 className='fg-darkgrayishblue75' style={{color:'#fff'}}>22/22/1985</h5>
                     <h5 className='fg-darkgrayishblue75' style={{color:'#fff'}}>lachbouna</h5>
                      <h5 className='fg-darkgrayishblue75' style={{color:'#fff'}}>lach</h5>
                      <h5 className='fg-darkgrayishblue75' style={{color:'#fff'}}>22456789</h5>
                  </div>

                  </Col>



                  <Col xs={4} style={{marginTop:60}}>
                      <DropdownButton title='Compétitions' id='dropdown-basic' style={{background:'#20243f'}}>
                      <MenuItem eventKey="1">Current Compétitions</MenuItem>
                      <MenuItem eventKey="2">All Compétitions</MenuItem>
                    </DropdownButton>
                   <h3 className='fg-darkgrayishblue75' style={{color:'red'}}>Cristiano Ronaldo </h3>
                  </Col>

                  <Col xs={5} style={{marginTop:110}}>

                  <div className="rating" style={{marginRight:20,marginTop:-100}}>
                  <a href="#5" title="Give 5 stars" style={{marginLeft:20}}>☆</a>
                  <a href="#4" title="Give 4 stars" style={{m0arginLeft:20}}>☆</a>
                   <a href="#3" title="Give 3 stars" style={{marginLeft:20}}>☆</a>
                  <a href="#2" title="Give 2 stars" style={{marginLeft:20}}>☆</a>
                     <a href="#1" title="Give 1 star">☆</a>
                    </div>



                  </Col>
      </Row>
               <Row>
               <Col xs={2}>

                            <Badge  style={{height:45,width:110,background:'#20243f'}}>

                              <h4 style={{marginTop:1,marginRight:-2}}><Icon glyph='icon-fontello-trophy'/>Trophies</h4>

                              <h4 style={{color:'fg-white',marginTop:-10}}>22</h4>

                            </Badge>

               </Col>
               <Col xs={2}>
                            <Badge style={{height:45,width:110,background:'#20243f'}}>
                              <h4 style={{marginTop:1}}><Icon glyph='icon-fontello-trophy' style={{marginRight:5}}/>Matchs </h4>
                              <h4 style={{color:'fg-white',marginTop:-13}}>22</h4>

                            </Badge>
               </Col>
               <Col xs={2}>
                                   <Badge style={{height:45,width:110,background:'#20243f'}}>

                              <h4 style={{marginTop:1}}><Icon glyph='icon-fontello-network' style={{marginRight:5}}/>Gools</h4>
                              <h4 style={{color:'rfg-white',marginTop:-13}}>22</h4>

                            </Badge>
               </Col>
               <Col xs={2}>

                            <Badge style={{height:45,width:110,background:'#20243f'}}>
                            <h4 style={{marginTop:1}}><Icon glyph='icon-fontello-users-1' style={{marginRight:5}}  />Teams</h4>
                              <h4 style={{color:'fg-white',marginTop:-13}}>22</h4>

                            </Badge>

               </Col>
               <Col xs={2}>
                                           <Badge style={{height:45,width:110,background:'#20243f'}}>

                              <h4 style={{marginTop:1}}> <Icon glyph='icon-fontello-back-in-time' style={{marginRight:5}} />Timing</h4>

                              <h4 style={{color:'fg-white',marginTop:-13}}>22</h4>

                            </Badge>
               </Col>
               <Col xs={2}>
                                           <Badge style={{height:40,width:100,background:'#20243f'}}>

                              <h4 style={{marginTop:1}}>  <Icon glyph='icon-feather-paper-stack' style={{marginRight:5}} />Cards</h4>
                              <h4 style={{color:'fg-white',marginTop:-13}}>22</h4>

                            </Badge>
               </Col>




               </Row>
               <Row>
               <Col xs={3}>
               </Col>
              <Col xs={2}>


                            <Badge  style={{height:45,width:110,background:'red'}}>


                              <h4 style={{marginTop:-1}}><Icon glyph='icon-fontello-cancel-2' style={{marginRight:5}} />Loss</h4>
                              <h4 style={{marginTop:-11}}>22</h4>
                            </Badge>
               </Col>
           <Col xs={2}>

                            <Badge style={{height:45,width:110,background:'yellow'}}>
                             <h4 style={{marginTop:-1}}><Icon glyph='icon-dripicons-menu' style={{marginRight:5}} />Draw</h4>
                              <h4 style={{color:'fg-white',marginTop:-11}}>22</h4>

                            </Badge>
               </Col>
              <Col xs={2}>
                                <Badge style={{height:45,width:110,background:'green'}}>

                              <h4 style={{marginTop:-1}}><Icon glyph='icon-fontello-check' style={{marginRight:5}} />Win</h4>
                              <h4 style={{color:'fg-white',marginTop:-11}}> 22</h4>

                            </Badge>
               </Col>
                <Col xs={3}>
             </Col>
               </Row>
                <Col xs={12}>
                <div className='text-center'>
                <h4 className='fg-darkgrayishblue75' style={{textTransform: 'uppercase',marginTop:90}}>Vote</h4>
              </div>

                <Col xs={1}>
                </Col>
                <Col xs={10} style={{border: '2px solid #e9f0f5',height:380}}>
              <div>
                <h6 className='fg-darkgrayishblue75 hidden-xs' style={{marginRight:400}}>Skills</h6>
                 <h6 className='fg-darkgrayishblue75 hidden-xs' style={{marginTop:-25,marginLeft:400}}>Positions</h6>
              </div>
                <Col xs={6} style={{border: '2px solid #e9f0f5'}}>
                  <div style={{marginTop:30,height:288,marginRight:22}}>
                          <div>


                            <Badge className='bg-green fg-white'style= {{marginRight:200,marginTop:13}}>
                              Endurance
                            </Badge>
                             <div className="ratingVote" style={{marginLeft:90,marginTop:-55}}>
                  <a href="#5" title="Give 5 stars" >☆</a>
                  <a href="#4" title="Give 4 stars" >☆</a>
                   <a href="#3" title="Give 3 stars" >☆</a>
                  <a href="#2" title="Give 2 stars" >☆</a>
                     <a href="#1" title="Give 1 star">☆</a>

                      </div>
 <p style={{marginTop:-67,marginLeft:100}}> based on 2000 clients</p>
                      </div>

                      <div style={{marginTop:54}}>


                            <Badge className='bg-green fg-white'style= {{marginRight:200,marginTop:-95}}>
                              Technique
                            </Badge>
                             <div className="ratingVote" style={{marginLeft:90,marginTop:-105}}>
                  <a href="#5" title="Give 5 stars" >☆</a>
                  <a href="#4" title="Give 4 stars" >☆</a>
                   <a href="#3" title="Give 3 stars" >☆</a>
                  <a href="#2" title="Give 2 stars" >☆</a>
                     <a href="#1" title="Give 1 star">☆</a>

                      </div>
                      <p style={{marginTop:-67,marginLeft:100}}> based on 2000 clients</p>
                      </div>

                      <div style={{marginTop:-51}}>


                            <Badge className='bg-green fg-white'style= {{marginRight:200,marginTop:52}}>
                              Drible
                            </Badge>
                             <div className="ratingVote" style={{marginLeft:90,marginTop:-55}}>
                  <a href="#5" title="Give 5 stars" >☆</a>
                  <a href="#4" title="Give 4 stars" >☆</a>
                   <a href="#3" title="Give 3 stars" >☆</a>
                  <a href="#2" title="Give 2 stars" >☆</a>
                     <a href="#1" title="Give 1 star">☆</a>

                      </div>
                      <p style={{marginTop:-67,marginLeft:100}}> based on 2000 clients</p>
                      </div>
                      <div style={{marginTop:53}}>


                            <Badge className='bg-green fg-white'style= {{marginRight:200,marginTop:-95}}>
                              Shoot
                            </Badge>
                             <div className="ratingVote" style={{marginLeft:90,marginTop:-105}}>
                  <a href="#5" title="Give 5 stars" >☆</a>
                  <a href="#4" title="Give 4 stars" >☆</a>
                   <a href="#3" title="Give 3 stars" >☆</a>
                  <a href="#2" title="Give 2 stars" >☆</a>
                     <a href="#1" title="Give 1 star">☆</a>

                      </div>
                      <p style={{marginTop:-67,marginLeft:100}}> based on 2000 clients</p>
                      </div>
                           <div style={{marginTop:53}}>


                            <Badge className='bg-green fg-white'style= {{marginRight:200,marginTop:-95}}>
                              Speed
                            </Badge>
                             <div className="ratingVote" style={{marginLeft:90,marginTop:-105}}>
                  <a href="#5" title="Give 5 stars" >☆</a>
                  <a href="#4" title="Give 4 stars" >☆</a>
                   <a href="#3" title="Give 3 stars" >☆</a>
                  <a href="#2" title="Give 2 stars" >☆</a>
                     <a href="#1" title="Give 1 star">☆</a>

                      </div>
                      <p style={{marginTop:-67,marginLeft:100}}> based on 2000 clients</p>
                      </div>
                      </div>
                </Col>
                <Col xs={6} style={{border: '2px solid #e9f0f5',height:322}}>
                                  <div>
                          <div style={{marginTop:30}}>


                            <Badge className='bg-green fg-white'style= {{marginRight:200,marginTop:13}}>
                              Goolkeeper
                            </Badge>
                             <div className="ratingVote" style={{marginLeft:90,marginTop:-55}}>
                  <a href="#5" title="Give 5 stars" >☆</a>
                  <a href="#4" title="Give 4 stars" >☆</a>
                   <a href="#3" title="Give 3 stars" >☆</a>
                  <a href="#2" title="Give 2 stars" >☆</a>
                     <a href="#1" title="Give 1 star">☆</a>

                      </div>
                      <p style={{marginTop:-67,marginLeft:80}}> based on 2000 clients</p>
                      </div>

                      <div style={{marginTop:53}}>


                            <Badge className='bg-green fg-white'style= {{marginRight:200,marginTop:-95}}>
                              Midfielder
                            </Badge>
                             <div className="ratingVote" style={{marginLeft:90,marginTop:-105}}>
                  <a href="#5" title="Give 5 stars" >☆</a>
                  <a href="#4" title="Give 4 stars" >☆</a>
                   <a href="#3" title="Give 3 stars" >☆</a>
                  <a href="#2" title="Give 2 stars" >☆</a>
                     <a href="#1" title="Give 1 star">☆</a>

                      </div>
<p style={{marginTop:-67,marginLeft:80}}> based on 2000 clients</p>
                      </div>
                      <div style={{marginTop:54}}>


                            <Badge className='bg-green fg-white'style= {{marginRight:200,marginTop:-95}}>
                              Defender
                            </Badge>
                             <div className="ratingVote" style={{marginLeft:90,marginTop:-105}}>
                  <a href="#5" title="Give 5 stars" >☆</a>
                  <a href="#4" title="Give 4 stars" >☆</a>
                   <a href="#3" title="Give 3 stars" >☆</a>
                  <a href="#2" title="Give 2 stars" >☆</a>
                     <a href="#1" title="Give 1 star">☆</a>

                      </div>
                      <p style={{marginTop:-67,marginLeft:80}}> based on 2000 clients</p>
                      </div>
                      <div style={{marginTop:53}}>


                            <Badge className='bg-green fg-white'style= {{marginRight:200,marginTop:-95}}>
                              Stricker
                            </Badge>
                             <div className="ratingVote" style={{marginLeft:90,marginTop:-105}}>
                  <a href="#5" title="Give 5 stars" >☆</a>
                  <a href="#4" title="Give 4 stars" >☆</a>
                   <a href="#3" title="Give 3 stars" >☆</a>
                  <a href="#2" title="Give 2 stars" >☆</a>
                     <a href="#1" title="Give 1 star">☆</a>

                      </div>
                      </div>
                      <p style={{marginTop:-67,marginLeft:80}}> based on 2000 clients</p>
                      </div>
                </Col>

                </Col>
                   <Col xs={2}>
                </Col>
                </Col>
                 <Col xs={12}>
                <div className='text-center'>
                <h4 className='fg-darkgrayishblue75 hidden-xs' style={{textTransform: 'uppercase',marginTop:90}}>Coments</h4>
              </div>

                <Col xs={1}>
                </Col>
                <Col xs={8} style={{border: '2px solid #e9f0f5'}}>hahahahahah


                </Col>
                   <Col xs={2}>
                </Col>
                </Col>

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
