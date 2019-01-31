const reveal_button = document.getElementById("reveal-button");
const inputField = document.getElementById("input");
const display = document.getElementById("disp");
const display2 = document.getElementById("disp2");

/**
 * Returns a single non-Repeated character of a string
 * @param {string} - str
 */
const revealCharacter = (str) => { 
    const alphabet = "abcdefghijklmnnopqrstuvwxyz";
    const splitStr = str.toLowerCase().split(" ").join("").split("");
    const splitStr2 = str.toLowerCase().split(" ").join("");

    const arr = [];
    const obj1 = {};
    let i, j, k;
  
  const timeOut =(time)=> {
    setTimeout((time) => {
            display2.innerHTML = "";
        }, time);
  }
  
  if (str === "") {
      display2.innerHTML = `<p class="red">EMPTY INPUT FIELD</p>`;
      timeOut(2000);
      return display.innerHTML = "?!";
    }
  
      const regex = (check) => {
        let re = /[a-z]/i.test(check);
        return re;
      }
      
    for (i = 0; i < splitStr2.length; i++) {
        if (!(regex(splitStr2.charAt(i)))) {
          display2.innerHTML = `<p class="red">INVALID ALPHABET DETECTED <span class="white"> => </span> ${splitStr2.charAt(i)}</p>`;
          timeOut(2000);
          return display.innerHTML = ":(";
        }
    }

    for (i = 0; i < alphabet.length; i++) {
        k = 0;
        for (j = 0; j < splitStr.length; j++) {
            if (alphabet.charAt(i) === splitStr[j]) {
                obj1[splitStr[j]] = k += 1;
            }
        }
    }

    for (i in obj1) {
        if (obj1[i] === 1) {
            arr.push(i);
        }
    }

    for (i = 0; i < splitStr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (splitStr[i] === arr[j]) {
                display2.innerHTML = `<p class="green">MATCH FOUND</p>`;
                timeOut(2000);
                display.innerHTML = arr[j].toUpperCase();
                return
            }
        }
    }
  display2.innerHTML = `<p class="red">NO MATCH</p>`;
  timeOut(2000);
  return display.innerHTML = ":(";
}

/**
 * Calls the revealCharacter function on the click of the show(reveal_button) button
 */
reveal_button.onclick = () => {
    revealCharacter(inputField.value);
}

/**
 * Calls the revealCharacter function when the enter button is pressed
 */
inputField.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        revealCharacter(inputField.value);
    }
});
