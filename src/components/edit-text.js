import React from 'react'

class EditableLabel extends React.Component {

  state = {
    text: "Initi value",
    editing: false
  }

  initEditor() {
      this.editor = <input type="text" defaultValue={this.state.text} onKeyPress={(event) => {
          const key = event.which || event.keyCode;
          if (key === 13) { //enter key
              this.save(event.target.value)
          }
      }} autoFocus={true}/>;
  }

  edit() {
      this.setState({
          text: this.state.text,
          editing: true
      })
  };

  save(value) {
      this.setState({
          text: value,
          editing: false
      })
  };

  componentDidUpdate() {
      this.initEditor();
  }

  render() {
    console.log(this.state.text);
      return this.state.editing ?
          this.editor
          : <p onClick={this.edit}>{this.state.text}</p>
  }
}

export default EditableLabel