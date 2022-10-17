
/* 
 const itemdos = document.getElementsByClassName("item")[1];
 const itemcuatro = document.getElementsByClassName("item")[3];

 function itemHidden(itemdos) {
  if ( itemdos.style.visibility == 'visible'){
    itemdos.style.visibility = 'hidden';
  }else{
      itemdos.style.visibility = 'visible';
  }
 
}
function displayChange() {
     itemcuatro.style = 'display:none';
  
} */

const items = document.getElementsByClassName('item');

function itemHidden(numItem){
  
  const item =items[numItem];

  if(item.style.visibility == ''){
    item.style.visibility = 'hidden';
      } else {
        item.style.visibility = '';
      }
}

function displayChange(numItem){
  const item = items[numItem];
  if(item.style.display == ''){
    item.style.display = 'none';}
    else{ item.style.display ='';
  }
}
