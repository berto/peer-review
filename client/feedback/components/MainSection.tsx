import * as React from 'react';

import { FutureTeammate } from '../../main/model';

interface MainSectionProps {
  feedback: string[];
  rating: number;
  contribution: number;
  url: string;
  futureTeammate: FutureTeammate;
};

class MainSection extends React.Component<MainSectionProps, void> {
  render() {
    let contributionScale = ["Too Little", "Good Amount", "Too Much"];
    let rating = this.props.rating ? this.props.rating.toFixed(2) : 0;
    let contribution = this.props.contribution ? contributionScale[Math.round(this.props.contribution)] : "Not Scored";
    let feedback : JSX.Element[] = [<p key="0">No Feedback Available</p>];
    let No : number = 0;
    let Indifferent : number = 0;
    let Yes : number = 0;
    if (this.props.futureTeammate) {
      No = this.props.futureTeammate.No;
      Yes = this.props.futureTeammate.Yes;
      Indifferent = this.props.futureTeammate.Indifferent;
    }
    if (this.props.feedback) {
      feedback = this.props.feedback.map((feedback, i) =>
        <p key={i}> {feedback} </p>
       )
    }
    return (
      <main>
        <a href={this.props.url}><button className="pure-button right more-info button-primary"> More Info </button> </a>
        <h3> Rating: {rating} </h3>
        <h3> Contribution: {contribution} </h3>
        <h3> Future Teammate Votes: </h3>
        No: {No} Yes: {Yes} Indifferent: {Indifferent} 
        <h3> Feedback: </h3>
        {feedback}
      </main>
    );
  }
}

export default MainSection;
