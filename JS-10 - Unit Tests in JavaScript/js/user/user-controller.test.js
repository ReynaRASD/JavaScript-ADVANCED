const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);   
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  test ('findByEmail userController', () => {
    let email = 'reyna_xn65@hotmail.com';
    let user = new User (123456, 'Reyna RASD', email);
    userController.add(user);
    expect(userController.findByEmail (email)).toEqual(user);
  });

  test('findById userController', ()=> {
    let id = 1299;
    let user = new User(id, 'Reyna RASD', 'reyna_xn65@hotmal.com');
    userController.add(user);
    expect(userController.findById(id)).toEqual(user);
  });
  

 


