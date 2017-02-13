import * as React from 'react';
import * as classNames from 'classnames';

import { Resource } from '../model';
import TextInput from './TextInput';

interface ItemProps {
  resource: Resource;
  editResource: (resource:Resource, text:string)=>void;
  deleteResource: (resource:Resource)=>void;
  key?: any;
};

interface ItemState {
  editing: boolean;
};

class ResourceItem extends React.Component<ItemProps, ItemState> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
  }

  handleDoubleClick() {
    this.setState({ editing: true });
  }

  handleSave(resource:Resource, text:string) {
    if (text.length === 0) {
      this.props.deleteResource(resource);
    } else {
      this.props.editResource(resource, text);
    }
    this.setState({ editing: false });
  }

  render() {
    const {resource, deleteResource} = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <TextInput text={resource.text}
                   editing={this.state.editing}
                   onSave={(text) => this.handleSave(resource, text)}/>
      );
    } else {
      element = (
        <div className="view">
          <label onDoubleClick={this.handleDoubleClick.bind(this)}>
            {resource.text}
          </label>
          <button onClick={() => deleteResource(resource)} > X </button>
        </div>
      );
    }

    return (
      <li className={classNames({
        editing: this.state.editing
      })}>
        {element}
      </li>
    );
  }
}

export default ResourceItem;
