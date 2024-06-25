window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    const div1 = document.querySelector('.div1');
    const div2 = document.querySelector('.div2');
    const div3 = document.querySelector('.div3');
    
    div1.style.transform = `translateY(${-scrollPosition * 0.5}px)`;
    div2.style.transform = `translateY(${-scrollPosition * 0.3}px)`;
    div3.style.transform = `translateY(${-scrollPosition * 0.1}px)`;
});
