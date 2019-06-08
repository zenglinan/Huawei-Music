export default {
  
  ajax: function ({ method, url }) {
    return new Promise(function (reslove, reject) {
      let xhr = new XMLHttpRequest()
      xhr.open(method, url)
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status >= 200 && xhr.status < 400) {
            reslove(xhr.response)
          }
        }
      }
      xhr.send()
    })
  }
}