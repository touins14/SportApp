import React from 'react';

import {
  Sidebar, SidebarNav, SidebarNavItem,
  SidebarControls, SidebarControlBtn,
  LoremIpsum, Grid, Row, Col, FormControl,
  Label, Progress, Icon,
  SidebarDivider
} from '@sketchpixy/rubix';

import { Link, withRouter } from 'react-router';

import ChatComponent from './chat';
import StatisticsComponent from './statistics';
import TimelineComponent from './timeline';
import NotificationsComponent from './notifications';

@withRouter
class ApplicationSidebar extends React.Component {
  handleChange(e) {
    this._nav.search(e.target.value);
  }

  getPath(path) {
    var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';

    path = `/${dir}/${path}`;
    return path;
  }


  render() {

    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <FormControl type='text' placeholder='Search...' onChange={::this.handleChange} className='sidebar-search' style={{border: 'none', background: 'none', margin: '10px 0 0 0', borderBottom: '1px solid #666', color: 'white'}} />
              <div className='sidebar-nav-container'>
                <SidebarNav style={{marginBottom: 0}} ref={(c) => this._nav = c}>

                  <SidebarNavItem glyph='icon-fontello-gauge' name='Dashboard' href={::this.getPath('Admin/DashboardAdmin')} />
                  <SidebarNavItem glyph='icon-feather-mail' name={<span>Mailbox <Label className='bg-darkgreen45 fg-white'>3</Label></span>}>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-feather-inbox' name='Inbox' href={::this.getPath('Admin/mailbox/InboxAdmin')} />
                      <SidebarNavItem glyph='icon-outlined-mail-open' name='Mail' href={::this.getPath('Admin/mailbox/MailAdmin')} />
                      <SidebarNavItem glyph='icon-dripicons-message' name='Compose' href={::this.getPath('Admin/mailbox/ComposeAdmin')} />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem href={::this.getPath('Admin/DatatablesClientss')} glyph='icon-fontello-th-2'  name='liste of clients' />
                        <SidebarNavItem href={::this.getPath('Admin/DatatablesTeam')} glyph='icon-fontello-th-2'  name='Teams' />
                        <SidebarNavItem href={::this.getPath('Admin/DatatablesAdmin')} glyph='icon-fontello-th-2'  name='Admins' />
                        <SidebarNavItem glyph='icon-fontello-table' name={<span>organisers <Label className='bg-blue fg-white'>2</Label></span>}>
                            <SidebarNav>
                      <SidebarNavItem href={::this.getPath('Admin/DatatablesOrganiser')} glyph='icon-fontello-th-thumb' name='lise of organisers' />
                      <SidebarNavItem href={::this.getPath('Admin/StandByOrganiser')} glyph='icon-fontello-th-2' name='manage stand by organisers' />
                    </SidebarNav>
                  </SidebarNavItem>
                        <SidebarNavItem glyph='icon-fontello-table' name={<span>competitions <Label className='bg-blue fg-white'>2</Label></span>}>
                    <SidebarNav>
                      <SidebarNavItem href={::this.getPath('Admin/DatatablesCompetition')} glyph='icon-fontello-th-2' name='Liste of competitions' />
                        <SidebarNavItem href={::this.getPath('Admin/CurrentCompetition')} glyph='icon-fontello-th-2' name='Current competition' />
                    </SidebarNav>
                  </SidebarNavItem>

                  <SidebarNavItem href={::this.getPath('Admin/StaticTimeLineAdmin')} glyph='icon-ikons-time' name='Static Timeline' />


                  <SidebarNavItem href={::this.getPath('Admin/Calendrier')} glyph='icon-fontello-calendar-alt' name='Calendar' />

                </SidebarNav>
                <br />
                <br />
                <br />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
 }
}




@withRouter
class ApplicationSidebar2 extends React.Component {
  handleChange(e) {
    this._nav.search(e.target.value);
  }

  getPath(path) {
    var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';

    path = `/${dir}/${path}`;
    return path;
  }


  render() {

    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <FormControl type='text' placeholder='Search...' onChange={::this.handleChange} className='sidebar-search' style={{border: 'none', background: 'none', margin: '10px 0 0 0', borderBottom: '1px solid #666', color: 'white'}} />
              <div className='sidebar-nav-container'>
                <SidebarNav style={{marginBottom: 0}} ref={(c) => this._nav = c}>


                  <SidebarNavItem glyph='icon-fontello-gauge' name='Dashboard' href={::this.getPath('Organiser/DashboardOrganiser')} />
                  <SidebarNavItem glyph='icon-feather-mail' name={<span>Mailbox <Label className='bg-darkgreen45 fg-white'>3</Label></span>}>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-feather-inbox' name='Inbox' href={::this.getPath('mailbox/inbox')} />
                      <SidebarNavItem glyph='icon-outlined-mail-open' name='Mail' href={::this.getPath('mailbox/mail')} />
                      <SidebarNavItem glyph='icon-dripicons-message' name='Compose' href={::this.getPath('mailbox/compose')} />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='icon-fontello-table' name={<span>Friends <Label className='bg-blue fg-white'>2</Label></span>}>
                    <SidebarNav>
                      <SidebarNavItem href={::this.getPath('Organiser/OrganiserFriends')} glyph='icon-fontello-th-2' name='Liste of Friends' />
                        <SidebarNavItem href={::this.getPath('Organiser/StandByFriends')} glyph='icon-fontello-th-2' name='manage stand by friend' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem href={::this.getPath('Organiser/Stadium')} glyph='icon-fontello-th-2' name='Stadium' />
                        <SidebarNavItem href={::this.getPath('Organiser/Teams')} glyph='icon-fontello-th-2' name='Teams' />
                        <SidebarNavItem href={::this.getPath('Organiser/History')} glyph='icon-fontello-th-2' name='Solo History' />
                        <SidebarNavItem glyph='icon-fontello-table' name={<span>Touranement management <Label className='bg-blue fg-white'>2</Label></span>}>
                    <SidebarNav>
                      <SidebarNavItem href={::this.getPath('Organiser/CurrentTouranement')} glyph='icon-fontello-th-2' name='Current Touranement' />
                        <SidebarNavItem href={::this.getPath('Organiser/NewTouranement')} glyph='icon-fontello-th-2' name='Add new touranement' />
                        <SidebarNavItem href={::this.getPath('Organiser/ManageStandByTouranement')} glyph='icon-fontello-th-2' name='Manage stand by touranement' />
                    </SidebarNav>
                  </SidebarNavItem>

                  <SidebarNavItem href={::this.getPath('Organiser/StaticTimeLine')} glyph='icon-ikons-time' name='Static Timeline' />


                  <SidebarNavItem href={::this.getPath('Organiser/Calendrier')} glyph='icon-fontello-calendar-alt' name='Calendar' />


                </SidebarNav>
                <br />
                <br />
                <br />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
 }
}








class DummySidebar extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div className='sidebar-header'>DUMMY SIDEBAR</div>
            <LoremIpsum query='1p' />
          </Col>
        </Row>
      </Grid>
    );
  }
}

@withRouter
export default class SidebarContainer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name:'',
        photo:'',
        id:''
    };
  }
  componentDidMount() {


    var name=localStorage.getItem('name');
 this.setState({name:name})

    var photo=localStorage.getItem('photo');
     this.setState({photo:photo})
     var id=localStorage.getItem('userid');
      this.setState({id:id})
      
  }

  getPath(path) {
    var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
    path = `/${dir}/${path}`;
    return path;
  }

  render() {

  var dir = this.props.location.pathname;
console.log(dir)
 const substring = "/Organiser/";
    if (dir.includes(substring))
    {
      console.log(dir)
      return (
        <div id='sidebar'>
          <div id='avatar'>
            <Grid>
              <Row className='fg-white'>
                <Col xs={4} collapseRight>
                 <img src={'http://sportapp.astrolabs.io/'+this.state.photo} width='40' height='40' />
                </Col>
                <Col xs={8} collapseLeft id='avatar-col'>
                 <div style={{top: 23, fontSize: 16, lineHeight: 1, position: 'relative'}}>{this.state.name}</div>

                  <div>
                    <Progress id='demo-progress' value={30} color='#ffffff'/>
                    <Link to={::this.getPath('lock')}>
                      <Icon id='demo-icon' bundle='fontello' glyph='lock-5' />
                    </Link>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
          <SidebarControls>
            <SidebarControlBtn bundle='fontello' glyph='docs' sidebar={0} />
            <SidebarControlBtn bundle='fontello' glyph='chat-1' sidebar={1} />
            <SidebarControlBtn bundle='fontello' glyph='chart-pie-2' sidebar={2} />
            <SidebarControlBtn bundle='fontello' glyph='th-list-2' sidebar={3} />
            <SidebarControlBtn bundle='fontello' glyph='bell-5' sidebar={4} />
          </SidebarControls>
          <div id='sidebar-container' style={{background:'#43496a'}}>
            <Sidebar sidebar={0}>
              <ApplicationSidebar2 />
            </Sidebar>
            <Sidebar sidebar={1}>
              <ChatComponent />
            </Sidebar>
            <Sidebar sidebar={2}>
              <StatisticsComponent />
            </Sidebar>
            <Sidebar sidebar={3}>
              <TimelineComponent />
            </Sidebar>
            <Sidebar sidebar={4}>
              <NotificationsComponent />
            </Sidebar>
          </div>
        </div>
      );
    }
     const substringg = "/Admin/";
    if (dir.includes(substringg))
    {
      console.log(::this.getPath('Admin'))
    return (
      <div id='sidebar'>
        <div id='avatar'>
          <Grid>
            <Row className='fg-white'>
              <Col xs={4} collapseRight>
                <img src='/imgs/app/avatars/avatar0.png' width='40' height='40' />
              </Col>
              <Col xs={8} collapseLeft id='avatar-col'>
                <div style={{top: 23, fontSize: 16, lineHeight: 1, position: 'relative'}}> haythem</div>
                <div>
                  <Progress id='demo-progress' value={30} color='#ffffff'/>
                  <Link to={::this.getPath('lock')}>
                    <Icon id='demo-icon' bundle='fontello' glyph='lock-5' />
                  </Link>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <SidebarControls>
          <SidebarControlBtn bundle='fontello' glyph='docs' sidebar={0} />
          <SidebarControlBtn bundle='fontello' glyph='chat-1' sidebar={1} />
          <SidebarControlBtn bundle='fontello' glyph='chart-pie-2' sidebar={2} />
          <SidebarControlBtn bundle='fontello' glyph='th-list-2' sidebar={3} />
          <SidebarControlBtn bundle='fontello' glyph='bell-5' sidebar={4} />
        </SidebarControls>
        <div id='sidebar-container' style={{background:'#43496a'}}>
          <Sidebar sidebar={0}>
            <ApplicationSidebar />
          </Sidebar>
          <Sidebar sidebar={1}>
            <ChatComponent />
          </Sidebar>
          <Sidebar sidebar={2}>
            <StatisticsComponent />
          </Sidebar>
          <Sidebar sidebar={3}>
            <TimelineComponent />
          </Sidebar>
          <Sidebar sidebar={4}>
            <NotificationsComponent />
          </Sidebar>
        </div>
      </div>
    );
    }
  else   return null;
  }


}
