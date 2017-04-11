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
  futureTeammate: string;
  contribution: number;
  memberId: string;
  text: string;
};

class FeedbackForm extends React.Component<FeedbackFormProps, FeedbackFormState> {
  constructor (props, context) {
    super(props, context);
    this.state = {
      rating: null,
      tempRating: null,
      futureTeammate: null,
      currentName: "Pick a Name",
      contribution: 0,
      memberId: null,
      text: ""
    };
  }

  selectName(name, id) {
    this.state.currentName = name;
    this.state.memberId = id;
    this.setState(this.state);
    this.handleUpdate();
  }

  handleContributionOption(contribution) {
    this.state.contribution = contribution;
    this.setState(this.state);
    this.handleUpdate();
  }

  handleFutureTeammateOption(answer) {
    this.state.futureTeammate = answer;
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
      contribution: this.state.contribution,
      futureTeammate: this.state.futureTeammate,
      name: this.state.currentName,
      member_id: this.state.memberId
    });
  }

  handleInput() {
    let input = this.refs.text.value;
    if (input.length < 1000) {
      this.state.text = input;
    }
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
            <li key={i} onClick={this.selectName.bind(this, member.name, member.id)}> {member.name} </li>
            )}
          </ul>
        </div>
        <div className="star-box">
          Overall Performance: {stars}
        </div>
        <p>How much did this teammate contribute?</p>
        <label className="pure-radio">
          <input 
            type="radio" 
            name="contribution" 
            onChange={this.handleContributionOption.bind(this, 0)}/>
          &nbsp;Too Little
        </label>
        <label className="pure-radio">
          <input 
            type="radio" 
            name="contribution" 
            onChange={this.handleContributionOption.bind(this, 1)}/>
          &nbsp;Good Amount
        </label>
        <label className="pure-radio">
          <input 
            type="radio" 
            name="contribution" 
            onChange={this.handleContributionOption.bind(this, 2)}/>
          &nbsp;Too Much
        </label>
        <p>Would you choose to work with this teammate on a future project?</p>
        <label className="pure-radio">
          <input 
            type="radio" 
            name="future" 
            onChange={this.handleFutureTeammateOption.bind(this, "No")}/>
          &nbsp;No
        </label>
        <label className="pure-radio">
          <input 
            type="radio" 
            name="future" 
            onChange={this.handleFutureTeammateOption.bind(this, "Indifferent")}/>
          &nbsp;Indifferent 
        </label>
        <label className="pure-radio">
          <input 
            type="radio" 
            name="future" 
            onChange={this.handleFutureTeammateOption.bind(this, "Yes")}/>
          &nbsp;Yes
        </label>
        <textarea ref="text" value={this.state.text} onChange={this.handleInput.bind(this)} placeholder="Type feedback here..."></textarea>
      </div>
    );
  }
}

export default FeedbackForm;
