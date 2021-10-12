// syntax ES6 destructuring Object: đưa thuộc tính của Object thành 1 variable giúp ngắn gọn, dễ đọc hơn
// short syntax: {nameOfProperty}, re-name  property hoặc set default value cho property: {nameOfPeroperty: newName = Default Value}
// Có thể destructuring bất cứ nested Object nào trong 1 Object 

const book = {
    title: 'Ego is the Enemy',
    author: "NDK",
    publisher: {
        //name: 'mmm'
    }
}

const {name: PublisherName = "m"} = book.publisher // destructuring nested Object in Object
 
console.log(PublisherName)

// Array Destructuring: array = [...] -> destructuring: [1st, 2nd, 3rd, 4th,..] = array, nếu muốn skip element nào thì để trống và dùng "," để 
// ngăn cách. VD [,2nd,,4th] -> destructuring element thứ 2 và thứ 4 
//-> Nhanh chóng trong việc lưu trữ giá trị của element mong muốn trong array vào variable
const item = ["Coffee (hot) ", "$3.0", "$4.0", "$5.0"]
const [coffee, , mediumPrice] = item;

console.log(`The medium ${coffee} cost ${mediumPrice}`)

