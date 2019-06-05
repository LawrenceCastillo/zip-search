```
class Folder extends Component {
  constructor(props){
    super(props);

    this.state = {
      showFiles: false,
      name: props.name,
      files: ["A", "B", "C"]
    }

    this.changeFileView = this.changeFileView.bind(this);
    this.renderFiles = this.renderFiles.bind(this);
    this.renderDefault = this.renderDefault.bind(this);
    this.listFiles = this.listFiles.bind(this);
  }
  changeFileView(){
    this.setState({ showFiles: !this.state.showFiles});
  }

  listFiles(){
    return(
      <ul>
        {this.state.files.map((file) =>
          <li key={file}>{file}</li>
        )}
      </ul>
    );
  }

  renderFiles(){
    return(
      <div>
        {this.state.name} <button onClick={this.changeFileView}>Show Files</button>
        {this.listFiles()}
      </div>
    )
  }

  renderDefault(){
    return(
      <div>
        {this.state.name} <button onClick={this.changeFileView}>Show Files</button>
      </div>
    )
  }


  render(){
    if(this.state.showFiles){
      return this.renderFiles();
    } else {
      return this.renderDefault();
    }
  }
}
```
