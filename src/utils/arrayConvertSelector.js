export const arrayConvertSelector = (data) => {
  const newData = [];
  data.map((e) => {
    newData.push({ label: e, value: e })
  })

  return newData
}

export const objectConvertSelector = (data, keyName, valueUuid, labelName) => {
  // data, "category", "uuid", "name"
  let newData = data;
  newData[keyName] = {
    value: newData[keyName][valueUuid],
    label: newData[keyName][labelName],
  }
}