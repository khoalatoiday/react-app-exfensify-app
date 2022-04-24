/*
    - ref(database, path: child || root): nếu path để trống thì mặc định là root, path ở đây là node con của root, trả về 1 
    DataReference
    - set(ref, value):thêm hoặc update dữ liệu vào database được ref, có thể thêm hoặc update dữ liệu vào node con cụ thể ,value có thể là Object
    hoặc String, number, trả về Promise<void>
    - remove data với remove(ref(databse, node?): DataRefrence) hoặc set(ref(databse,node?), null)
    - update data với update(ref(database), Object) hoặc set(ref(databse,node?), value), update có thể tạo ra node mới nếu nó
    chưa tồn tại. Update trực tiếp các node root. Muốn update các child của root ta dùng syntax "root/child/...". Nếu ta update root
    node bằng value hoặc Object thì nó sẽ overide lại node đó
    - Fetch Data
*/


// JavaScript-version 9 API
import { initializeApp } from "firebase/app";
import { ref,set, getDatabase, remove,update } from "firebase/database"
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyA7F0spwvuphiXjAeQ2g8yqg_O3tRehDP0",
  authDomain: "react-exfensify-app.firebaseapp.com",
  databaseURL: "https://react-exfensify-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-exfensify-app",
  storageBucket: "react-exfensify-app.appspot.com",
  messagingSenderId: "1048201264646",
  appId: "1:1048201264646:web:ea69914184e7eff2ef0d87",
  measurementId: "G-L9KHEWFYDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app)

// agru thứ 2 là path của ref() không có gì nên mặc định là root
set(ref(database),{
    name: "demo",
    age: 21,
    isSingle: true,
    location:{
        city: "ha noi",
        country: "Viet Nam"
    }
}).then(()=>{
    console.log("Add Data successfully")
}).catch((e)=>{
    console.log(e)
})




set(ref(database, "attribute"),{
    height: 176,
    weight: 68
}).then(()=>{
    console.log("Thing go work")
}).catch((e)=>{
    console.log(e)
})

// xóa node "isSingle"
remove(ref(database,"isSingle")).then(()=>{
    console.log("Data will remove")
}).catch((e)=>{
    console.log("data wont remove", e)
})

// C2 để xóa
// set(ref(database,"isSingle"),null)


// overide path "age" của root, update C1
set(ref(database,"age"),22)

set(ref(database, "location/city"),"Ha Noi Capital of Viet Nam")

// update C2, update trực tiếp các node root. Muốn update các child của root ta dùng syntax "root/child/..."
update(ref(database), {
    job: "NodeJs developer and React Developer",
    'location/country': "Korean",
    'location/city' : "Seoul"
})



console.log("set up success")