import React, { Component, Suspense } from "react";
import { Grid, Card, Button } from "semantic-ui-react";
import styled from "styled-components";
import nprogress from "nprogress";
import { MainGridContainer } from "../styles";

import { getResults, getDeparments } from "../../services/results.service";
import CandidateCard from "./candidateCard";
import Dropdown from "../../common/dropdown";
const ChartComponent = React.lazy(() => import("./chart"));

const ActionsColumn = styled(Grid.Column)`
  display: flex !important;
  justify-content: space-between;
`;

class Results extends Component {
  state = {
    candidates: [],
    departments: []
  };

  componentWillMount() {
    nprogress.start();
  }

  componentDidMount() {
    this.setState({
      candidates: getResults(),
      departments: getDeparments()
    });

    nprogress.done();
  }

  render() {
    const { candidates, departments } = this.state;

    return (
      <React.Fragment>
        <MainGridContainer columns={16}>
          <Grid.Row style={{ marginTop: "20px" }}>
            <Grid.Column width={8} />
            <ActionsColumn width={7} textAlign="right">
              <Button content="Recargar" basic icon="refresh" />
              <label>
                Por departamento <Dropdown data={departments} />
              </label>
            </ActionsColumn>
          </Grid.Row>
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
        </MainGridContainer>
      </React.Fragment>
    );
  }
}

export default Results;
