const expenses = []

const renderExpenses = () => {
    const list = document.getElementById('expense-list')
    const totalEl = document.getElementById('total')
    
    list.innerHTML = ''
    
    expenses.forEach((expense, index) => {
        const li = document.createElement('li')
        li.textContent = expense.name + ' - ' + expense.amount + ' SAR'
        
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete'
        deleteBtn.addEventListener('click', () => {
            expenses.splice(index, 1)
            renderExpenses()
        })
        
        li.appendChild(deleteBtn)
        list.appendChild(li)
    })
    
    const total = expenses.reduce((acc, curr) => acc + Number(curr.amount), 0)
    totalEl.textContent = total
}

document.getElementById('add-btn').addEventListener('click', function() {
    const name = document.getElementById('name').value
    const amount = document.getElementById('amount').value
    
    if (name === '' || amount === '') {
        alert('Please fill in both fields')
        return
    }
    
    expenses.push({ name: name, amount: amount })
    renderExpenses()
})
