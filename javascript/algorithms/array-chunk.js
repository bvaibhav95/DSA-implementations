function chunkArrayIntoEqualParts(arr, chunkSize) {
  let index = 0;
  let chunkedArray = [];
  while (index < arr.length) {
    chunkedArray.push(arr.slice(index, index + chunkSize));
    index += chunkSize;
  }
  return chunkedArray;
}

function chunkArrayIntoEqualPartsWithoutSlice(arr, chunkSize) {
  let chunkedArray = [];
  for (let i = 0; i < arr.length; i++) {
    let last = chunkedArray[chunkedArray.length - 1];
    if (!last || last.length === chunkSize) {
      chunkedArray.push([arr[i]]);
    } else {
      last.push(arr[i]);
    }
  }
  return chunkedArray;
}
console.log(chunkArrayIntoEqualPartsWithoutSlice([1, 2, 3, 4, 5, 6], 2));
