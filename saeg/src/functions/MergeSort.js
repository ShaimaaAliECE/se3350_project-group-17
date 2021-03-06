export function merge(left, right, storeResults2) {
    let arr = []

    if (left.length > 1) {
        storeResults2.push([...left]);
    }
    if (right.length > 1) {
        storeResults2.push([...right]);
    }

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}

export function mergeSort(array, storeResults, storeResults2) {
    const half = array.length / 2
    storeResults.push([ ...array]);

    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    return merge(mergeSort(left, storeResults, storeResults2),mergeSort(array, storeResults, storeResults2), storeResults2);
}