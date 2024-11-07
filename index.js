

function generatePyramid(n){
    const container=document.getElementById('id')
    
    container.innerHTML='';
    for(let i=1;i<=n;i++){
        
        let spaces=''.repeat(n-i);
        let stars='<button class="circle"></button>'.repeat(2*i-1);
        
        let row=stars+spaces;
        container.innerHTML+=row+'<br>'
    }
}

function changecolour(newcolor) {
    const buttons = document.querySelectorAll("#id .circle");  
    buttons.forEach(button => {
        button.style.backgroundColor = newcolor;  
    });
}




function showText(){
    const elem=document.getElementById('id')
    elem.style.display='block'
    
}
function hideText(){
    const elem=document.getElementById('id')
    elem.style.display='none'
}
document.getElementById('startbutton').addEventListener('click',function(){
    const size=parseInt(document.getElementById('pyramidSize').value);

    showText()
    generatePyramid(size)
    
    
})

document.getElementById('stopbutton').addEventListener('click',function(){

    hideText(
        
       
        
    )
})
