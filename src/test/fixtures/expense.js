import moment from "moment"
export default [
    {
        id: "1",
        description: "first",
        amount: 1000,
        note: "note",
        createAt: moment(0).subtract(4,'days').valueOf() // 0h 1970 1st trừ đi 4 ngày
    },
    {
        id: "2",
        description: "second",
        amount: 500,
        note: "note",
        createAt: moment(0).valueOf() // 0h 1970 1st
    },
    {
        id: "3",
        description: "third",
        amount: 1500,
        note: "note",
        createAt: moment(0).add(4,'days').valueOf() // 0h 1970 1st cộng 4 ngày
    },
]