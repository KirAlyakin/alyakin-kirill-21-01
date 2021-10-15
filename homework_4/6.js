let data = prompt('Введите строку', 'Слово <!--<script src="5.js"></script>--> <!--Закоментированное слово--> слово <!--<script src="5.js"></script>-->')
const regExp = /<!--+.+?-->/g
alert(data.match(regExp))

let data1 = data.match(regExp)
data1 = data1 + ''
data1 = data1.replace(/<!--/g,'')
data1 = data1.replace(/-->/g,'')

alert(data1)