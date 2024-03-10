var arr = [
    {
        img: 'https://th.bing.com/th/id/OIP.vC3OnKMFgmQuMShajCK3gwHaEo?rs=1&pid=ImgDetMain',
        name: 'Lionel Messi',
        yil: '1987',
        davlat: 'Argentina',
        title: 'Lionel Andrés "Leo" Messi[note 1] (Spanish pronunciation: [ljoˈnel anˈdɾes ˈmesi] ⓘ; born 24 June 1987) is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team. ',
    },
    {
        img: 'https://wallpaperaccess.com/full/3037657.jpg',
        name: 'Neymar',
        yil: '1992',
        davlat: 'Brazilya',
        title: 'Neymar da Silva Santos Júnior (born 5 February 1992), also known as Neymar Júnior, is a Brazilian professional footballer who plays as a forward for Saudi Pro League club Al Hilal and the Brazil national team. Regarded as one of the best players of his generation, he is renowned for his flamboyant style of play, passing abilities, and two-footedness. ',
    },
    {
        img: 'https://th.bing.com/th/id/R.8b3e8463ffb8ab820fc4e30c1f7f9984?rik=1%2btlF0gDmzvlOA&pid=ImgRaw&r=0',
        name: 'Andres Inyesta',
        yil: '1984',
        davlat: 'Ispaniya',
        title: 'Andrés Iniesta Luján (Spanish pronunciation: [anˈdɾes iˈnjesta luˈxan]; born 11 May 1984) is a Spanish professional footballer who plays as a midfielder for UAE Pro League club Emirates. Widely considered one of the greatest midfielders of all time,[4][5][6] he was lauded for his balance, ball control and agility in close spaces, combined with his skill, composure, and flair on the ball.',
    },
    {
        img: 'https://th.bing.com/th/id/R.bfaa6841fd26792f12a737e9960a8a8a?rik=vMSk91rQ8LmXmw&pid=ImgRaw&r=0',
        name: 'Zlatin Ibragimovich',
        yil: '1981',
        davlat: 'Shvetsiya',
        title: 'Zlatan Ibrahimović (Swedish: [ˈslǎːtan ɪbraˈhǐːmʊvɪtɕ] ⓘ, Bosnian: [zlǎtan ibraxǐːmoʋitɕ]; born 3 October 1981) is a Swedish former professional footballer who played as a striker. Ibrahimović is known for his acrobatic strikes and volleys, technique and ball control, as well as his physical dominance. ',
    }
]
var ellist = document.querySelector('.list')
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    var newli = documant.createElement('li')
    newli.classlist.add('list__item')
    newli.innerHTML = `
                <img src=${item.img} alt="">
                <h2>${arr[i].name}</h2>
                <p>${arr[i].yil}</p>
                <p>${arr[i].davlat}</p>
                <p>${arr[i].title}</p>

            `

    ellist.appendChild(newli)
}