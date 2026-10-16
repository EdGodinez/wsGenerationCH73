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

test('add user that is not in the list', () => {
    const controller = new UserController();

    const user = new User(5678, "Eduardo", "eduardo@generation.org");

    expect(controller.getUsers()).not.toContain(user);

    controller.add(user);

    expect(controller.getUsers()).toContain(user);
});

test('remove user that is not in the list', () => {
    const controller = new UserController();

    const user1 = new User(1234, "Santiago", "santiago@generation.org");
    const user2 = new User(5678, "Eduardo", "eduardo@generation.org");

    controller.add(user1);

    controller.remove(user2);

    expect(controller.getUsers()).toContain(user1);
    expect(controller.getUsers()).not.toContain(user2);
    expect(controller.getUsers()).toHaveLength(1);
});

test('find user by email successfully', () => {
    const controller = new UserController();

    const user1 = new User(1234, "Santiago", "santiago@generation.org");
    const user2 = new User(5678, "Eduardo", "eduardo@generation.org");

    controller.add(user1);
    controller.add(user2);

    const result = controller.findByEmail("eduardo@generation.org");

    expect(result).toBe(user2);
});

test('find user by email that does not exist', () => {
    const controller = new UserController();

    const user = new User(1234, "Santiago", "santiago@generation.org");

    controller.add(user);

    const result = controller.findByEmail("eduardo@generation.org");

    expect(result).toBeUndefined();
});

test('find user by id successfully', () => {
    const controller = new UserController();

    const user1 = new User(1234, "Santiago", "santiago@generation.org");
    const user2 = new User(5678, "Eduardo", "eduardo@generation.org");

    controller.add(user1);
    controller.add(user2);

    const result = controller.findById(5678);

    expect(result).toBe(user2);
});

test('find user by id that does not exist', () => {
    const controller = new UserController();

    const user = new User(5678, "Eduardo", "eduardo@generation.org");

    controller.add(user);

    const result = controller.findById(9999);

    expect(result).toBeUndefined();
});