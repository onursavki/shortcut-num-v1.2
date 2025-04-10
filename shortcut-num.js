document.addEventListener("DOMContentLoaded", function () {
    for (let i = 1; i <= 6; i++) {
        const span = document.getElementById(`count-shortcut${i}`);

        if (span) {
            // En yakın <a class="uk-accordion-title"> öğesini bul
            const accordionTitle = span.closest("a.uk-accordion-title");

            if (accordionTitle) {
                const accordionContent = accordionTitle.nextElementSibling;

                if (accordionContent) {
                    // Accordion içeriğinde bir tablo varsa <tr> öğelerini say
                    const table = accordionContent.querySelector("table");
                    if (table) {
                        const trCount = table.querySelectorAll("tr").length;
                        span.textContent = `(${trCount} KISAYOL)`;
                    }
                }
            }
        }
    }
});
