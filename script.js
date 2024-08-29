const inputText = document.getElementById('input-text')
const cardList = document.getElementById('cards-list')
const buttonSubmit = document.getElementById('button-submit')
const select = document.getElementById('select')


buttonSubmit.addEventListener('click',(e)=>{
    e.preventDefault()
    if (inputText.value === ''){
        alert("Escreva sua tarefa");
    }
    else{
        let cardItens = document.createElement('div')
        if(select.value === "alta"){
            cardItens.style.border = '1px solid red'
        }
        if(select.value === "media"){
            cardItens.style.border = '1px solid yellow'
        }
        if(select.value === "baixa"){
            cardItens.style.border = '1px solid green'
        }
        let buttons = document.createElement('div')
        buttons.classList.add('buttons')
        let btnEdit = document.createElement('button')
        let btnDelet = document.createElement('button')
        let btnDone = document.createElement('button')
        
        let iconEdit = document.createElement('i')
        iconEdit.classList.add('bx', 'bx-pencil')
        let iconDelet = document.createElement('i')
        iconDelet.classList.add('bx', 'bx-trash')
        let iconDone = document.createElement('i')
        iconDone.classList.add('bx' ,'bx-check')
        buttons.appendChild(btnEdit)
        buttons.appendChild(btnDelet)
        buttons.appendChild(btnDone)
        btnEdit.appendChild(iconEdit)
        btnDelet.appendChild(iconDelet)
        btnDone.appendChild(iconDone)

        cardItens.classList.add('card-itens');
        console.log(cardItens);
        let span = document.createElement('span');
        span.innerHTML = inputText.value;
        inputText.value=''
        cardItens.appendChild(span);
        cardItens.appendChild(buttons);
        cardList.appendChild(cardItens);

        btnEdit.addEventListener('click', ()=>{
                    
            span.style.display = 'none'
            let input = document.createElement('input')
            input.style.position='relative'
            input.value = span.textContent
            cardItens.append(input)
            let btnSave = document.createElement('button')
            let iconSave = document.createElement('i')
            iconSave.classList.add('bx', 'bxs-save')
            btnSave.appendChild(iconSave)
            buttons.appendChild(btnSave)
            btnSave.addEventListener('click', ()=>{
                input.style.display = 'none'
                span.style.display = ' block'
                span.textContent = input.value
                btnSave.remove()
            })
        })

         btnDelet.addEventListener('click', ()=>{
            cardItens.remove()
         })

         btnDone.addEventListener('click', ()=>{
            span.style.textDecoration ='line-through'
            cardItens.style.border = 'none'
         })
    }
})



