console.log("ola mundo")

const toggleButton = document.getElementById('toggleButton');
const sidebar = document.getElementById('sidebar');

toggleButton.addEventListener('click', () => {
  
  const isOpen = sidebar.classList.contains('show');
  
  
  if (isOpen) {
    sidebar.classList.remove('show');
    toggleButton.setAttribute('src', 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoNS4xMiw1LjEyKSI+PHBhdGggZD0iTTAsNy41djVoNTB2LTV6TTAsMjIuNXY1aDUwdi01ek0wLDM3LjV2NWg1MHYtNXoiPjwvcGF0aD48L2c+PC9nPgo8L3N2Zz4='); // Altera a imagem para a barra fechada
    toggleButton.setAttribute('data-state', 'closed');
  } else {
    sidebar.classList.add('show');
    toggleButton.setAttribute('src', 'https://www.ozy.gg/assets/img/cross.png'); 
    toggleButton.setAttribute('data-state', 'open');
  }
});