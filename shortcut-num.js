document.addEventListener("DOMContentLoaded", function () {
    for (let i = 1; i <= 6; i++) {
        const span = document.getElementById(`count-shortcut${i}`);
        
        if (span) {
            // span'in bulunduğu <a> etiketinden sonraki kardeş elemanı bul (accordion content)
            const accordionContent = span.closest("a.uk-accordion-title").nextElementSibling;

            if (accordionContent) {
                // accordionContent içinde bir tablo varsa onun tr'lerini say
                const table = accordionContent.querySelector("table");
                if (table) {
                    const trCount = table.querySelectorAll("tr").length;
                    span.textContent = `(${trCount} KISAYOL)`;
                }
            }
        }
    }
});
