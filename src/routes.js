import React from 'react';
import classNames from 'classnames';
import { IndexRoute, Route } from 'react-router';

import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';

/* Common Components */

import Sidebar from './common/sidebar';
import Header from './common/header';
import Footer from './common/footer';

/* Pages */

import Homepage from './routes/Homepage';

import Dashboard from './routes/Dashboard';

import Gallery from './routes/Gallery';

import Social from './routes/Social';

import Posts from './routes/Posts';
import Post from './routes/Post';

import Panels from './routes/Panels';

import LineSeries from './routes/LineSeries';
import AreaSeries from './routes/AreaSeries';
import BarColSeries from './routes/BarColSeries';
import MixedSeries from './routes/MixedSeries';
import PieDonutSeries from './routes/PieDonutSeries';

import Chartjs from './routes/Chartjs';
import C3js from './routes/C3js';
import Morrisjs from './routes/Morrisjs';

import StaticTimeline from './routes/StaticTimeline';
import InteractiveTimeline from './routes/InteractiveTimeline';

import Codemirrorjs from './routes/Codemirrorjs';
import Maps from './routes/Maps';
import Editor from './routes/Editor';

import Buttons from './routes/Buttons';
import Dropdowns from './routes/Dropdowns';
import TabsAndNavs from './routes/TabsAndNavs';
import Sliders from './routes/Sliders';
import Knobs from './routes/Knobs';
import Modals from './routes/Modals';
import Messengerjs from './routes/Messengerjs';

import Controls from './routes/Controls';
import XEditable from './routes/XEditable';
import Wizard from './routes/Wizard';

import Tables from './routes/Tables';
import Datatablesjs from './routes/Datatablesjs';
import Tablesawjs from './routes/Tablesawjs';
import Datatablesclients from './routes/Datatablesclients';
import Datatablesteams from './routes/Datatablesteams';
import Datatablesadmins from './routes/Datatablesadmins';
import Datatablescompetitions from './routes/Datatablescompetitions';
import Datatablesorganisers from './routes/Datatablesorganisers';

import Inbox from './application/admin/mail/InboxAdmin';
import Mail from './application/admin/mail/MailAdmin';
import Compose from './application/admin/mail/ComposeAdmin';
import MyTablee from './application/admin/MyTablee';

import DatatablesClientss from './application/admin/DatatablesClientss';
import DatatablesAdmin from './application/admin/DatatablesAdmin';
import DatatablesTeam from './application/admin/DatatablesTeam';
import DatatablesCompetition from './application/admin/DatatablesCompetition';
import CurrentCompetition from './application/admin/CurrentCompetition';
import DatatablesOrganiser from './application/admin/DatatablesOrganiser';
import StandByOrganiser from './application/admin/StandByOrganiser';
import Calendrier from './application/admin/Calendrier';
import LoginAdmin from './application/admin/LoginAdmin';
import StaticTimeLineAdmin from './application/admin/StaticTimeLineAdmin';
import DashboardAdmin from './application/admin/DashboardAdmin';
import ClientProfilAdmin from './application/admin/ClientProfilAdmin';
import ClientCurrentCompetitionAdmin from './application/admin/competition/ClientCurrentCompetitionAdmin';
import ClientAllCompetitionAdmin from './application/admin/competition/ClientAllCompetitionAdmin';
import ClientDetailMatchAdmin from './application/admin/ClientDetailMatchAdmin';
import TeamProfilAdmin from './application/admin/TeamProfilAdmin';
import TeamDetailsCompetitionAdmin from './application/admin/TeamDetailsCompetitionAdmin';
import TeamCurrentCompetitionAdmin from './application/admin/TeamCurrentCompetitionAdmin';
import TeamAllCompetitionAdmin from './application/admin/TeamAllCompetitionAdmin';
import ClientDetailCompetitionAdmin from './application/admin/competition/ClientDetailCompetitionAdmin';
import TeamDetailsMatchAdmin from './application/admin/TeamDetailsMatchAdmin';
import AddAdmin from './application/admin/AddAdmin';
import OrganiserProfil from './application/admin/OrganiserProfil';
import ClientOrganiser from './application/organiser/ClientOrganiser';

import DashboardOrganiser from './application/organiser/DashboardOrganiser';
import StaticTimeLineOrganiser from './application/organiser/StaticTimeLineOrganiser';
import TeamsOrganiser from './application/organiser/team/TeamsOrganiser';
import HistoryOrganiser from './application/organiser/HistoryOrganiser';
import CalendrierOrganiser from './application/organiser/CalendrierOrganiser';
import Stadium from './application/organiser/Stadium';
import OrganiserProfilOrganiser from './application/organiser/OrganiserProfilOrganiser';


import CurrentTouranement from './application/organiser/touranement/CurrentTouranement';
import NewTouranement from './application/organiser/touranement/NewTouranement';
import ManageStandByTouranement from './application/organiser/touranement/ManageStandByTouranement';
import TouranementCalendar from './application/organiser/touranement/TouranementCalendar';
import OrganiserGroupeStage from './application/organiser/touranement/OrganiserGroupeStage';
import OrganiserKnockOut from './application/organiser/touranement/OrganiserKnockOut';
import OrganiserDetailsMatch from './application/organiser/touranement/OrganiserDetailsMatch';
import SecondNewTouranement from './application/organiser/touranement/SecondNewTouranement';
import OrganiserCurrentCompetitions from './application/organiser/touranement/OrganiserCurrentCompetitions';
import OrganiserAllCompetitions from './application/organiser/touranement/OrganiserAllCompetitions';


import StandByFriendsOrganisers from './application/organiser/friend/StandByFriendsOrganisers';
import OrganiserFriends from './application/organiser/friend/OrganiserFriends';

import ProfilTeamOrganiser from './application/organiser/team/ProfilTeamOrganiser';



import Login from './application/Login';

import SignupOrganiser from './application/organiser/SignupOrganiser';
import SecondSignupOrganiser from './application/organiser/SecondSignupOrganiser';


import Grids from './routes/Grids';
import Calendar from './routes/Calendar';

import Dropzonejs from './routes/Dropzonejs';
import Cropjs from './routes/Cropjs';

import Fonts from './routes/Fonts';


import Signup from './routes/Signup';
import SignupAdmin from './application/admin/SignupAdmin';
import Invoice from './routes/Invoice';
import Pricing from './routes/Pricing';

import Lock from './routes/Lock';
import ContactInformation from './routes/ContactInformation';
import AboutLocation from './routes/AboutLocation';
import SelectPhoto from './routes/SelectPhoto';


class App extends React.Component {
  render() {
    return (
      <MainContainer {...this.props}>
        <Sidebar />
        <Header />
        <div id='body'>
          <Grid>
            <Row>
              <Col xs={12}>
                {this.props.children}
              </Col>
            </Row>
          </Grid>
        </div>
        <Footer />
      </MainContainer>
    );
  }
}

/**
 * Includes Sidebar, Header and Footer.
 */
const routes = (
  <Route component={App}>
    <Route path='dashboard' component={Dashboard} />
    <Route path='mailbox/inbox' component={Inbox} />
    <Route path='mailbox/mail' component={Mail} />
    <Route path='mailbox/compose' component={Compose} />
    <Route path='gallery' component={Gallery} />
    <Route path='social' component={Social} />
    <Route path='blog/posts' component={Posts} />
    <Route path='blog/post' component={Post} />
    <Route path='panels' component={Panels} />
    <Route path='charts/rubix/line' component={LineSeries} />
    <Route path='charts/rubix/area' component={AreaSeries} />
    <Route path='charts/rubix/barcol' component={BarColSeries} />
    <Route path='charts/rubix/mixed' component={MixedSeries} />
    <Route path='charts/rubix/piedonut' component={PieDonutSeries} />
    <Route path='charts/chartjs' component={Chartjs} />
    <Route path='charts/c3js' component={C3js} />
    <Route path='charts/morrisjs' component={Morrisjs} />
    <Route path='timeline' component={StaticTimeline} />
    <Route path='interactive-timeline' component={InteractiveTimeline} />
    <Route path='codemirror' component={Codemirrorjs} />
    <Route path='maps' component={Maps} />
    <Route path='editor' component={Editor} />
    <Route path='ui-elements/buttons' component={Buttons} />
    <Route path='ui-elements/dropdowns' component={Dropdowns} />
    <Route path='ui-elements/tabs-and-navs' component={TabsAndNavs} />
    <Route path='ui-elements/sliders' component={Sliders} />
    <Route path='ui-elements/knobs' component={Knobs} />
    <Route path='ui-elements/modals' component={Modals} />
    <Route path='ui-elements/messenger' component={Messengerjs} />
    <Route path='forms/controls' component={Controls} />
    <Route path='forms/x-editable' component={XEditable} />
    <Route path='forms/wizard' component={Wizard} />
    <Route path='tables/bootstrap-tables' component={Tables} />
    <Route path='tables/datatables' component={Datatablesjs} />
    <Route path='tables/Datatablesclients' component={Datatablesclients} />
    <Route path='tables/Datatablesteams' component={Datatablesteams} />
    <Route path='tables/Datatablesadmins' component={Datatablesadmins} />
    <Route path='tables/Datatablescompetitions' component={Datatablescompetitions} />
    <Route path='tables/Datatablesorganisers' component={Datatablesorganisers} />
    <Route path='tables/tablesaw' component={Tablesawjs} />
    <Route path='grid' component={Grids} />
    <Route path='calendar' component={Calendar} />
    <Route path='file-utilities/dropzone' component={Dropzonejs} />
    <Route path='file-utilities/crop' component={Cropjs} />
    <Route path='fonts' component={Fonts} />
    <Route path='invoice' component={Invoice} />
    <Route path='pricing' component={Pricing} />



    <Route path='Admin/mailbox/InboxAdmin' component={Inbox} />
    <Route path='Admin/mailbox/MailAdmin' component={Mail} />
    <Route path='Admin/mailbox/ComposeAdmin' component={Compose} />
    <Route path='Admin/MyTablee' component={MyTablee} />
    <Route path='Admin/DatatablesClientss' component={DatatablesClientss} />
    <Route path='Admin/DatatablesTeam' component={DatatablesTeam} />
    <Route path='Admin/DatatablesAdmin' component={DatatablesAdmin} />
    <Route path='Admin/DatatablesCompetition' component={DatatablesCompetition} />
    <Route path='Admin/CurrentCompetition' component={CurrentCompetition} />
    <Route path='Admin/DatatablesOrganiser' component={DatatablesOrganiser} />
    <Route path='Admin/StandByOrganiser' component={StandByOrganiser} />
    <Route path='Admin/Calendrier' component={Calendrier} />
    <Route path='Admin/StaticTimeLineAdmin' component={StaticTimeLineAdmin} />
    <Route path='Admin/DashboardAdmin' component={DashboardAdmin} />
    <Route path='Admin/ClientProfilAdmin' component={ClientProfilAdmin} />
    <Route path='Admin/ClientCurrentCompetitionAdmin' component={ClientCurrentCompetitionAdmin} />
    <Route path='Admin/ClientAllCompetitionAdmin' component={ClientAllCompetitionAdmin} />
    <Route path='Admin/ClientDetailMatchAdmin' component={ClientDetailMatchAdmin} />
    <Route path='Admin/TeamProfilAdmin' component={TeamProfilAdmin} />
    <Route path='Admin/TeamDetailsCompetitionAdmin' component={TeamDetailsCompetitionAdmin} />
    <Route path='Admin/TeamCurrentCompetitionAdmin' component={TeamCurrentCompetitionAdmin} />
    <Route path='Admin/TeamAllCompetitionAdmin' component={TeamAllCompetitionAdmin} />
    <Route path='Admin/ClientDetailCompetitionAdmin' component={ClientDetailCompetitionAdmin} />
    <Route path='Admin/TeamDetailsMatchAdmin' component={TeamDetailsMatchAdmin} />
    <Route path='Admin/OrganiserProfil' component={OrganiserProfil} />
    <Route path='organiser/ClientOrganiser' component={ClientOrganiser} />
    <Route path='Admin/gallery' component={Gallery} />

    <Route path='Organiser/DashboardOrganiser' component={DashboardOrganiser} />
    <Route path='Organiser/StaticTimeLine' component={StaticTimeLineOrganiser} />
    <Route path='Organiser/History' component={HistoryOrganiser} />
    <Route path='Organiser/CalendrierOrganiser' component={CalendrierOrganiser} />

    <Route path='Organiser/OrganiserCurrentCompetitions' component={OrganiserCurrentCompetitions} />
    <Route path='Organiser/OrganiserAllCompetitions' component={OrganiserAllCompetitions} />
    <Route path='Organiser/CurrentTouranement' component={CurrentTouranement} />
    <Route path='Organiser/NewTouranement' component={NewTouranement} />
    <Route path='Organiser/SecondNewTouranement' component={SecondNewTouranement} />
    <Route path='Organiser/ManageStandByTouranement' component={ManageStandByTouranement} />
    <Route path='Organiser/TouranementCalendar' component={TouranementCalendar} />
    <Route path='Organiser/GroupeStage' component={OrganiserGroupeStage} />
    <Route path='Organiser/KnockOut' component={OrganiserKnockOut} />
    <Route path='Organiser/DetailsMatch' component={OrganiserDetailsMatch} />
    <Route path='Organiser/Stadium' component={Stadium} />
    <Route path='Organiser/OrganiserProfilOrganiser' component={OrganiserProfilOrganiser} />


    <Route path='Organiser/StandByFriends' component={StandByFriendsOrganisers} />
    <Route path='Organiser/OrganiserFriends' component={OrganiserFriends} />

    <Route path='Organiser/Teams' component={TeamsOrganiser} />
    <Route path='Organiser/ProfilTeamOrganiser' component={ProfilTeamOrganiser} />








  </Route>
);

/**
 * No Sidebar, Header or Footer. Only the Body is rendered.
 */
const basicRoutes = (
  <Route>
    <Route path='Organiser/SignupOrganiser' component={SignupOrganiser} />
    <Route path='Organiser/SecondSignupOrganiser' component={SecondSignupOrganiser} />
    <Route path='Login' component={Login} />
    <Route path='Admin/SignupAdmin' component={SignupAdmin} />
    <Route path='Admin/LoginAdmin' component={LoginAdmin} />
    <Route path='AddAdmin' component={AddAdmin} />
    <Route path='lock' component={Lock} />
    <Route path='signup' component={Signup} />
    <Route path='ContactInformation' component={ContactInformation} />
    <Route path='AboutLocation' component={AboutLocation} />
    <Route path='SelectPhoto' component={SelectPhoto} />
  </Route>
);

const combinedRoutes = (
  <Route>
    <Route>
      {routes}
    </Route>
    <Route>
      {basicRoutes}
    </Route>
  </Route>
);

export default (
  <Route>
    <Route path='/' component={Login} />

    <Route path='/ltr'>
      {combinedRoutes}
    </Route>
    <Route path='/rtl'>
      {combinedRoutes}
    </Route>
  </Route>
);
