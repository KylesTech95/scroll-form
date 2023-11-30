let divs = document.querySelectorAll('.fm-div')
divs.forEach((elem,i)=>{
    let child = elem.children[0]
    if(i!==divs.length-1){
        if(i%2===0){
            child.classList.add('float-right')
            child.classList.add('mr-10')
        }
        else{
            child.classList.add('float-left')
            child.classList.add('ml-14')
        }
    }
    else{
        elem.classList.add('text-center')
    }
})


let coll = (element,s) => {
    element.classList.remove(s)
}
let exp = (element,s) => {
    element.classList.add(s)
}


function collapse(arr){

arr.forEach((el,idx)=>{
    let float = el.children[0]
    let input = [...float.children]
    let filtered_inp = input.filter((_,i)=>i%2!==0)
    let size = 'mt-80'
    el.classList.add(size)
    el.classList.add('duration-300')

    //collapse & expand functions
    filtered_inp.forEach((inp,i)=>{
        inp.addEventListener('click',e=>{
            if(e.target.classList.contains('form-control')){
                e.target.classList.toggle('form-control-lg')
            }
        })
        inp.addEventListener('focus',e=>{  
            console.log(e.target)
            if(e.target.value){
                coll(el,size)
            }
            else{
                exp(el,size)
            }
            
                     
        })
        //change EL for collapsing/expanding 
        inp.addEventListener('change',e =>{
            let inc = 0, dec;
            let drag = e.target.parentElement
            let pos = e.target.getBoundingClientRect().y
            if(e.target.value){
                coll(el,size)
            //code for dragging effect
            while(inc < (pos/3)){
                inc++
                drag.style = `padding-bottom:${inc}px; transition:.5s ease;background-color:transparent;border:4px solid ghostWhite; border-radius:8px; padding-1rem;`
                dec = inc;
            }
            while(dec >= 0){
                dec--
                setTimeout(()=>{
                    drag.style = `padding-bottom:${dec}px; transition:.5s ease;`
                },250)
            }
            }
            else{
                exp(el,size)
            }
            
        })    
    })
})
        window.addEventListener('click', e=>{
            if(e.target.id === 'form'){
            divs.forEach(div=>{
                let float = div.children[0]
                let arr = [...float.children]
                arr = arr.filter((_,i)=>i%2!==0)
                arr.forEach((inp,i)=>{
                    inp.classList.remove('scale-125')
                })
            })
            }
            else{
                divs.forEach(div=>{
                    let float = div.children[0]
                    let arr = [...float.children]
                    arr = arr.filter((_,i)=>i%2!==0)
                    arr.forEach((inp,i)=>{
                        if(inp !== e.target){
                            inp.classList.remove('form-control-lg')
                            inp.style='transition:.25s ease;'
                        }
                    })
                })
            }
        })  



}
collapse(divs)



