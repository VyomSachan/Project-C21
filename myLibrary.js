function isTouching(anyX, anyY){
    if (anyX.x - anyY.x < anyX.width/2 + anyY.width/2
      && anyY.x - anyX.x < anyX.width/2 + anyY.width/2
      && anyY.y - anyX.y < anyX.height/2 + anyY.height/2
      && anyX.y - anyY.y < anyX.height/2 + anyY.height/2) {
  
      return true;
    }
    else {
      return false;    
    }
}
  
function collide(anyX, anyY){
    if (isTouching(anyX, anyY)){
      anyX.velocityX = 0;
  
      return true;
    }
    else{
      return false;
    }
}