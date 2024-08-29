const inputText = document.getElementById('input-text')
const cardList = document.getElementById('cards-list')
const buttonSubmit = document.getElementById('button-submit')
const select = document.getElementById('select')

{/* 
    <div class= cardslist>
    <div class="card-itens">
                <p>Tarefa tal de tal</p>
                <div class="buttons">
                    <button><i class='bx bx-pencil'></i></button>
                    <button><i class='bx bx-trash' ></i></button>
                    <button><i class='bx bx-check' ></i></button>
                </div>

            </div> */}

buttonSubmit.addEventListener('click',(event)=>{
    event.preventDefault()
    if (inputText.value === ''){
        alert("Escreva sua tarefa");
    }
    else{
        let cardItens = document.createElement('div')
        cardItens.classList.add('card-itens');
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
        let btnDelete = document.createElement('button')
        let btnDone = document.createElement('button')
        
        let iconEdit = document.createElement('i')
        iconEdit.classList.add('bx', 'bx-pencil')
        let iconDelet = document.createElement('i')
        iconDelet.classList.add('bx', 'bx-trash')
        let iconDone = document.createElement('i')
        iconDone.classList.add('bx' ,'bx-check')
        buttons.appendChild(btnEdit);
        buttons.appendChild(btnDelete);
        buttons.appendChild(btnDone);
        btnEdit.appendChild(iconEdit);
        btnDelete.appendChild(iconDelet);
        btnDone.appendChild(iconDone);

        let texts =document.createElement('div');
        texts.style.width = '70%'
        let span = document.createElement('span');
        span.innerHTML = inputText.value;
        inputText.value=''
        texts.appendChild(span);
          
        cardItens.appendChild(texts)
        cardItens.appendChild(buttons);
        cardList.appendChild(cardItens);

        btnEdit.addEventListener('click', ()=>{
                    
            span.style.display = 'none'
            let input = document.createElement('input')
            input.value = span.textContent
            input.style.border = 'none'
            texts.append(input)


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

         btnDelete.addEventListener('click', ()=>{
            cardItens.remove()
         })

         btnDone.addEventListener('click', ()=>{
            span.style.textDecoration ='line-through'
            cardItens.style.border = 'none'
         })
    }
})



