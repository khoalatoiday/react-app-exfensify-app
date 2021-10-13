import moment from "moment";

export default [
    {
        text: '',
        amount: '',
        sortBy: '',
        startDate: undefined,
        endDate: undefined
    },
    {
        text: 'demo',
        amount: '10',
        sortBy: 'date',
        startDate: moment(),
        endDate: moment().add(4,'days')
    }
]