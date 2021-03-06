'use strict';

import React                       from 'react';

class IssueHeader extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="wrap">
        {JSON.stringify(this.props)}
          <div className="page-header">
            <h1>{this.title}</h1>
            <p className="lead">Attorney General Sessions lied about contact with Russian ambassadors during the Presendetial campaign prompting many to call for his resignation.</p>
            <a href="#">More about this story →</a>
          </div>
        </div>
      </div>
    );
  }

}

export default IssueHeader;
