// mock moment library

// trong trường hợp ta muốn sử dụng lại các feature thật của library thì sử dụng câu lệnh jest.requireActual(moduleName)

const moment = jest.requireActual("moment")

export default (timestamp = 0) =>{
    return moment(timestamp)
}