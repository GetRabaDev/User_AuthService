const { CustomerRepo } = require('./customer.table');

const userRepo = new CustomerRepo();

module.exports = {
  userRepo,
};
