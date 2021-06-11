// Map-like methods => return new array

function mapToNegativize(origArray){
  let newArray = []
  for (let i = 0; i < origArray.length; i ++){
    newArray.push(parseInt(- + origArray[i]))
  }
  return newArray
}

function mapToNoChange(origArray){
  const newArray = [...origArray]
  return newArray
}

function mapToDouble(origArray){
  const newArray = []
  for (const num of origArray){
    newArray.push(num * 2)
  }
  return newArray
}

function mapToSquare(origArray){
  const newArray = []
  origArray.forEach(num => newArray.push(num * num))
  return newArray
}

// Reduce-like methods => return a value

function reduceToTotal(listOfNumbers, startAt = 0){
  let total = startAt;
  listOfNumbers.forEach(num => {
    total += num
  })
  return total
}

function reduceToAllTrue(arrayToCheck){
  const checkArray = []
  for (const elem of arrayToCheck) {
    checkArray.push(!!elem)
  }
  return checkArray.includes(false) ? (false) : (true)
}

function reduceToAnyTrue(arrayToCheck){
  let checkArray = []
  for (const elem of arrayToCheck){
    checkArray.push(!!elem)
  }
  return checkArray.includes(true) ? (true) : (false)
}