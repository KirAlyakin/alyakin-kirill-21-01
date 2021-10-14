let data = prompt('Оставьте, как есть', '12/02/2021 12-00')

data = data.replace(/\//g,'.')
data = data.replace(/-/,':')

alert(data)

/*
alert(data.replace(/\d{4}\/\d{2}\/\d{2} \d{2}-\d{2}/,
    /\d{4}.\d{2}.\d{2} \d{2}:\d{2}/))*/
