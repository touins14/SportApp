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
} from '@sketchpixy/rubix';

class GalleryItem extends React.Component {


  render() {
    return (
      <PanelContainer style={{marginTop: 30}}>
        <Panel>
          <PanelHeader>
            <Grid className='gallery-item'>
              <Row>
                <Col xs={12} style={{padding: 12.5}}>
                <Col xs={3} style={{border: '2px solid #e9f0f5',marginTop:20}}>
                  <a className='gallery-1 gallery-item-link' href={`/imgs/app/gallery/${this.props.image}.jpg`} title={this.props.title} style={{marginTop:25,height:200}}>
                    <Image responsive src={`/imgs/app/gallery/${this.props.image}-thumb.jpg`} alt={this.props.title} width='200' height='150'/>
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
                  <h3 className='fg-darkgrayishblue75 hidden-xs' style={{textTransform: 'uppercase',color:'red'}}>{this.props.title}</h3>
                  </div>
                  </Col>
                  <Col xs={9} style={{marginTop:30}}>
                  <div className='text-center'>
                    <h4 className='fg-darkgrayishblue75 hidden-xs' style={{textTransform: 'uppercase'}}>{this.props.email}</h4>
                    <h4 className='fg-darkgrayishblue75 hidden-xs' style={{textTransform: 'uppercase'}}>{this.props.birthday}</h4>
                     <h4 className='fg-darkgrayishblue75 hidden-xs' style={{textTransform: 'uppercase'}}>{this.props.country}</h4>
                      <h4 className='fg-darkgrayishblue75 hidden-xs' style={{textTransform: 'uppercase'}}>{this.props.city}</h4>
                      <h4 className='fg-darkgrayishblue75 hidden-xs' style={{textTransform: 'uppercase'}}>{this.props.phone}</h4>
                    <Button lg style={{marginBottom: 5}} bsStyle='primary' style={styles.Buttons}>Current compétitions</Button>{' '}
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

export default class OrganiserProfil extends React.Component {
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
      <Row className='gallery-view'>
        <Col xs={12}>
          <GalleryItem image='tumblr_n6es0tRk5w1st5lhmo1_1280' title='Sport Organiser' email='sab@gmail.com' birthday='10-02-2001' country='Eljem' city='Mouhamed 5' phone='26654987' />
        </Col>

      </Row>

    );
  }
}
const styles = {
  Buttons:{
marginTop:190
  }
}
