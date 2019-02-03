import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";
import { Card, Image, Divider, Statistic } from "semantic-ui-react";

const CardWrapper = styled(Card)`
  border-top: 2px solid ${props => props.bordercolor} !important;
  margin-top: 20px;
`;

const CardDescriptionWrapper = styled(Card.Description)`
  text-align: center;
`;

export default ({ candidate, votes }) => {
  return (
    <CardWrapper bordercolor={candidate.color}>
      <Card.Content>
        <Image
          floated="left"
          size="mini"
          src={require(`../../images/candidates/${candidate.photo}`)}
        />
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
