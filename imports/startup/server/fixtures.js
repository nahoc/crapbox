import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';
import Plans from '../../api/plans/plans';
import Categories from '../../api/categories/categories';

if (!Meteor.isProduction) {
  const users = [{
    email: 'admin@admin.com',
    password: 'password',
    profile: {
      name: { first: 'Carl', last: 'Winslow' },
    },
    roles: ['admin'],
  }];

  users.forEach(({ email, password, profile, roles }) => {
    const userExists = Meteor.users.findOne({ 'emails.address': email });

    if (!userExists) {
      const userId = Accounts.createUser({ email, password, profile });
      Roles.addUsersToRoles(userId, roles);
    }
  });
}


// Plans
const plans = [{
  planId: '10dollars',
  label: 'Abonnement à 10 dollars',
  price: 1000,
}, {
  planId: '20dollars',
  label: 'Abonnement à 20 dollars',
  price: 2000,
}];

plans.forEach(({ planId, label, price }) => {
  const planExists = Plans.findOne({ planId });
  if (!planExists) Plans.insert({ planId, label, price });
});

// Categories
const categories = [{
  name: 'Électronique',
  image: 'images/electronic.jpeg',
}, {
  name: 'Livres',
  image: 'images/books.jpeg',
}];

categories.forEach(({ name, image }) => {
  const categoryExist = Categories.findOne({ name });
  if (!categoryExist) Categories.insert({ name, image });
});
