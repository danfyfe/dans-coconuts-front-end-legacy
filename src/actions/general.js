export const scrollToElement = selector => {
    const element = document.querySelector(`${selector}`);
    const pos = element.getBoundingClientRect()
    if( pos.top > 200) {
        window.scrollTo({
          top: pos.top,
          behavior: 'smooth'
        });
    }
}