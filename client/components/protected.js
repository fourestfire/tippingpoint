/* -------------------<   COMPONENT   >-------------------- */
import React from 'react';
import { Link } from 'react-router-dom';
import {OktaNav} from './'

class Protected extends React.Component {

  componentDidMount () {
    this.props.receiveCampuses();
  }

  render () {
    return (
      <div>
        <OktaNav />
        <br />
        <main role="main" className="container">
          <div className="row">
            <div className="col-md-8 blog-main">
              <div className="blog-post">
                <h2 className="blog-post-title"> Here is some protected data </h2>
                <p>
                  {
                    this.props.campuses.allCampuses.map(campus => {
                      return (<li key={campus.id}>Place {campus.id}:&nbsp;&nbsp;
                        {campus.name}
                        </li>)
                    })
                  }
                </p>
                <hr />
                <p>Enamel pin gastropub lo-fi, typewriter helvetica echo park shoreditch franzen pitchfork eiusmod tempor pabst mlkshk tofu. Semiotics bitters chia brooklyn distillery <a href="#">dis parturient montes</a> stumptown cray tofu williamsburg keytar. In plaid actually succulents, disrupt ugh subway tile chillwave.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

/* -------------------<   CONTAINER   >-------------------- */

import { connect } from 'react-redux';
import { receiveCampuses } from '../store/campus';

const mapState = ({ campuses }) => ({ campuses });
const mapDispatch = ({ receiveCampuses });

export default connect(mapState, mapDispatch)(Protected);

