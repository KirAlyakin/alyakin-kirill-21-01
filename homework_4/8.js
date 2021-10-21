const data = prompt("4444-1111-2222-4444", "1234432112344321")
const regexp = /^(\d{4})(-|)(\d{4})(-|)(\d{4})(-|)(\d{4})$/

 if (data.match(regexp) != null) {
     alert("ведётся поиск")
 } else {
     alert("неверный идентификатор")
 }