let clients = [{id: 1 , name: "Max" , address: "Barcelona" , active: true}];

let getAll = function() {
    return clients;
};

let getById = function(clientId) {
    return clients.find(function(x) {
        return x.id === parseInt(clientId);
    });
};

let create = function(client) {
    return clients.push(client);
};


let update = function(client) {    
    let old = clients.find(function(x) {
        return x.id === parseInt(client.id);
    });

    old.name = client.name;
    old.address = client.address;
    old.active = client.active;
};

let removeById = function(id) {
    let index = clients.findIndex(function(x) {
        return x.id === id;
    });
    clients.splice(index, 1);
};

module.exports = {
    getAll: getAll, 
    getById: getById, 
    create: create, 
    update: update, 
    removeById: removeById
};
