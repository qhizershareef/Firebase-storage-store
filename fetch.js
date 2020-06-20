const db= firebase.firestore();

const ImageRow = document.querySelector('.row');


db.collection('Hospital').get().then(snapshot => {
    snapshot.docs.forEach((doc) => {
        Display(doc.data());
    });
}).catch(err => {
    console.log(err);
});
//<div>Name: ${location.name || location.FORMATTED} </div>
const Display = (details) => {
    let html = `
            <hr/>
            <div class="ImageBox m-3">
                    <img src=${details.url} alt=${details.name} height="300px" width="300px" style="border-radius:20px;">
                    <p>Name : ${details.ProductName}</p>
                    <p>Item Code: ${details.ProductCode}</p>
            </div>
            `;
    //addImages(details.name);
    ImageRow.innerHTML += html;
}

/*
let divByname = document.querySelector('.' + refName[0] + refName[1])
var aTag = document.createElement('a');

aTag.innerHTML = `<img src=${url} alt"">`;
aTag.target = '_blank';
aTag.href = url;
aTag.title = 'Image'
console.log(aTag)
divByname.appendChild(aTag);
*/