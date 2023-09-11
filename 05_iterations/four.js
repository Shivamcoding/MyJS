const myObject = {
    JS: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for(const key in myObject) {
    //console.log(key); // print keys
    //console.log(myObject[key]);// print key values
    console.log(`${key} shortcut is ${myObject[key]}`);
}
