


News.map((item,index)=>{
	let newsItem = document.querySelector('.news-icon').cloneNode(true);
	document.querySelector('.news .new-area').append(newsItem);

	//Adicionando os itens 

	newsItem.querySelector('.news-icon-img img').src = item.img;
	newsItem.querySelector('.news-title h4').innerHTML = item.title;
	newsItem.querySelector('.news-legend i').innerHTML = item.font;
	
});