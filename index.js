function getFirstSelector(string) {
 var select = document.querySelector(string);
 return select;
}

function nestedTarget() {
 var nest = document.querySelector('#nested');
 var tar = nest.querySelector('.target');
  return tar;
}



function increaseRankBy(n) {
const list = document.querySelectorAll('.ranked-list');
for (let i = 0; i < list.length; i++) {
  const cng = list[i].children;
  for (let x = 0; x < cng.length; x++) {
    cng[x].innerHTML = parseInt(cng[x].innerHTML) + n;
  }
}
}



function deepestChild() {
const strt = document.querySelectorAll('#grand-node');
for (let i = 0; i < )
}



