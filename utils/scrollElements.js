export function scrollElements (slider) {
    let isDown = false;
      let startX;
      let scrollLeft;
  
      if (slider && slider.current) {
        slider.current.addEventListener("mousedown", (e) => {
          isDown = true;
          startX = e.pageX - slider.current.offsetLeft;
          scrollLeft = slider.current.scrollLeft;
        });
        slider.current.addEventListener("mouseleave", () => {
          isDown = false;
        });
        slider.current.addEventListener("mouseup", () => {
          isDown = false;
        });
        slider.current.addEventListener("mousemove", (e) => {
          if (!isDown) return;
          e.preventDefault();
          const x = e.pageX - slider.current.offsetLeft;
          console.log(e)
          const walk = (x - startX) * 3;
          slider.current.scrollLeft = scrollLeft - walk;
          console.log(walk);
        });
      }
  }