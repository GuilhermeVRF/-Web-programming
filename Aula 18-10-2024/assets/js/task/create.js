const startingDate = document.getElementById('startingDate');
const deliveryDate = document.getElementById('deliveryDate');

const date = new Date();
const actualDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()

startingDate.value = actualDate;
deliveryDate.value = actualDate;