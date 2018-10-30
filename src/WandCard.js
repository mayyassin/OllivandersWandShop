import React, { Component } from "react";

class WandCard extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card rounded-circle mb-5">
          <div className="image">
            <img
              className="card-image card-img-top img-fluid"
              src={this.props.wand.imageUrl}
              alt={this.props.wand.core}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>{this.props.wand.core}</span>
            </h5>
            <small className="card-text">
              wood type: {this.props.wand.wood}
            </small>
            <small className="card-text">
              wood type: {this.props.wand.length}
            </small>
          </div>
        </div>
      </div>
    );
  }
}
export default WandCard;
