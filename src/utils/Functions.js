import { constants } from "../constants"

const getMultiDigitObjectID = (number, digitCount) => {
  let number_string = number.toString()
  let objectId = number_string.padStart(digitCount, "0")
  return objectId
}

const getReadableNums = (num, digits) => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ]
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  let item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value
    })
  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0"
}

const getReadableFileSize = (x) => {
  let l = 0,
    n = parseInt(x, 10) || 0

  while (n >= 1024 && ++l) {
    n = n / 1024
  }

  return n.toFixed(n < 10 && l > 0 ? 1 : 0) + " " + constants.fileUnits[l]
}

const convertFileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
  })

const convertBase64ToFile = (dataurl, filename) => {
  let arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[arr.length - 1]),
    n = bstr.length,
    u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, { type: mime })
}

const getResourceSavedPercentage = (partialValue, totalValue) => {
  return 100 - (100 * partialValue) / totalValue
}

const getSortedArrayMove = (arr, old_index, new_index) => {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1
    while (k--) {
      arr.push(undefined)
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0])
  return arr
}

const functions = {
  getMultiDigitObjectID,
  getReadableNums,
  getReadableFileSize,
  convertFileToBase64,
  convertBase64ToFile,
  getResourceSavedPercentage,
  getSortedArrayMove,
}

export default functions
