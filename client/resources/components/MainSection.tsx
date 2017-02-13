import * as React from 'react';

import { Resource } from '../model';
import ResourceItem from './ResourceItem';
import { SHOW_ALL } from '../constants/Filters';

const FILTERS = {
  [SHOW_ALL]: () => true,
};

interface MainSectionProps {
  resources: Resource[];
  editResource: (resource:Resource, text:string)=>void;
  deleteResource: (resource:Resource)=>void;
};

interface MainSectionState {
  filter: string;
};

class MainSection extends React.Component<MainSectionProps, MainSectionState> {
  constructor(props, context) {
    super(props, context);
    this.state = { filter: SHOW_ALL };
  }

  handleShow(filter) {
    this.setState({ filter });
  }

  render() {
    const { resources, deleteResource, editResource } = this.props;
    const { filter } = this.state;

    const filteredResources = resources.filter(FILTERS[filter]);

    return (
      <section className="main">
        <ul>
          {filteredResources.map(resource =>
            <ResourceItem
              key={resource.id}
              resource={resource}
              editResource={editResource}
              deleteResource={deleteResource}/>
          )}
        </ul>
      </section>
    );
  }
}

export default MainSection;
