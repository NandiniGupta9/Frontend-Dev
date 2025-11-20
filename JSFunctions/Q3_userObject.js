// Q3: Arrow function 'this' problem

const user = {
    name: "Alice",
    showName: () => {
        console.log(this.name); // undefined
    }
};

user.showName();

const fixedUser = {
    name: "Alice",
    showName() {
        console.log(this.name);
    }
};

fixedUser.showName();
