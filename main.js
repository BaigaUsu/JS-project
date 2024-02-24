function mergeObjects(...objects) {
    let res = Object.assign(...objects);
    console.log(res)
}

mergeObjects(
    {
        name: 'bass',
        age: 42
    },
    {
        type: 'car',
        name: 'Ferrari'
    },
    {
        type: 'bike'
    }
)