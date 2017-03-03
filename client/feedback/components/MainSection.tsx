import * as React from 'react';

interface MainSectionProps {
  feedback: string[];
  rating: number;
};

class MainSection extends React.Component<MainSectionProps, void> {
  render() {
    let rating = this.props.rating ? this.props.rating.toFixed(2) : 0;
    let feedback;
    if (this.props.feedback) {
        feedback = this.props.feedback.map((feedback, i) =>
          <p key={i}> {feedback} </p>
        )
    }
    return (
      <main>
        <h3> Rating: {rating} </h3>
        {feedback}
      </main>
    );
  }
}

export default MainSection;
