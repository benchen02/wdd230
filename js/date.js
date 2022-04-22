const fulldate = {hour: '2-digit', minute: '2-digit', second: '2-digit'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', fulldate);

const currentyear = {year: 'numeric'};
document.getElementById('currentyear').textContent = new Date().toLocaleDateString('en-US', currentyear);
