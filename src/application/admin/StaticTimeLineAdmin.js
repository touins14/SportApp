import React from 'react';

import {
  Row,
  Col,
  Panel,
  PanelBody,
  LoremIpsum,
  TimelineBody,
  TimelineIcon,
  TimelineView,
  TimelineItem,
  TimelineTitle,
  TimelineHeader,
  PanelContainer,
} from '@sketchpixy/rubix';

export default class StaticTimeLineAdmin extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm={6} smCollapseRight>
            <PanelContainer bordered>
              <Panel>
                <PanelBody>
                  <TimelineView className='border-hoverblue tl-blue'>
                    <TimelineItem>
                      <TimelineHeader>
                        <TimelineIcon className='bg-blue fg-white' glyph='icon-fontello-chat-1' />
                        <TimelineTitle>
                          Tue Jul 29 2014
                        </TimelineTitle>
                      </TimelineHeader>
                      <TimelineBody>
                        <ul>
                          <li>
                            <LoremIpsum query='2s' />
                          </li>
                        </ul>
                      </TimelineBody>
                    </TimelineItem>
                  </TimelineView>
                  <TimelineView className='border-hoverblue tl-blue'>
                    <TimelineItem>
                      <TimelineHeader>
                        <TimelineIcon className='bg-blue fg-white' glyph='icon-fontello-chat-1' />
                        <TimelineTitle>
                          Tue Jul 28 2014
                        </TimelineTitle>
                      </TimelineHeader>
                      <TimelineBody>
                        <ul>
                          <li>
                            <LoremIpsum query='2s' />
                          </li>
                          <li>
                            <LoremIpsum query='2s' />
                          </li>
                        </ul>
                      </TimelineBody>
                    </TimelineItem>
                  </TimelineView>
                </PanelBody>
              </Panel>
            </PanelContainer>
          </Col>
          <Col sm={6}>
            <PanelContainer bordered>
              <Panel>
                <PanelBody>
                  <TimelineView withHeader className='border-hoverblue tl-blue'>
                    <TimelineItem>
                      <TimelineHeader className='bg-hoverblue'>
                        <TimelineIcon className='bg-blue fg-white' glyph='icon-fontello-chat-1' />
                        <TimelineTitle>
                          Tue Jul 29 2014
                        </TimelineTitle>
                      </TimelineHeader>
                      <TimelineBody>
                        <ul>
                          <li>
                            <LoremIpsum query='2s' />
                          </li>
                        </ul>
                      </TimelineBody>
                    </TimelineItem>
                  </TimelineView>
                  <TimelineView withHeader className='border-hovergreen tl-lightgreen'>
                    <TimelineItem>
                      <TimelineHeader className='bg-hovergreen'>
                        <TimelineIcon className='bg-lightgreen fg-white' glyph='icon-fontello-chat-1' />
                        <TimelineTitle>
                          Tue Jul 28 2014
                        </TimelineTitle>
                      </TimelineHeader>
                      <TimelineBody>
                        <ul>
                          <li>
                            <LoremIpsum query='2s' />
                          </li>
                        </ul>
                      </TimelineBody>
                    </TimelineItem>
                  </TimelineView>
                  <TimelineView withHeader className='border-hoveryellow tl-darkorange'>
                    <TimelineItem>
                      <TimelineHeader className='bg-hoveryellow'>
                        <TimelineIcon className='bg-darkorange fg-white' glyph='icon-fontello-chat-1' />
                        <TimelineTitle>
                          Tue Jul 28 2014
                        </TimelineTitle>
                      </TimelineHeader>
                      <TimelineBody>
                        <ul>
                          <li>
                            <LoremIpsum query='2s' />
                          </li>
                        </ul>
                      </TimelineBody>
                    </TimelineItem>
                  </TimelineView>
                </PanelBody>
              </Panel>
            </PanelContainer>
          </Col>
        </Row>
        <Row>
          <Col sm={6} smCollapseRight>
            <PanelContainer bordered>
              <Panel>
                <PanelBody className='alternate'>
                  <TimelineView className='border-hoverblue tl-blue'>
                    <TimelineItem>
                      <TimelineHeader>
                        <TimelineIcon glyph='icon-fontello-chat-1' />
                        <TimelineTitle>
                          Tue Jul 29 2014
                        </TimelineTitle>
                      </TimelineHeader>
                      <TimelineBody>
                        <ul>
                          <li>
                            <div><strong>02:39 am</strong></div>
                            <LoremIpsum query='2s' />
                          </li>
                          <li>
                            <div><LoremIpsum query='2s' /></div>
                          </li>
                        </ul>
                      </TimelineBody>
                    </TimelineItem>
                  </TimelineView>
                  <TimelineView className='border-hovergreen tl-lightgreen'>
                    <TimelineItem>
                      <TimelineHeader>
                        <TimelineIcon glyph='icon-fontello-chat-1' />
                        <TimelineTitle>
                          Tue Jul 28 2014
                        </TimelineTitle>
                      </TimelineHeader>
                      <TimelineBody>
                        <ul>
                          <li>
                            <div><strong>02:39 am</strong></div>
                            <LoremIpsum query='2s' />
                          </li>
                          <li>
                            <div><LoremIpsum query='2s' /></div>
                          </li>
                        </ul>
                      </TimelineBody>
                    </TimelineItem>
                  </TimelineView>
                </PanelBody>
              </Panel>
            </PanelContainer>
          </Col>
          <Col sm={6}>
            <PanelContainer bordered>
              <Panel>
                <PanelBody className='alternate'>
                  <TimelineView withHeader className='border-hoverblue tl-blue'>
                    <TimelineItem>
                      <TimelineHeader className='bg-hoverblue'>
                        <TimelineIcon glyph='icon-fontello-chat-1' />
                        <TimelineTitle>
                          Tue Jul 29 2014
                        </TimelineTitle>
                      </TimelineHeader>
                      <TimelineBody>
                        <ul>
                          <li>
                            <div><strong>02:39 am</strong></div>
                            <LoremIpsum query='2s' />
                          </li>
                          <li>
                            <div><LoremIpsum query='2s' /></div>
                          </li>
                        </ul>
                      </TimelineBody>
                    </TimelineItem>
                  </TimelineView>
                  <TimelineView withHeader className='border-hovergreen tl-lightgreen'>
                    <TimelineItem>
                      <TimelineHeader className='bg-hovergreen'>
                        <TimelineIcon glyph='icon-fontello-chat-1' />
                        <TimelineTitle>
                          Tue Jul 28 2014
                        </TimelineTitle>
                      </TimelineHeader>
                      <TimelineBody>
                        <ul>
                          <li>
                            <div><strong>02:39 am</strong></div>
                            <LoremIpsum query='2s' />
                          </li>
                          <li className='left'>
                            <div><LoremIpsum query='2s' /></div>
                          </li>
                          <li className='right'>
                            <div><LoremIpsum query='2s' /></div>
                          </li>
                        </ul>
                      </TimelineBody>
                    </TimelineItem>
                  </TimelineView>
                </PanelBody>
              </Panel>
            </PanelContainer>
          </Col>
        </Row>
      </div>
    );
  }
}
