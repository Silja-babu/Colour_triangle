             //requirement



//1.need to choose the pyramid length
//2.  click the start button
//3. choose the colour 
//4. choose the view of triangle
//5. stop button


//1
//1 2
//1 2 3




function generatePyramid(n){
    const containerBox = document.getElementById('id')
    containerBox.innerHTML =''
    vertical.onclick = function (){
        const vertical = document.getElementById('vertical')
         
        for(let i=1; i<=n ; i++){
            let spaces =''.repeat(n-i)
            let stars ='<button class="circle"></button>'.repeat(2*i-1)
            let row = stars+spaces
            containerBox.innerHTML+=row+'<br>'
        }
    }
    inverted.onclick = function (){
        const inverted = document.getElementById('inverted')

        for(let i=n; i<=n; i--){
            let spaces =''.repeat(n-i)
            let stars ='<button class="circle"></button>'.repeat(2*i-1)
            let row = stars+spaces
            containerBox.innerHTML+=row+'<br>'
        }
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

    hideText()
})

