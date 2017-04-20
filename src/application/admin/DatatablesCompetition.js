import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

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

class DatatablesCompettionComponent extends React.Component {

  handleSelect(index, last) {
      console.log('Selected tab: ' + index + ', Last tab: ' + last);
    }

  render() {
    return (
      <div>
      {/*
             <Tabs/> is a composite component and acts as the main container.

             `onSelect` is called whenever a tab is selected. The handler for
             this function will be passed the current index as well as the last index.

             `selectedIndex` is the tab to select when first rendered. By default
             the first (index 0) tab will be selected.

             `forceRenderTabPanel` By default this react-tabs will only render the selected
             tab's contents. Setting `forceRenderTabPanel` to `true` allows you to override the
             default behavior, which may be useful in some circumstances (such as animating between tabs).

           */}

           <Tabs
             onSelect={this.handleSelect}
             selectedIndex={0}
           >

             {/*
               <TabList/> is a composite component and is the container for the <Tab/>s.
             */}

             <TabList>

               {/*
                 <Tab/> is the actual tab component that users will interact with.

                 Selecting a tab can be done by either clicking with the mouse,
                 or by using the keyboard tab to give focus then navigating with
                 the arrow keys (right/down to select tab to the right of selected,
                 left/up to select tab to the left of selected).

                 The content of the <Tab/> (this.props.children) will be shown as the label.
               */}

               <Tab>championship</Tab>
               <Tab>touranement</Tab>
               <Tab>blablablabla</Tab>
             </TabList>

             {/*
               <TabPanel/> is the content for the tab.

               There should be an equal number of <Tab/> and <TabPanel/> components.
               <Tab/> and <TabPanel/> components are tied together by the order in
               which they appear. The first (index 0) <Tab/> will be associated with
               the <TabPanel/> of the same index. When you run this example with
               `selectedIndex` equal to 0, the tab with the label "Foo" will be selected
               and the content shown will be "Hello from Foo".

               As with <Tab/> the content of <TabPanel/> will be shown as the content.
             */}

             <TabPanel>
               <h2>Hello from Foo</h2>
             </TabPanel>
             <TabPanel>
               <h2>Hello from Bar</h2>
             </TabPanel>
             <TabPanel>
               <h2>Hello from Baz</h2>
             </TabPanel>
           </Tabs>
         </div>
    );
  }
}

export default class DatatablesCompettion extends React.Component {
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
                      <DatatablesCompettionComponent />
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
