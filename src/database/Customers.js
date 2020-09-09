const data = [
    {
        id: 1,
        name: 'Bruno Magalhães',
    },
    {
        id: 2,
        name: 'Vitória Bergamo Cunha Cavalcanti',
    },
    {
        id: 3,
        name: 'Gustavo Bergamo Mimim',
    },
    {
        id: 4,
        name: 'Tiago Arthur Nogueira',
    },
    {
        id: 5,
        name: 'Larissa Carla Brenda Moura',
    },
    {
        id: 6,
        name: 'Beatriz Lúcia Farias',
    },
    {
        id: 7,
        name: 'Samuel Bruno Fernandes',
    },
    {
        id: 8,
        name: 'Augusto Carlos Marcos Vinicius Brito',
    },
    {
        id: 9,
        name: 'Heloisa Brenda Heloise Brito',
    },
    {
        id: 10,
        name: 'Karolaine Costa Dos Santos de Andrade',
    },
    {
        id: 11,
        name: 'Riane Bergamo',
    },
    {
        id: 12,
        name: 'Aline Bergamo',
    },
    {
        id: 13,
        name: 'José Aparecido',
    },
    {
        id: 14,
        name: 'Matheus Pereira',
    },
];

function findWithAttr (array, attr, value, like = false) {
    if (like) {
        var indexs = [];
        for (var i = 0; i < array.length; i += 1) {
            if (array[i][attr].includes(value)) {
                indexs.push(i);
            }
        }
        return indexs;
    } else {
        for (var i = 0; i < array.length; i += 1) {
            if (array[i][attr] === value) {
                return i;
            }
        }
    }
    return -1;
}

const getCustomers = () => data

const findCustomers = (query) => {
    var customers = [];
    var customersFoundIndex = [];
    customersFoundIndex = findWithAttr(data, 'name', query, true);
    
    if (customersFoundIndex.length > 0) {
        for (var i = 0; i < customersFoundIndex.length; i += 1) {
            customers.push(data[customersFoundIndex[i]]);
        }
    }

    return customers;
}

const findByIDCustomers = (query) => {
    var customersFoundIndex = [];
    customersFoundIndex = findWithAttr(data, 'id', query, false);

    return data[customersFoundIndex];
}

const addNewCustomers = (newCustomers) => {
    const array = Object.assign(newCustomers, { id: data.length + 1 })
    data.push(array)
}

const updatePendingCustomers = (id) => {
    const found = data.find(element => element.id == id);
    found.pending = !found.pending
}

const removeCustomers = (CustomersID) => {
    const index = findWithAttr(data, 'id', CustomersID)
    data.splice(index, 1);
}

export { getCustomers, findCustomers, findByIDCustomers, addNewCustomers, updatePendingCustomers, removeCustomers }