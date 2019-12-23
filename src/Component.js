import _ from 'lodash';

export default class {
  getInitialState() {
    return null;
  }

  constructor(properties, ) {
    this.properties = properties;
    this.state = this.getInitialState();
  }

  setState(newState) {
    _.forIn(newState, (value, key) => {
      this.state[key] = value;
    })
  }
}
