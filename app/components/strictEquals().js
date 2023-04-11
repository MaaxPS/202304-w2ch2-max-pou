export const strictEquals=(valueA, valueB)=>{

  if (Number.isNaN(valueA) || Number.isNaN(valueB)){
    return false
  }

  if (!Number.isNaN(valueA) && !valueA && !Number.isNaN(valueB) && !valueB){
    return true
  }

  if (Object.is(valueA, valueB)) {
    return true;
  } else {
    return false;
  }
}


