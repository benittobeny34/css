const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallery img');

const original = document.querySelector('.full-img');

const imgText = document.querySelector(".caption");


previews.forEach(preview => {
	preview.addEventListener('click',function(){
		modal.classList.add("open");
		original.classList.add("open");

		//Dynamic image change and text

		const originalSrc = preview.getAttribute('data-original')
		original.src=originalSrc;

		const Text = preview.alt;
		imgText.textContent=Text;
	})
})
modal.addEventListener('click',(e)=>{
	if(e.target.classList.contains('modal')){
		modal.classList.remove('open');
		original.classList.remove("open");
	}
})