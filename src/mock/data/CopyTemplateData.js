let dataTableList = {
  data: [
    {
      id: '1',
      mainData_1: '1',
      mainData_2: '2',
      mainData_3: '3',
      mainData_4: 'Y',
      detail: [
        {
          subData_1: '1',
          subData_2: '2',
          subData_3: '3'
        },
        {
          subData_1: '1',
          subData_2: '2',
          subData_3: '3'
        }
      ]
    },
  ]
}

for (let index = 0; index < 50; index++) {
  const template = dataTableList.data[0]
  dataTableList.data.push(template)
}

export {
  dataTableList
}
