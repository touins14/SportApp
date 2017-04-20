import { lazyload } from 'react-lazyload';

@lazyload({
  height: 200,
  once: true,
  offset: 100
})
class MyComponent extends React.Component {
  render() {
    return <div>this component is lazyloaded by default!</div>;
  }
}

export default class statics extends Component {

	constructor(props){
		super(props);
		this.state = {
			abc: 'abc'
		}

	}

	componentWillMount() {



	}

	componentDidMount() {



	}

	render(){
		return(
				<div>
					<p>{this.state.abc}</p>
				</div>
				<from>
					<input type='text' value={thi.state.abc}>
				</form>

		);
	}


}
