import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Customers = new Mongo.Collection('Customers');

Customers.allow({
  insert: () => false,
  update: () => true,
  remove: () => false,
});

Customers.deny({
  insert: () => true,
  update: () => false,
  remove: () => true,
});

const CustomersSchema = new SimpleSchema({
  userId: {
    type: String,
    label: 'The ID of the user this customer profile belongs to.',
  },
  customerId: {
    type: String,
    label: 'The user\'s customer ID on Stripe.',
  },
  'categories.electronics': {
    type: String,
    label: 'Electronics category for the customer.',
  },
  'categories.books': {
    type: String,
    label: 'Books category for the customer.',
  },
  'categories.clothes': {
    type: String,
    label: 'Clothes category for the customer.',
  },
  'categories.music': {
    type: String,
    label: 'Music category for the customer.',
  },
  'categories.movies': {
    type: String,
    label: 'Movies category for the customer.',
  },
  'categories.home': {
    type: String,
    label: 'Home category for the customer.',
  },
  'categories.tools': {
    type: String,
    label: 'Tools category for the customer.',
  },
  'categories.beauty': {
    type: String,
    label: 'Beauty category for the customer.',
  },
  'categories.toys': {
    type: String,
    label: 'Toys category for the customer.',
  },
  'categories.boardGames': {
    type: String,
    label: 'Board games category for the customer.',
  },
  'categories.videoGames': {
    type: String,
    label: 'Video games category for the customer.',
  },
  'categories.random': {
    type: String,
    label: 'Random category for the customer.',
  },
  'card.brand': {
    type: String,
    label: 'The brand of credit card the customer has on file.',
  },
  'card.last4': {
    type: String,
    label: 'The last four digits of the credit card the customer has on file.',
  },
  'subscription.id': {
    type: String,
    label: 'The ID of the user\'s subscription on Stripe.',
    optional: true,
  },
  'subscription.status': {
    type: String,
    allowedValues: ['active', 'cancelling', 'canceled', 'none', 'trialing'],
    label: 'The ID of the user\'s subscription on Stripe.',
    optional: true,
  },
  'subscription.plan': {
    type: String,
    label: 'The ID of the user\'s plan on Stripe.',
    optional: true,
  },
  'subscription.current_period_end': {
    type: Number,
    label: 'The next change date for the customer\'s subscription on Stripe (epoch timestamp in seconds).',
    optional: true,
  },
});

Customers.attachSchema(CustomersSchema);

export default Customers;
