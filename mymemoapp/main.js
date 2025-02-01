'use strict';

{
  const text = document.getElementById('text');
  const save = document.getElementById('save');
  const message = document.getElementById('message');
  const clear = document.getElementById('clear');

  if(localStorage.getItem('memo') === null) {
    text.value = '';
  } else {
    text.value = localStorage.getItem('memo');
  }
  text.value = localStorage.getItem('memo');

  save.addEventListener('click', () => {
    message.classList.add('apper')
    setTimeout(() => {
     message.classList.remove('apper')
    },1000);
   localStorage.setItem('memo',text.value)
  });

   clear.addEventListener('click', () => {
    if (confirm('本当に削除しますか？') === true) {
      text.value = ''
      localStorage.removeItem('memo');
    }
   });
}