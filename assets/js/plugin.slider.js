function Slider(configuration) {
  const plugin = this;
  plugin.selector = configuration.selector;
  plugin.selectors = {
    slides: '.slides',
    slide: '.slide'
  };
  plugin.classes = {
    controllers: 'controllers',
    next: 'next',
    previous: 'previous',
    transition: 'transition',
    active: 'active',
    start: 'start',
    end: 'end'
  };
  plugin.navigationAbility = true;
}
Slider.prototype.getActiveSlideIndex = function() {
  const plugin = this;
  return plugin.slides.indexOf(plugin.slides.filter(slide => slide.classList.contains(plugin.classes.active)).pop());
};
Slider.prototype.activeSlide = function(index, direction) {
  const plugin = this;
  plugin.navigationAbility = false;
  const activeSlides = plugin.slides.filter(slide => slide.classList.contains(plugin.classes.active));
  const from = direction === 'next' ? plugin.classes.start : plugin.classes.end;
  const to = direction === 'next' ? plugin.classes.end : plugin.classes.start;
  activeSlides.forEach(slide => {
    slide.classList.add(plugin.classes.transition);
    slide.classList.remove(plugin.classes.active);
    slide.classList.add(to);
  });
  plugin.slides[index].classList.add(from);
  window.getComputedStyle(plugin.slides[index]).getPropertyValue('transform');
  plugin.slides[index].classList.add(plugin.classes.transition);
  plugin.slides[index].classList.remove(from);
  plugin.slides[index].classList.add(plugin.classes.active);
  function transitionEndFunction(event) {
    activeSlides.forEach(slide => {
      slide.classList.remove(plugin.classes.transition);
      slide.classList.remove(to);
    });
    event.target.classList.remove(plugin.classes.transition);
    event.target.removeEventListener('transitionend', transitionEndFunction);
    plugin.navigationAbility = true;
  }
  plugin.slides[index].addEventListener('transitionend', transitionEndFunction);
};
Slider.prototype.next = function() {
  const plugin = this;
  if (plugin.navigationAbility) {
    const currentIndex = plugin.getActiveSlideIndex();
    let nextIndex = currentIndex;
    nextIndex = ++nextIndex < plugin.slides.length ? nextIndex : 0;
    if (currentIndex !== nextIndex) {
      plugin.activeSlide(nextIndex, 'next');
    }
  }
};
Slider.prototype.previous = function() {
  const plugin = this;
  if (plugin.navigationAbility) {
    const currentIndex = plugin.getActiveSlideIndex();
    let previousIndex = currentIndex;
    previousIndex = --previousIndex >= 0 ? previousIndex : (plugin.slides.length - 1);
    if (currentIndex !== previousIndex) {
      plugin.activeSlide(previousIndex, 'previous');
    }
  }
};
Slider.prototype.init = function() {
  const plugin = this;
  plugin.slides = [...plugin.selector.querySelectorAll(plugin.selectors.slide)];
  window.addEventListener('click', function(event) {
    if(selectorGEFELBCWISC(selectorSAEFTPU(event.target, []), plugin.classes.next, plugin.classes.controllers)) {
      plugin.next();
    }
    if(selectorGEFELBCWISC(selectorSAEFTPU(event.target, []), plugin.classes.previous, plugin.classes.controllers)) {
      plugin.previous();
    }
  });
};