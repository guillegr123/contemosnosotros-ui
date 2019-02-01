import React, { Component } from "react";
import { Card, Image, Divider } from "semantic-ui-react";
import NumberFormat from "react-number-format";
import styled, { ThemeProvider } from "styled-components";

import results from "../../services/results.service";
import background from "../../bg.jpg";

const CardWrapper = styled(Card)`
  border-top: 2px solid ${props => props.bordercolor} !important;
`;

const CandidateCard = ({ candidate, votes }) => {
  return (
    <CardWrapper bordercolor={candidate.color}>
      <Card.Content>
        <Image floated="right" size="mini" src={candidate.photo} />
        <Card.Header>{candidate.name}</Card.Header>
        <Card.Meta>{candidate.party}</Card.Meta>
        <Card.Description>
          <Divider horizontal>
            <NumberFormat
              value={votes}
              displayType={"text"}
              thousandSeparator={true}
            />
          </Divider>
          25%
        </Card.Description>
      </Card.Content>
    </CardWrapper>
  );
};

class Results extends Component {
  state = {
    candidates: []
  };

  componentDidMount() {
    this.setState({
      candidates: results
    });
  }

  render() {
    const { candidates } = this.state;

    return (
      <>
        <div className="pusher">
          <div
            className="ui inverted vertical masthead center aligned segment"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="ui raised very padded container segment">
              <Card.Group centered>
                {candidates.map(({ candidate, votes }, key) => (
                  <CandidateCard
                    key={key}
                    candidate={candidate}
                    votes={votes}
                  />
                ))}
              </Card.Group>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Results;
