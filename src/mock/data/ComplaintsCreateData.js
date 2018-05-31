var dataTableList = []

for (let index = 1; index < 101; index++) {
  const order = paddingLeft(index, 3)
  let dataTable = {
    order: `1712010${order}`,
    // 客訴目標
    complaintsTarget: []
  }

  const ComplaintsTargetCount = 4
  for (let index2 = 0; index2 < ComplaintsTargetCount; index2++) {
    if (index2) {
      dataTable.complaintsTarget.push(`${dataTable.order}-${paddingLeft(index2, 2)}`)
    } else {
      // 第一筆
      dataTable.complaintsTarget.push(`${dataTable.order}`)
    }
  }

  dataTableList.push(dataTable)
}

export {
  dataTableList
}

// 參考 https://dotblogs.com.tw/aquarius6913/2011/05/10/24655
// 向左補零
function paddingLeft (str, lenght) {
  if (str.length >= lenght) return str
  else return paddingLeft('0' + str, lenght)
}
// 向又補零
function paddingRight (str, lenght) {
  if (str.length >= lenght) return str
  else return paddingRight(str + '0', lenght)
}
