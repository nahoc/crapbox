import React, { PropTypes } from 'react';
import { composeWithTracker } from 'react-komposer';
import { ListGroup, ListGroupItem, Row, Col, Label } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import Categories from '../../api/categories/categories';
import Customers from '../../api/customers/customers';

class CategoriesList extends React.Component {

  render() {
    const { categories } = this.props;
    const { customer } = this.props;

    // function that checks a new category for a customer
    function setCategory(slug) {

      // get info of the connected user via Meteor
      const me = Meteor.user();
      // check customer that fits with connected user
      const meAsCustomer = Customers.findOne({ userId: me._id });

      if (meAsCustomer.categories[slug] === 'true') {
        for (const key in meAsCustomer.categories) {
          if (key == slug) {
            meAsCustomer.categories[key] = 'false';
          }
        }
      } else {
        for (const key in meAsCustomer.categories) {
          if (key == slug) {
            meAsCustomer.categories[key] = 'true';
          }
        }
      }
      Customers.update({ _id: meAsCustomer._id }, { $set: { categories: meAsCustomer.categories } });
    }

    // function that returns if a category is checked or not
    function checkCategory(slug) {
      return customer.categories[slug].toString();
    }

    return (<div className="Categories">
      <h4 className="page-header">Categories</h4>
      <ListGroup>
        <Row className="container-fluid row-eq-height">
        {categories.map(({ name, image, slug }) => {
          return (<Col className="col" xs={6} sm={4} md={3} lg={2}>
            <ListGroupItem className={this.props} key={slug}>
              <div className={checkCategory(slug)}>
                <div className="selectedBorder"></div>
                <img onClick={() => setCategory(slug)} className="category-image" src={image} />
                <p className="category-label">
                  <Label>{name}</Label>
                </p>
              </div>
            </ListGroupItem>
          </Col>);
        })}
        </Row>
      </ListGroup>
    </div>);
  }
}

CategoriesList.propTypes = {
  customer: PropTypes.object,
  categories: PropTypes.array,
};

const composer = (props, onData) => {
  const subscription = Meteor.subscribe('categories');
  if (subscription.ready()) {
    const categories = Categories.find().fetch();
    const customer = Customers.findOne();
    onData(null, { customer, categories });
  }
};

export default composeWithTracker(composer)(CategoriesList);
