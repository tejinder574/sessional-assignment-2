// document.getElementById('submit').addEventListener('click', (e)=>{
//     e.preventDefault();
//     // const a = document.getElementById('file').value;
//     // console.log(a);
//     alert("Photo has been Submited");
// })



const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);
xhr.onload= function(){
    const response = JSON.parse(xhr.responseText);
    // console.log(response[0].url);
    // console.log(response[0]);
    // console.log(response[99]);
    let template ="";
    let p=0;
    const images=(i)=>{
    for(i=p; i<p+50; i++){
        let id = response[i].thumbnailUrl;
        let title = response[i].title;
        template += `
        <div style="text-align;">
            <img src="${id}" style="margin-right: 50px; margin-left:50px;">
            <div style="width:150px; margin-left:50px; text-align: center;">
            <p style="overflow:auto">${title}</p>
            </div>
        </div>`
    }
    document.querySelector("#my-container").innerHTML = template
    }
    images(p);
  
    // document.getElementsByClassName('file').addEventListener('click', ()=>{
    //     alert("Photo has been Submited");
    // })

    document.getElementById('more').addEventListener('click', ()=>{
        console.log(p);
        p = p+50;
        if(p<5000){
            images(p);
        }
    })
}

xhr.send()
document.getElementsByClassName('file').addEventListener('click', ()=>{
        alert("Photo has been Submited");
    })

