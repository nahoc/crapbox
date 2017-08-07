import React, { PropTypes } from 'react';
import { composeWithTracker } from 'react-komposer';
import { ListGroup, ListGroupItem, Row, Col, Label } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import Categories from '../../api/categories/categories';

class CategoriesList extends React.Component {
  render() {
    const { categories } = this.props;
    return (<div className="Categories">
      <h4 className="page-header">Categories</h4>
      <ListGroup>
        <Row>
        {categories.map(({ _id, name, image }) => {
          return (<Col xs={3} sm={3}>
            <ListGroupItem className="inline-block no-padding" key={_id}>
              <img className="category-image" src={image} />
              <p className="category-label">
                <Label>{name}</Label>
              </p>
            </ListGroupItem>
          </Col>);
        })}
        </Row>
      </ListGroup>
    </div>);
  }
}

CategoriesList.propTypes = {
  categories: PropTypes.array,
};

const composer = (props, onData) => {
  const subscription = Meteor.subscribe('categories');
  if (subscription.ready()) {
    const categories = Categories.find().fetch();
    onData(null, { categories });
  }
};

export default composeWithTracker(composer)(CategoriesList);
