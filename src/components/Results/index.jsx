import React, { Component, Suspense } from "react";
import { Grid, Card, Image, Divider, Statistic } from "semantic-ui-react";
import NumberFormat from "react-number-format";
import styled from "styled-components";

import results from "../../services/results.service";
const ChartComponent = React.lazy(() => import("./chart"));

const CardWrapper = styled(Card)`
  border-top: 2px solid ${props => props.bordercolor} !important;
  margin-top: 20px;
`;

const CardDescriptionWrapper = styled(Card.Description)`
  text-align: center;
`;

const CandidateCard = ({ candidate, votes }) => {
  return (
    <CardWrapper bordercolor={candidate.color}>
      <Card.Content>
        <Image floated="left" size="mini" src={candidate.photo} />
        <Card.Header align="left">{candidate.name}</Card.Header>
        <Card.Meta align="left">{candidate.party}</Card.Meta>
        <CardDescriptionWrapper>
          <Divider horizontal>
            <NumberFormat
              value={votes}
              displayType={"text"}
              thousandSeparator={true}
            />
            {` votos`}
          </Divider>
          <Statistic>
            <Statistic.Value>25%</Statistic.Value>
          </Statistic>
        </CardDescriptionWrapper>
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
        <Grid columns={16}>
          <Grid.Row style={{ marginTop: "20px" }}>
            <Grid.Column width={1} />
            <Grid.Column width={14}>
              <Card.Group centered>
                {candidates.map(({ candidate, votes }, key) => (
                  <CandidateCard
                    key={key}
                    candidate={candidate}
                    votes={votes}
                  />
                ))}
              </Card.Group>
            </Grid.Column>
            <Grid.Column width={1} />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1} />
            <Grid.Column width={14}>
              <Suspense fallback={<div>Cargando...</div>}>
                <ChartComponent />
              </Suspense>
            </Grid.Column>
            <Grid.Column width={1} />
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default Results;
