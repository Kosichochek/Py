document.addEventListener('DOMContentLoaded', () => {
    const tooltips = document.querySelectorAll('.tooltip');

    tooltips.forEach(tooltip => {
        const trigger = tooltip.querySelector('.tooltip__trigger');
        const content = tooltip.querySelector('.tooltip__content');

        if (!trigger || !content) return;

        content.setAttribute('aria-hidden', 'true');

        trigger.addEventListener('mouseenter', () => {
            showTooltip(content, trigger);
        });

        trigger.addEventListener('mouseleave', () => {
            hideTooltip(content);
        });

        tooltip.updateTooltipText = (newText) => {
            content.textContent = newText;
        };
    });

    function showTooltip(content, trigger) {
        content.style.visibility = 'visible'; // Временно включаем для расчетов
        content.setAttribute('aria-hidden', 'false');

        const rect = content.getBoundingClientRect();
        
        if (rect.top < 0) {
            content.classList.add('tooltip__content--bottom');
        } else {
            content.classList.remove('tooltip__content--bottom');
        }
    }

    function hideTooltip(content) {
        content.setAttribute('aria-hidden', 'true');
        content.classList.remove('tooltip__content--bottom');
    }
});