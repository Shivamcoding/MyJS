// for each loop

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( element => {
    //console.log(element);
});

coding.forEach( function (element) {
    //console.log(element);
});

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    //console.log(item, index, arr);
})

const myCoding = [ {
    languageName: "java",
    languageFileName: 'java'
},
{
    languageName: "python",
    languageFileName: 'py'
}, 
{
    languageName: "cpp",
    languageFileName: 'c++'
},
]

myCoding.forEach(element => {
    console.log(element.languageName);
})