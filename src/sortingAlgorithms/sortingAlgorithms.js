/*export const mergeSort=(array,animations=[]) =>{
    if(array.length===1)return array;
    const middleIdx=Math.floor(array.length/2);
    const firstHalf=mergeSort(array.slice(0,middleIdx));
    const secondHalf=mergeSort(array.slice(middleIdx));
    const sortedArray=[];
    let i=0;
    let j=0;
    while(i<firstHalf.length && j<secondHalf.length){
        if(firstHalf[i]<secondHalf[j]){
            sortedArray.push(firstHalf[i++]);

        }
        else{
            sortedArray.push(secondHalf[j++]);
        }
    }
    while(i<firstHalf.length){
        sortedArray.push(firstHalf[i++]);
    }
    while(j<secondHalf.length){
        sortedArray.push(secondHalf[j++]);
    }
    return sortedArray;
};*/

export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

  export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
  }
  
  function quickSortHelper(array,startIdx,endIdx,animations){
      if(startIdx===endIdx){
          return;
      }
      let index=partition(array,startIdx,endIdx,animations);
      quickSortHelper(array,startIdx,index-1,animations);
      quickSortHelper(array,index+1,endIdx,animations);
  }

  function partition(array,startIdx,endIdx,animations){
      let pivotvalue=array[endIdx];
      let pivotindex=startIdx;
      for(let i=startIdx;i<endIdx;i++){
        animations.push([i,i]);
        animations.push([i,i]);
          if(array[i]<pivotvalue){
              swap(array,i,pivotindex);
              animations.push([i,pivotindex]);
              pivotindex++;
          }
      }
      swap(array,pivotindex,endIdx);
      animations.push([pivotindex,endIdx]);
      return pivotindex;
  }
   
  function swap(array,a,b){
      let temp=array[a];
      array[a]=array[b];
      array[b]=temp;
  }