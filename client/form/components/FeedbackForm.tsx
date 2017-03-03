import * as React from 'react';

import { Members, MemberFeedback } from '../../main/model';

interface FeedbackFormProps {
  id: number;
  update: (feedback: MemberFeedback) => void; 
  members: Members;
};

interface FeedbackFormState {
  rating: number;
  tempRating: number;
  currentName: string;
  text: string;
};

class FeedbackForm extends React.Component<FeedbackFormProps, FeedbackFormState> {
  constructor (props, context) {
    super(props, context);
    this.state = {
      rating: null,
      tempRating: null,
      currentName: "Pick a Name",
      text: ""
    };
  }

  selectName(name) {
    this.state.currentName = name;
    this.setState(this.state);
    this.handleUpdate();
  }

  handleRating(stars) {
    this.state.rating = stars;
    this.state.tempRating = stars;
    this.setState(this.state);
    this.handleUpdate();
  }

  star_over(rating) {
    this.state.rating = rating;
    this.setState(this.state);
  }

  star_out() {
    this.state.rating = this.state.tempRating;
    this.setState(this.state);
  }

  handleUpdate() {
    this.props.update({
      id: this.props.id,
      rating: this.state.rating,
      text: this.state.text,
      name: this.state.currentName
    });
  }

  handleInput() {
    this.state.text = this.refs.text.value;
    this.setState(this.state);
    this.handleUpdate();
  }

  refs: {
    text: any;
  }

  render() {
    let stars = [];
    for(let i = 0; i < 5; i++) {
      let starClass = 'star-rating__star';
      if (this.state.rating >= i && this.state.rating != null) {
        starClass += ' is-selected';
      }
      stars.push(
        <label
          key={i}
          className={starClass}
          onClick={this.handleRating.bind(this, i)}
          onMouseOver={this.star_over.bind(this, i)}
          onMouseOut={this.star_out.bind(this)}>
          ★
        </label>
      );
    }

    return (
      <div className="member-feedback pure-form">
        <div className="dropdown">
          <span> {this.state.currentName} </span>
          <ul>
            {this.props.members.list.map((member, i) => 
            <li key={i} onClick={this.selectName.bind(this, member.name)}> {member.name} </li>
            )}
          </ul>
        </div>
        <div className="star-box">
          {stars}
        </div>
        <textarea ref="text" onChange={this.handleInput.bind(this)} placeholder="Type feedback here..."></textarea>
      </div>
    );
  }
}

export default FeedbackForm;
