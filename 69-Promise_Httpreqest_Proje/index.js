// Javascript Asenkron Promise Httpreqest Proje

console.clear();

function readStudent(url){
    return new Promise((reslve, reject) => {
        let xhr = new XMLHttpRequest();
        try{
            xhr.addEventListener("readystatechange", () => {
                if(xhr.readyState ===4 && xhr.status === 200){
                    reslve(JSON.parse(xhr.responseText));
                }
            })
        } catch(error) {
            console.log(error);
        }

        xhr.open("GET", url);
        xhr.send();
    })
}

readStudent("student.json")
.then((data) => console.log(data));
(err) => console.log(err);