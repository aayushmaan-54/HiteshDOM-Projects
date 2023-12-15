'use strict';


function scrollTrigger(selector, options = {}){
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    els.forEach(el => {
        addObserver(el, options)
    })
}


function addObserver(el, options){
    if(!('IntersectionObserver' in window)){
        if(options.cb){
            options.cb(el)
        }else{
            entry.target.classList.add('active')
        }
        return
    }
    let observer = new IntersectionObserver((entries, observer) => { 
        entries.forEach(entry => {
            if(entry.isIntersecting){
                if(options.cb){
                    options.cb(el)
                }else{
                    entry.target.classList.add('active')
                }
                observer.unobserve(entry.target)
            }
        })
    }, options)
    observer.observe(el)
}


scrollTrigger('.para', {
    rootMargin: '-200px',
})


scrollTrigger('.paraL', {
    rootMargin: '-200px',
    cb: function(el){
        el.innerText = 'Loading...'
        setTimeout(() => {
            el.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ullam iste natus, voluptas possimus repellat voluptates neque distinctio corrupti beatae eius aspernatur officiis temporibus eveniet tempore, magni aliquam, adipisci libero modi at non dolore debitis? Voluptas consequuntur ad unde ut sequi corporis adipisci enim ipsa deserunt voluptatum explicabo reprehenderit ullam vitae, voluptate quod, voluptatem aspernatur numquam, porro temporibus ipsum? Eum dolores a, culpa nisi omnis eveniet beatae consequatur iusto dicta modi tempora optio, ad iste cumque tempore minima voluptas assumenda? Sed corrupti qui nesciunt, aut odit quibusdam fugiat suscipit saepe explicabo esse facere ut debitis vel unde ea officiis expedita consequuntur quis, molestiae dolor molestias? Eaque fuga molestias est maxime laudantium quae ipsum repellat soluta minus, magnam atque deleniti expedita ut accusamus impedit quis eveniet deserunt officiis quaerat recusandae nam dicta cupiditate. Nesciunt ab dicta porro omnis dolores architecto sapiente sit aperiam placeat in iure, rem impedit eaque qui aliquam recusandae laborum eligendi animi perspiciatis velit error cumque unde! Ipsum amet numquam, quam neque modi in ad dolores distinctio saepe perferendis necessitatibus autem, minus aspernatur vitae? Aliquid ipsam, aspernatur architecto, officia commodi voluptate magni nisi maiores sunt accusamus delectus fugit porro explicabo animi non molestiae deleniti necessitatibus, quibusdam rem cum.`
        }, 1000)
    }
})