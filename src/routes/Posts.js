import React from 'react';
import { Link, withRouter } from 'react-router';

import {
  Tag,
  Row,
  Col,
  Icon,
  Grid,
  Panel,
  Image,
  Button,
  PanelBody,
  PanelLeft,
  PanelRight,
  LoremIpsum,
  Pagination,
  InputGroup,
  PanelHeader,
  PanelFooter,
  FormControl,
  PanelContainer,
} from '@sketchpixy/rubix';

class PaginationAdvanced extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { activePage: 1 };
  }

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
  }

  render() {
    return (
      <Pagination
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        items={20}
        maxButtons={5}
        activePage={this.state.activePage}
        onSelect={::this.handleSelect} />
    );
  }
}

@withRouter
class PostSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shares: 0,
      likes: 0
    };
  }

  getPath(path) {
    var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
    path = `/${dir}/${path}`;
    return path;
  }

  componentDidMount() {
    this.setState({
      shares: Math.round(this.props.comments * Math.random())+2,
      likes: Math.round(this.props.comments * Math.random())+5
    });
  }
  render() {
    return (
      <PanelContainer controls={false}>
        <Panel>
          <PanelHeader>
            <div style={{background: `url(${this.props.img})`, height: 250, backgroundSize: 'cover', backgroundPosition: 'center'}} />
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h3 className='fg-black50'>{this.props.header}</h3>
                  <Grid>
                    <Row>
                      <Col xs={6} collapseLeft collapseRight>
                        <div className='fg-darkgray50'>
                          <small>by <Link to={::this.getPath('blogs/post')}>{this.props.author}</Link> / {this.props.date}</small>
                        </div>
                      </Col>
                      <Col xs={6} collapseLeft collapseRight className='text-right'>
                        <div className='fg-darkgray25 fg-hover-black50'>
                          <small><Icon glyph='icon-ikons-time' style={{position: 'relative', top: 1}} /><span> {this.props.minutes} minutes read</span></small>
                        </div>
                      </Col>
                    </Row>
                  </Grid>
                  <p style={{marginTop: 25}}>
                    <span>{this.props.children}..</span>
                  </p>
                  <p>
                    <Link to={::this.getPath('blogs/post')}>Read More</Link>
                  </p>
                </Col>
              </Row>
            </Grid>
            <hr style={{margin: 0}}/>
          </PanelBody>
          <PanelFooter>
            <Grid>
              <Row>
                <Col xs={4} style={{paddingTop: 12.5, paddingBottom: 12.5}}>
                  <div><small><Icon glyph='icon-ikons-hashtag' style={{position: 'relative', top: 1}}/> {this.props.tag}</small></div>
                </Col>
                <Col xs={8} className='text-right' style={{paddingTop: 12.5, paddingBottom: 12.5}}>
                  <div style={{display: 'inline-block', marginLeft: 25}}>
                    <Icon style={{position: 'relative', lineHeight: 0, top: 2}} glyph='icon-ikons-speech-3'/><span> {this.props.comments}</span>
                  </div>{' '}
                  <div style={{display: 'inline-block', marginLeft: 25}}>
                    <Icon style={{position: 'relative', lineHeight: 0}} glyph='icon-fontello-share'/><span> {this.state.shares}</span>
                  </div>
                  <div className='fg-pink' style={{display: 'inline-block', marginLeft: 25}}>
                    <Icon style={{position: 'relative', lineHeight: 0, top: 2}} glyph='icon-ikons-heart'/><span> {this.state.likes}</span>
                  </div>
                </Col>
              </Row>
            </Grid>
          </PanelFooter>
        </Panel>
      </PanelContainer>
    );
  }
}

class Avatar extends React.Component {
  render() {
    return (
      <div className='inbox-avatar'>
        <img src={this.props.src} width='40' height='40' />
        <div className='inbox-avatar-name'>
          <div className='fg-darkgrayishblue75' style={{top: 0}}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

@withRouter
export default class Posts extends React.Component {
  getPath(path) {
    var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
    path = `/${dir}/${path}`;
    return path;
  }

  render() {
    return (
      <PanelContainer plain collapseBottom controls={false}>
        <Panel horizontal>
          <PanelLeft>
            <Row>
              <Col xs={12}>
                <PostSummary
                  img='/imgs/app/gallery/tumblr_na0kb0BLqR1st5lhmo1_1280.jpg'
                  header='Is Paris Best Experienced Through The Lens Of A Camera?'
                  author='Jordyn Ouellet (guest author)'
                  date='Sep 2, 2014'
                  minutes='5'
                  tag='ENTERTAINMENT'
                  comments='55'>
                    <LoremIpsum query='4s' />
                </PostSummary>
                <PostSummary
                  img='/imgs/app/gallery/tumblr_n7fgnop0bz1st5lhmo1_1280.jpg'
                  header="10 Things You Didn't Know Your Mac Could Do!"
                  author='Anna Sanchez'
                  date='Sep 3, 2014'
                  minutes='10'
                  tag='TECHNOLOGY'
                  comments='140'>
                    <LoremIpsum query='4s' />
                </PostSummary>
                <PostSummary
                  img='/imgs/app/gallery/tumblr_n9hyk7kMxc1st5lhmo1_1280.jpg'
                  header='Nostalgia is denial - denial of the painful present. The name for this denial is golden age thinking.'
                  author='Angelina Mills'
                  date='Sep 4, 2014'
                  minutes='22'
                  tag='PHILOSOPHY'
                  comments='300'>
                    <LoremIpsum query='4s' />
                </PostSummary>
              </Col>
            </Row>

            <div className='text-center'>
              <PaginationAdvanced />
            </div>
          </PanelLeft>
          <PanelRight className='hidden-xs' style={{width: 350}}>
            <Grid>
              <Row>
                <Col xs={12} collapseRight>
                  <PanelContainer controls={false}>
                    <Panel horizontal>
                      <PanelLeft style={{verticalAlign: 'middle'}}>
                        <Grid>
                          <Row>
                            <Col xs={12}>
                              <div>
                                <div style={{paddingTop: 12.5, paddingBottom: 12.5}}>
                                  {"Hi! My name is Anna Sanchez and I'm an innate minimalist."}
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Grid>
                      </PanelLeft>
                      <PanelRight className='bg-yellow' style={{verticalAlign: 'middle', padding: 12.5, width: 80}}>
                        <div className='text-center'><Image src='/imgs/app/avatars/avatar0.png' width='40' height='40' style={{borderRadius: 100}} /></div>
                      </PanelRight>
                    </Panel>
                  </PanelContainer>

                  <PanelContainer controls={false}>
                    <PanelBody style={{paddingBottom: 25, verticalAlign: 'middle', display: 'block'}}>
                      <div className='text-center'>
                        <Button bsStyle='darkblue' className='btn-icon' onlyOnHover>
                          <Icon glyph='icon-fontello-facebook' />
                        </Button>{' '}
                        <Button bsStyle='blue' className='btn-icon' onlyOnHover>
                          <Icon glyph='icon-fontello-twitter' />
                        </Button>{' '}
                        <Button bsStyle='red' className='btn-icon' onlyOnHover>
                          <Icon glyph='icon-fontello-gplus' />
                        </Button>{' '}
                        <Button bsStyle='pink' className='btn-icon' onlyOnHover>
                          <Icon glyph='icon-fontello-dribbble' />
                        </Button>{' '}
                        <Button bsStyle='red' className='btn-icon' onlyOnHover>
                          <Icon glyph='icon-fontello-flickr' />
                        </Button>{' '}
                        <Button bsStyle='orange75' className='btn-icon' onlyOnHover>
                          <Icon glyph='icon-fontello-instagram' />
                        </Button>
                      </div>
                    </PanelBody>
                  </PanelContainer>

                  <PanelContainer controls={false}>
                    <PanelBody style={{paddingBottom: 12.5}}>
                      <Grid>
                        <Row>
                          <Col xs={12} className='text-center'>
                            <div className='text-left'>
                              <div className='text-uppercase blog-sidebar-heading'>
                                <small>Trending posts</small>
                              </div>
                              <div style={{marginBottom: 12.5}}>
                                <Link to={::this.getPath('blogs/post')}>
                                  <LoremIpsum className='text-capitalize' query='3w'/>. <LoremIpsum className='text-capitalize' query='2w'/>?
                                </Link>
                                <div><small className='fg-darkgray50'><em>2 minutes ago</em> - <span className='fg-lightgreen'>Jordyn Ouellet</span></small></div>
                              </div>
                              <div style={{marginBottom: 12.5}}>
                                <Link to={::this.getPath('blogs/post')}><LoremIpsum className='text-capitalize' query='3w'/></Link>
                                <div><small className='fg-darkgray50'><em>5 hours ago</em> - <span className='fg-lightgreen'>Toby King</span></small></div>
                              </div>
                              <div style={{marginBottom: 12.5}}>
                                <Link to={::this.getPath('blogs/post')}><LoremIpsum className='text-capitalize' query='3w'/></Link>
                                <div><small className='fg-darkgray50'><em>3 days ago</em> - <span className='fg-lightgreen'>Angelina Mills</span></small></div>
                              </div>
                              <div>
                                <Link to={::this.getPath('blogs/post')}><LoremIpsum className='text-capitalize' query='3w'/></Link>
                                <div><small className='fg-darkgray50'><em>4 months ago</em> - <span className='fg-lightgreen'>Anna Sanchez</span></small></div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Grid>
                      <hr/>
                      <Grid>
                        <Row>
                          <Col xs={12} className='text-center'>
                            <Tag>web</Tag>{' '}
                            <Tag>travel</Tag>{' '}
                            <Tag>w3c</Tag>{' '}
                            <Tag>semantic</Tag>{' '}
                            <Tag>mac</Tag>{' '}
                            <Tag>music</Tag>{' '}
                            <Tag>html</Tag>{' '}
                            <Tag>javascript</Tag>{' '}
                            <Tag>css3</Tag>{' '}
                            <Tag>nodejs</Tag>{' '}
                            <Tag>linux</Tag>{' '}
                            <Tag>reactjs</Tag>{' '}
                          </Col>
                        </Row>
                      </Grid>
                    </PanelBody>
                  </PanelContainer>

                  <PanelContainer controls={false}>
                    <Panel>
                      <PanelBody style={{paddingBottom: 25}}>
                        <Grid>
                          <Row>
                            <Col xs={12}>
                              <div>
                                <div className='text-uppercase blog-sidebar-heading'>
                                  <small>Our writers</small>
                                </div>
                                <Avatar src='/imgs/app/avatars/avatar5.png'>Jordyn Ouellet</Avatar>
                                <Avatar src='/imgs/app/avatars/avatar9.png'>Ava Parry</Avatar>
                                <Avatar src='/imgs/app/avatars/avatar10.png'>Angelina Mills</Avatar>
                                <Avatar src='/imgs/app/avatars/avatar7.png'>Toby King</Avatar>
                              </div>
                            </Col>
                          </Row>
                        </Grid>
                        <hr/>
                        <Grid>
                          <Row>
                            <Col xs={12}>
                              <InputGroup>
                                <FormControl type='text' placeholder='email@example.com'/>
                                <InputGroup.Button>
                                  <Button bsStyle='darkgreen45'>subscribe</Button>
                                </InputGroup.Button>
                              </InputGroup>
                            </Col>
                          </Row>
                        </Grid>
                      </PanelBody>
                    </Panel>
                  </PanelContainer>
                </Col>
              </Row>
            </Grid>
          </PanelRight>
        </Panel>
      </PanelContainer>
    );
  }
}
