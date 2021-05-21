var initState = [
    {
        id: 1,
        name: 'ip 5',
        status: true
    },
    {
        id: 2,
        name: 'oppo f5',
        status: true
    },
    {
        id: 3,
        name: 'samsung a7',
        status: true
    }
];

const products = (state = initState, action) => {
    switch(action.type){
        default: return [...state];
    }
}

export default products;