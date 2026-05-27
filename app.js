const expenses = []

const renderExpenses = () => {
    const list = document.getElementById('expense-list')
    const totalEl = document.getElementById('total')
    
    list.innerHTML = ''
    
    expenses.forEach((expense, index) => {
        const li = document.createElement('li')
li.className = 'flex justify-between items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-3'

const span = document.createElement('span')
span.textContent = `${expense.name} — ${expense.amount} SAR`
span.className = 'text-gray-700'

const deleteBtn = document.createElement('button')
deleteBtn.textContent = 'Delete'
deleteBtn.className = 'text-red-400 hover:text-red-600 text-sm font-medium'
deleteBtn.addEventListener('click', () => {
    expenses.splice(index, 1)
    renderExpenses()
})

li.appendChild(span)
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
