import React from "react";
import background from "../../bg.jpg";

const Manifest = () => {
  return (
    <React.Fragment>
      <div className="pusher">
        <div
          className="ui inverted vertical masthead center aligned segment"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="ui raised very padded container segment">
            <div className="text">
              <h1 className="ui header">Resultados</h1>
              TODO
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Manifest;
