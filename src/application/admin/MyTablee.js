import React from 'react';
import Griddle, { plugins ,RowDefinition, ColumnDefinition} from 'griddle-react';
 
class MyTablee extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      data : [{"id":1,"name":"William","last_name":"Elliott","email":"welliott0@wisc.edu",
             "country":"Argentina","ip_address":"247.180.226.89"},
              {"id":2,"name":"Carl","last_name":"Ross","email":"cross1@mlb.com",
             "country":"South Africa","ip_address":"27.146.70.36"},
              {"id":3,"name":"Jeremy","last_name":"Scott","email":"jscott2@cbsnews.com",
             "country":"Colombia","ip_address":"103.52.74.225"}]
             // more data
    };
  }
 
  render() {
      return  ( <Griddle
    data={this.state.data}
    plugins={[plugins.LocalPlugin]}
  />)
  }
}
 
module.exports = MyTablee;