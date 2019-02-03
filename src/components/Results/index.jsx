import React, { Component, Suspense } from "react";
import { Grid, Card } from "semantic-ui-react";

import { getResults, getDeparments } from "../../services/results.service";
import CandidateCard from "./cadidateCard";
import Dropdown from "../../common/dropdown";
const ChartComponent = React.lazy(() => import("./chart"));

class Results extends Component {
  state = {
    candidates: [],
    departments: []
  };

  componentDidMount() {
    this.setState({
      candidates: getResults(),
      departments: getDeparments()
    });
  }

  render() {
    const { candidates, departments } = this.state;
    const dropdata = [
      { key: "all", value: "ALL", text: "Todos" },
      { key: "AL", value: "AL", text: "Alabama" }
    ];

    return (
      <>
        <Grid columns={16}>
          <Grid.Row style={{ marginTop: "20px" }}>
            <Grid.Column width={10} />
            <Grid.Column width={5} textAlign="right">
              <label>
                Por departamento <Dropdown data={departments} />
              </label>
            </Grid.Column>
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
        </Grid>
      </>
    );
  }
}

export default Results;
