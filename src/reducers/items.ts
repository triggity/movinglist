const defaultItems = [
    {
        name: 'Tanner Linsley',
        age: 26,
        friend: {
            name: 'Jason Maurer',
            age: 23,
        }
    },
    {
        name: 'Michael Truong',
        age: 28,
        friend: {
            name: 'Jason Maurer',
            age: 23,
        }
    }
]
const items = (state = defaultItems, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default items