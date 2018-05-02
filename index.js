function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target');
}

function increaseRankBy(n) {
  var ranked = document.querySelectorAll('.ranked-list');
  
  for (var i = 0; i < ranked.length; i++) {
    ranked[i].innerHTML = parseInt(n + i);
  }
}

function deepestChild() {
  var grand = document.querySelectorAll('#grand-node');
  var children = [];
  var next;
  
  for(var i = 0; i < grand.length; i++) {
    children = grand[i].children;
    
    if(children.length == 0)
    {
      return next;
    }
  
  }
}