import React from 'react';
import './DetailPage.scss';
import { withRouter } from 'react-router-dom';

const DetailPage = (props) => {
  return (
    <div id='detailPage'>
      Detail Page
    <h1>{props.match.params.carId}</h1>
    </div>
  )
}

export default withRouter(DetailPage);