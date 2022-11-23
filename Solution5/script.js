/** Variable representing shopping list */
const list = [
     /**
     * Each object in list consists of
     * @param {number} id - id of product
     * @param {string} name - name of product
     * @param {number} items - number of units of item to bu
     * @param {Date} date - date object in DD/MM/YYYY format representing last day we can buy given product 
     * @param {boolean} status - boolean representing if item is already bought
     * @param {number} price - price of 1 unit of product (set to 0 if status is false) 
     */
    {
        id: 0,
        name: 'boots',
        items: 1,
        date: '2022/11/30',
        status: false,
        price: 0
    }
]

/** 
 * Function returning random number in range from 0 to @param {number} max
 * 
*/
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/** Variable containing current date in DD/MM/YYYY format */
let currentDate = new Date().toLocaleDateString();

/**
 * Function adding new element to list
 * @param {string} name - name of item
 * @param {number} items - number of units needed
 * @param {Date} date - date object in DD/MM/YYYY format before which it needs to be bought
 * @param {boolean} status - boolean representing if item was bought yet
 * @param {number} price - price of one unit 
 * @returns {number} ID of newly added item 
 */
const addItemToList = (name, items, date, price, status) => {
    let newId = getRandomInt(21372137);
    let fixedDate = newDate(date).toLocaleDateString();
    let defaultStatus = false;
    let defaultPrice = 0;
    if(status) {
        defaultStatus = status;
    }
    if(price) {
        defaultPrice = price;
    }
    list.push(
        {
            id: newId,
            name: name,
            items: items,
            date: fixedDate,
            status: defaultStatus,
            price: defaultPrice
        }
    )
    return newId;
}

/**
 * Function deletes item with a given id
 * @param {number} id - id of item to delete
 */
const deleteItemFromList = (id) => {
    let item = list.filter(obj => {
        return obj.id === id;
    });
    let i = list.indexOf(item);
    list.splice(item, 1);
}

/**
 *  Function editing single property of item
 * @param {number} id - id of item to change
 * @param {*} property - property to change
 * @param {*} newValue - new value of property
 */
const editItem = (id, property, newValue) => {
    let item = list.filter(obj => {
        return obj.id === id;
    });
    item[property] = newValue;
}

/**
 * Function that swaps two items' positions in the list
 * @param {number} id1 - id of first item to swap
 * @param {number} id2 - id of second item to swap
 */
const moveItem = (id1, id2) => {
    let item1 = list.filter(obj => {
        return obj.id === id1;
    });
    let item2 = list.filter(obj => {
        return obj.id === id2;
    });
    item1.id = id2;
    item2.id = id1;
}

/**
 * Function returning array of objects with deadlines set on currentDay
 */
const expiringToday = () => {
    let items = list.filter(obj => {
        return obj.date === currentDate;
    });
    
    return items;
}

/**
 * Function changing price of a given item
 * @param {number} id - Id of item
 * @param {number} price - New price
 */
const changePrice = (id,price) => {
    let item = list.filter(obj => {
        return obj.id === id;
    });
    item.price = price;
}

/**
 * Function returning all prices of items bought with deadline set to given day
 * @param {date} date 
 * @returns {number} Sum of all expenses on a given day 
 */
const priceOnDay = (date) => {
    let items = list.filter(obj => {
        if(obj.date === date) {
            return obj.status === true;
        }
    });
    let sum = 0;
    for(let i=0; i<items.length; i++) {
        sum+=(items[i].price*items[i].items);
    }
    return sum;
}

/**
 * Function allowing to mass format items with a given function
 * @param {array} ids - array of numbers containing all items' ids 
 * @param {function} func - function that we want to format items with
 */
const massFormat = (ids, func) => {
    let item;
    for(let i=0; i<ids.length; i++) {
        item = list.filter(obj => {
            if(obj.id === ids[i]) {
                return obj;
            }
        });
        func(obj);
    }
}