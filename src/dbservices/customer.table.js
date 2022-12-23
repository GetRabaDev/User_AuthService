const User = require('../models/User');

class CustomerRepo {
  customerCreate = async (data) => {
    const customer = await new User(data).save();
    return customer;
  };

  findCustomer = async (condition) => {
    const user = await User.findOne(condition);
    return user;
  };

  findAll = async (condition) => {
    const user = await User.find(condition);
    return user;
  };

  searchCustomerByEmail = async (email) => {
    const users = await User.find({ email: { $regex: '.*' + email + '.*' } });
    return users;
  };
}

module.exports = {
  CustomerRepo,
};
