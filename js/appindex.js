(function(){
    const listElements = document.querySelectorAll('.menu_item_show');
    const list = document.querySelector('.menu_links');
    const menu = document.querySelector('.menu_hamburguer');

    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{
                
                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu_item_active');

                if(subMenu.clientHeight === 0){
                    height = subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;
            });
        });
    }

    // addClick();

    const deleteStyleHeight = () => {
        listElements.forEach(element=>{
            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('menu_item_active');
            }
        });
    };
   

    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 800){
            deleteStyleHeight();
            if(list.classList.contains('menu_links_show')){
                list.classList.remove('menu_links_show');
            }
        }
        else{
            addClick();
        }
    });

    if(window.innerWidth <= 800){
        addClick();
    }

    menu.addEventListener('click', ()=> list.classList.toggle('menu_links_show'));

})();


