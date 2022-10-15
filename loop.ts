

export function loop(call:Function,count:number){
  for(var i:number = 0; i <= count; i++){
    call();
  }
}


export function every(array:any[],call:Function){
  for(var i:number = 0; i < array.length; i++){
    call(array[i]);
  }
}

export function until(condition:boolean,call:Function){
  do {
    call();
  } while (condition === true)
}

const main:any =  {
  loop,every,until
}
export default main;