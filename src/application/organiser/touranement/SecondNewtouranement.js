import ReactDOM from 'react-dom';
import React from 'react';
import axios from 'axios';


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
class DatatablesTeam extends React.Component {
  constructor(props) {
      super(props);
    this.state = {  ar:[] ,
      name:nameChampion.value,
      type:typeChampion.value,
      start:datestartChampion.value,
      end:dateendChampion.value,
      nbr:nbrTeamChampion.value,

      itemchecked:{}
    };

    }
    checkitem(id,e){
      if(e.target.checked)
      {
        console.log("hani chekit");
        this.state.itemchecked[id]="true";

        console.log(this.state.itemchecked);
      }
      else
      {
        this.state.itemchecked[id]="false";
          console.log(this.state.itemchecked);
        console.log("hani na7it el chek");
      }

console.log(id);
    }
    raka7li(){
let mylist = this.state.itemchecked;
var mytab= [];

var key;
for (key in mylist) {
    if (mylist.hasOwnProperty(key)) {
      if (mylist[key]=="true")
      { mytab.push(key)
         console.log(key + " = " + mylist[key]);
console.log('el liste t3aba w haw chfyh',mylist);
       }
    }
}

//**********
var json_arr = JSON.stringify(mytab);
  var tk=localStorage.getItem('token');
let form = new FormData();
          form.append('nameChampion', this.state.name);
         form.append('typeChampion', this.state.type);
         form.append('datestartChampion', this.state.start);
           form.append('dateendChampion', this.state.end);
           form.append('nbrTeamChampion', this.state.nbr);
         form.append('tableau', json_arr);
console.log("5f =",form.get('nameChampion'));
          axios.post('http://sportapp.astrolabs.io/api/addCompetition'+'?token='+tk,form,
          {headers: {
'Accept': 'application/json',
'Content-Type': 'application/json',
}})
        .then((response) => {
      console.log("c'est bon mchét ya haythem ya laj3éb",response);
          
        });
                        // .then(function (response) {
                        //
                        //
                        //                 })
                        //                 .catch(function (error) {
                        //
                        //                     console.log(error);
                        // console.log("it works 2 ");
                        //   });

//*******



      console.log('ahawa',this.state.itemchecked);
    }

  componentDidMount() {
  var tk=localStorage.getItem('token');






  axios.get('http://sportapp.astrolabs.io/api/allTeams'+'?token='+tk
        )
        .then((response) => {
          console.log('haw chnoua jé',response);
  this.setState({ar: response.data})
   
           


  console.log('fsfds',this.state.ar);

          }).catch((error) => {
          console.log(error);
        });
  console.log('fsfds',this.state.ar);
    $(ReactDOM.findDOMNode(this.example))
      .addClass('nowrap')
      .dataTable({
        responsive: true,
        columnDefs: [
          { targets: [-1, -3], className: 'dt-body-right' }
        ]
    });
  }
  render() {
  console.log('state2',this.state.name);
  var competitionName="" ;
    var datestart="" ;
      var dateend="" ;
    var nbrteam=0  ;
    var type=0  ;
if (typeof this.state.name != 'undefined')
{competitionName=this.state.name ;
type=this.state.type;
datestart=this.state.start;
dateend=this.state.end;
nbrteam=this.state.nbr;
}


var that=this;

    return (
  <div>
    <Row>
      <Col xs={12}>
        <Col xs={2}>
        </Col>
        <Col xs={8} style={{border: '2px solid #e9f0f5'}}>
  <Table style={{marginTop:100}} ref={(c) => this.example = c} className='display' cellSpacing='0' width='100%' >
    <thead>
      <tr>
        <th>Team</th>
        <th>city</th>
        <th>GamePlayed</th>

        <th>action</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <th>Team</th>
        <th>city</th>
        <th>GamePlayed</th>

        <th>action</th>
      </tr>
    </tfoot>
    <tbody>
      {  this.state.ar.map(team =>
   <tr style={{margin:10}}  key={team.id} id={eval(JSON.stringify(team.id))} >
          <td>{team.name}</td>
          <td>{team.city}</td>
          <td>hhhh</td>
            <td> <input type="checkbox" onChange={(e)=>{this.checkitem(team.id,e)}}/>  </td>
        </tr>

                )
      }
    </tbody>
  </Table>
  <Button xs outlined onClick={this.raka7li.bind(this)} style={{marginBottom: 5}}   bsStyle='primary'>raka7li tableau</Button>
 </Col>

<Col xs={2}>





</Col>
</Col>
</Row>
</div>
    );
  }
}




export default class SecondNewTouranement extends React.Component {


  render() {
    return (
          <PanelContainer>
        <Panel>
          <PanelHeader className='bg-green'>
            <Grid>
              <Row>
                <Col xs={12} className='fg-white'>
                  <h4>List of teams</h4>

                </Col>
              </Row>
            </Grid>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12} style={{heigth:500}}>
              <DatatablesTeam />
                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}
