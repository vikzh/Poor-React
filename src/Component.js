import _ from 'lodash';

export default class {
  getInitialState() {
    return null;
  }

  constructor(properties, updater) {
    this.properties = properties;
    this.state = this.getInitialState();
    this.updater = updater;
  }

  setState(newState) {
    _.forIn(newState, (value, key) => {
      this.state[key] = value;
    });

    this.updater.update(this.render());
  }
}
