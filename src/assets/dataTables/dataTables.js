// 共用 - 更新Table底下所有Index
function UpdateIndex (dataTableDom) {
  if (dataTableDom === null) return false

  var domIndex = 0
  var domIndexAdd = false
  var trDomList = dataTableDom.querySelectorAll('tr')
  for (var trIndex = 0; trIndex < trDomList.length; trIndex++) {
    var tr = trDomList[trIndex]
    if (tr.firstElementChild != null) {
      var tdDomList = tr.querySelectorAll('td')
      for (var tdIndex = 0; tdIndex < tdDomList.length; tdIndex++) {
        var tdDom = tdDomList[tdIndex]
        var inputDom = tdDom.querySelector('input')
        var spanDom = tdDom.querySelector('span')
        var selectDom = tdDom.querySelector('select')
        if (inputDom && spanDom) {
          UpdateIndex_FixInput(inputDom, domIndex)
          UpdateIndex_FixSpan(spanDom, domIndex)
          domIndexAdd = true
        } else if (selectDom) {
          UpdateIndex_FixInput(selectDom, domIndex)
          domIndexAdd = true
        } else if (inputDom) {
          UpdateIndex_FixInput(inputDom, domIndex)
          domIndexAdd = true
        } else if (spanDom) {
          UpdateIndex_FixSpan(spanDom, domIndex)
          domIndexAdd = true
        }
      }
    }
    if (domIndexAdd) {
      domIndex = domIndex + 1
      domIndexAdd = false
    }
  }
}

// 共用
function UpdateIndex_FixInput (inputDom, domIndex) {
  var inputDomName = inputDom.getAttribute('data-name')
  var inputDomTitleName = inputDom.getAttribute('data-titleName')
  inputDom.name = inputDomTitleName + '[' + domIndex + '].' + inputDomName
}
// 共用
function UpdateIndex_FixSpan (spanDom, domIndex) {
  spanDom.innerText = domIndex + 1
}

window.UpdateIndex = UpdateIndex
