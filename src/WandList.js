import React, { Component } from "react";
import WandCard from "./WandCard";

class WandList extends Component {
  render() {
    const wandList = this.props.wands.map(wand => (
      <WandCard wand={wand} key={wand.core} />
    ));
    return <div className="row">{wandList}</div>;
  }
}
export default WandList;
