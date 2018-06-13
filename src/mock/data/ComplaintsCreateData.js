let dataTableList = []

// autoComplete
// for (let index = 1; index < 101; index++) {
//   const order = paddingLeft(index, 3)
//   let dataTable = {
//     order: `1712010${order}`,
//     // 客訴目標
//     complaintsTarget: []
//   }

//   const ComplaintsTargetCount = 4
//   for (let index2 = 0; index2 < ComplaintsTargetCount; index2++) {
//     if (index2) {
//       dataTable.complaintsTarget.push(`${dataTable.order}-${paddingLeft(index2, 2)}`)
//     } else {
//       // 第一筆
//       dataTable.complaintsTarget.push(`${dataTable.order}`)
//     }
//   }

//   dataTableList.push(dataTable)
// }

// select2
// const count = [
//   '北京市',
//   '天津市',
//   '重庆市',
//   '上海市',
//   '河北省',
//   '山西省',
//   '辽宁省',
//   '吉林省',
//   '黑龙江省',
//   '江苏省',
//   '浙江省',
//   '安徽省',
//   '福建省',
//   '江西省',
//   '山东省',
//   '河南省',
//   '湖北省',
//   '湖南省',
//   '广东省',
//   '海南省',
//   '四川省',
//   '贵州省',
//   '云南省',
//   '陕西省',
//   '甘肃省',
//   '青海省',
//   '台湾省',
//   '内蒙古自治区',
//   '广西壮族自治区',
//   '西藏自治区',
//   '宁夏回族自治区',
//   '新疆维吾尔自治区',
//   '香港特别行政区',
//   '澳门特别行政区'
// ]
// for (var i in count) {
//   dataTableList.push({
//     id: i - 0 - 0 + 1,
//     name: count[i]
//   })
// }

for (let index = 1; index < 101; index++) {
  const order = paddingLeft(index, 3)
  let dataTable = {
    id: (index - 0) + 1,
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
