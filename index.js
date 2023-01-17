let x = [9, 7, 8, 3, 2, 1]

// function merge_Arrays(left_sub_array, right_sub_array) {
//     let array = []
//     while (left_sub_array.length && right_sub_array.length) {
//        if (left_sub_array[0] < right_sub_array[0]) {
//           array.push(left_sub_array.shift())
//        } else {
//           array.push(right_sub_array.shift())
//        }
//     }
//     return [ ...array, ...left_sub_array, ...right_sub_array ]
//  }
//  function merge_sort(unsorted_Array) {
//     const middle_index = unsorted_Array.length / 2
//     if(unsorted_Array.length < 2) {
//        return unsorted_Array
//     }
//     const left_sub_array = unsorted_Array.splice(0, middle_index)
//     return merge_Arrays(merge_sort(left_sub_array),merge_sort(unsorted_Array))
//  }

function merge(left, right) {
    let sortedArr = [] // the sorted items will go here
    while (left.length && right.length) {
        // Insert the smallest item into sortedArr
        if (left[0] < right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right]
}

function mergeSort(arr) {
    // Base case
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    // Recursive calls
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

console.log(mergeSort(x))