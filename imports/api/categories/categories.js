import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Categories = new Mongo.Collection('Categories');

Categories.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Categories.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

const CategoriesSchema = new SimpleSchema({
  slug: {
    type: String,
    label: 'The slug of the category.',
  },
  name: {
    type: String,
    label: 'The name of the category.',
  },
  image: {
    type: String,
    label: 'The URL of the category\'s picture.',
  },
});

Categories.attachSchema(CategoriesSchema);

export default Categories;
