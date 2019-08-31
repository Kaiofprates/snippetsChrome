// Kaio Prates  31/09/19
// Abra o perfil no instagram e clique no primeiro post

//pega o número de posts
var npost = document.getElementsByClassName(' _81NM2')


// promise para um time de 2 segundos entre cada curtida
var esperaUmTikim = () => new Promise((resolve,reject) =>{

    setTimeout(() => {
        resolve('OK');
        count ++; 
        console.log(count)
    }, 2000);
});



var autoLike = async () =>{


if(npost){

npost = parseInt(npost[0].firstElementChild.innerText)

for(i in [...Array(npost).keys()]){
    var like = document.getElementsByClassName('glyphsSpriteHeart__outline__24__grey_9')
    var next = document.getElementsByClassName('HBoOv coreSpriteRightPaginationArrow')

    // caso o post já tenha sido curtido like retorna undefined 
    // por isso o tratamento 

    if(like[1]){
    like[1].click()
    await esperaUmTikim()
    next[0].click() 

}}}}


autoLike()