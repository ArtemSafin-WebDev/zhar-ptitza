import { num_word } from './utils';

export default function roomsAmount() {
    const elements = Array.from(document.querySelectorAll('.js-room-amount'));

    elements.forEach(element => {
        const input = element.querySelector('input');

        const minus = element.querySelector('button:first-child');
        const plus = element.querySelector('button:last-child');

        const min = input.hasAttribute('data-min') ? parseInt(input.getAttribute('data-min'), 10) : 0;

        const units = input.hasAttribute('data-units') ? input.getAttribute('data-units').split(',') : null;

        let initialValue = input.value.trim() !== '' ? parseInt(input.value, 10) : min;

        const setActivity = value => {
            if (value <= min) {
                minus.disabled = true;
            } else {
                minus.disabled = false;
            }
        };

        setActivity(initialValue);

        if (units) {
            input.value = initialValue + ' ' + num_word(initialValue, units);
        }

        minus.addEventListener('click', () => {
            if (minus.disabled) return;

            let value = input.value.trim() !== '' ? parseInt(input.value, 10) : min;

            value--;

            if (units) {
                input.value = value + ' ' + num_word(value, units);
            } else {
                input.value = value;
            }

            setActivity(value);
        });

        plus.addEventListener('click', event => {
            if (plus.disabled) return;

            let value = input.value.trim() !== '' ? parseInt(input.value, 10) : min;

            value++;

            if (units) {
                input.value = value + ' ' + num_word(value, units);
            } else {
                input.value = value;
            }

            setActivity(value);
        });
    });
}
