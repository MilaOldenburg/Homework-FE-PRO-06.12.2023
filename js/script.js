function checkEquality() {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const input3 = document.getElementById('input3').value;

    if (input1 === input2 && input2 === input3) {
      alert('Все поля равны');
    } else {
      alert('Не все поля равны');
    }
  }

  function hasZero() {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const input3 = document.getElementById('input3').value;

    if (input1 === '0' || input2 === '0' || input3 === '0') {
      alert('Да, есть');
    } else {
      alert('Нет');
    }
  }

  function sameOne() {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const input3 = document.getElementById('input3').value;

    if (input1 === input2 || input2 === input3 || input1 === input3) {
      alert('Да, есть');
    } else {
      alert('Нет');
    }
  }

  function resetValues() {
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('input3').value = '';
  }