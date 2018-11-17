//Solution 1
function testNum(num) {
  return new Promise(function (resolve, reject) {
    resolve(num > 10);
  });
}

console.log(testNum(12));

// //Solution 2
function whisperShout(str) {
  return new Promise(function (resolve, reject) {
    setTimeout(()=>resolve(str), 3000);
    console.log(str);
  }).then((result) => {
    console.log(result.toUpperCase());
    return;
  });
}

whisperShout('hello world!');



//Solution 3
const factorial = (num) => {
  if (num < 2) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

function waitFact(arr) {
  let idx = 0;
  let interval = setInterval(() => {
    if (idx < arr.length) {
      new Promise((resolve, reject) => {
        console.log(factorial(arr[idx]));
        idx++;
        resolve();
      });
    } else {
      clearInterval(interval);
    }
  }, 3000);
}

waitFact([1, 5, 3]);

//Solution 4
function barnyard() {
  let emptyObj = {
    pig: 'oink',
    cat: 'mew',
    dog: 'bark',
    cow: 'moo',
    ducks: 'quack',
  };
  new Promise ((resolve, reject) => {
    let idx = 0;
    let keyArr = Object.keys(emptyObj);
    let valueArr = Object.values(emptyObj);
    let interval = setInterval(obj => {
      if (idx < keyArr.length) {
        console.log(valueArr[idx]);
        keyArr[idx] = valueArr[idx];
        idx++;
      } else {
        clearInterval(interval);
      }
    }, 3000);
  });
  // return emptyObj;
};

barnyard();

//Solution 5

document.addEventListener('DOMContentLoaded', ()=> {
  let body = document.querySelector('body');

  function getAPIResponse() {
    new Promise(function (resolve, reject) {
      fetch('https://ghibliapi.herokuapp.com/films')
      .then(response => {
        return response.json();
      })
      .then(parsedRes => {
        debugger;
        parsedRes.forEach(movie => {
          let newNode = document.createElement('p');
          newNode.innerText = movie.title;
          body.appendChild(newNode);
        });
      });
    });
  }

  getAPIResponse();
});
