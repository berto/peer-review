import * as React from 'react';

interface MainSectionProps {
  feedback: string[];
  rating: number;
};

class MainSection extends React.Component<MainSectionProps, void> {
  render() {
    return (
      <main>
        <h3> Rating: {this.props.rating.toFixed(2)} </h3>
        {this.props.feedback.map((feedback, i) =>
        <p key={i}> {feedback} </p>
        )}
      </main>
    );
  }
}

export default MainSection;
