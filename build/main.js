let divs = document.querySelectorAll('.fm-div')
let coll = (element,s) => {
    element.classList.remove(s)
    element.classList.add('mt-10')
}
let exp = (element,s) => {
    element.classList.remove('mt-10')
    element.classList.add(s)
}
let test_arr = [];
function collapse(arr){
    arr.forEach((el,idx)=>{
        let float = el.children[0]
        let input = [...float.children]

        let filtered_inp = input.filter((_,i)=>i%2!==0)
        let labels = input.filter((_,i)=>i%2==0)

        let size = `mt-80`
            if(idx > 2 && idx) size = `mt-44`
        el.classList.add(size)
        el.classList.add('duration-300')
        
        labels.forEach((label,i)=>{
            // if(label.type!=='Submit'){
            //     label.classList.add('w-screen')
            //     label.classList.add('float-left') 
            // }
            if(label.textContent=='Male'||label.textContent=='Female'){
                let daddy = label.parentElement.parentElement
                
            }
            else{
                label.classList.add('w-screen')
            }
               
                        
        })
        
        filtered_inp.forEach((inp,i)=>{
            inp.addEventListener('click',e=>{
                let small_width = 'w-3/6'
                let screen = 'w-screen'
                let target_parent = e.target.parentElement.parentElement
                if(target_parent.classList.contains(small_width)){
                    target_parent.classList.toggle(screen)
                }
            })
            inp.addEventListener('focus',e=>{
                if(e.target.type==='radio'){
                    return null
                }
                else{
                    let not_active = 'w-3/6'
                    let active_inp = 'w-screen'
                    let target_parent = e.target.parentElement.parentElement
                    e.preventDefault();
                    //use test_arr
                    test_arr.push(e.target)
                    let current = test_arr[test_arr.length-1]
                    let previous = test_arr[test_arr.length-2] 
                    // let previous_parent = previous.parentElement.parentElement
                    if(current === e.target){
                        if(target_parent.classList.contains(not_active)){
                            target_parent.classList.remove(not_active)
                            target_parent.classList.add(active_inp)
                        }
                        let previous_parent = previous.parentElement.parentElement
                        if(previous_parent.classList.contains(active_inp)){
                            previous_parent.classList.remove(active_inp)
                            previous_parent.classList.add(not_active)
                        }
                    } 
                }
                 
            })
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
            window.addEventListener('click', e=>{
            let arr = [], arr2 = []
            let parent_element = inp.parentElement.parentElement
                if(e.target.id === 'form'){
                    arr.push(parent_element)
                    arr.forEach((x,i)=>{
                        if(x.classList.contains('w-screen')){
                            x.classList.remove('w-screen')
                            x.classList.add('w-3/6')
                        }
                    })
                }
            }) 
        })
    })
          



}
collapse(divs)




