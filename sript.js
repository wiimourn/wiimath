function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let cond = 1;
  while (cond === 1) {
    let type_opr1 = getRandomInt(3);
    let type_opr2 = getRandomInt(3);
    let num1 = getRandomInt(100);
    let num2 = getRandomInt(100);
    let num3 = getRandomInt(100);
    let opr = null;
    let opr1 = null;
    let troub = null;
  
    if (type_opr1 === 0) {  // +
      opr = '+';
      if (type_opr2 === 0) {  // +
        opr1 = '+';
        troub = num1 + num2 + num3;
      } else if (type_opr2 === 1) {  // -
        opr1 = '-';
        troub = num1 + num2 - num3;
      } else if (type_opr2 === 2) {  // *
        opr1 = '*';
        troub = (num1 + num2) * num3;
      } else {  // /
        opr1 = '/';
        troub = (num1 + num2) / num3;
      }
    } else if (type_opr1 === 1) {  // -
      opr = '-';
      if (type_opr2 === 0) {  // +
        opr1 = '+';
        troub = num1 - num2 + num3;
      } else if (type_opr2 === 1) {  // -
        opr1 = '-';
        troub = num1 - num2 - num3;
      } else if (type_opr2 === 2) {  // *
        opr1 = '*';
        troub = (num1 - num2) * num3;
      } else {  // /
        opr1 = '/';
        troub = (num1 - num2) / num3;
      }
    } else if (type_opr1 === 2) {  // *
      opr = '*';
      if (type_opr2 === 0) {  // +
        opr1 = '+';
        troub = num1 * num2 + num3;
      } else if (type_opr2 === 1) {  // -
        opr1 = '-';
        troub = num1 * num2 - num3;
      } else if (type_opr2 === 2) {  // *
        opr1 = '*';
        troub = (num1 * num2) * num3;
      } else {  // /
        opr1 = '/';
        troub = (num1 * num2) / num3;
      }
    } else {  // /
      opr = '/';
      if (type_opr2 === 0) {  // +
        opr1 = '+';
        troub = num1 / num2 + num3;
      } else if (type_opr2 === 1) {  // -
        opr1 = '-';
        troub = num1 / num2 - num3;
      } else if (type_opr2 === 2) {  // *
        opr1 = '*';
        troub = (num1 / num2) * num3;
      } else {  // /
        opr1 = '/';
        troub = (num1 / num2) / num3;
      }
    }
  
    console.log(`(${num1} ${opr} ${num2}) ${opr1} ${num3}`);
    let answer = prompt('>')
    answer = parseInt(answer);
  
    if (answer === troub) {
      console.log('correct');
    } else {
      console.log('wrong');
      console.log(troub);
        let cond = 0;
    }
  }