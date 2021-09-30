import blockies from 'blockies';

const address = [
    '0x03De1aEF57deC98A47A12a363c1d4D09818e68A1',
    '0x066CB9b6F37B542706866452F5504f62D8785Ff1',
    '0xCEd0428C2f9f20B7A96d5C2E5b146846D7Ff19dc'
];

const addressIcons = address.map((address, i) => ({
    text: document.createTextNode(`Address ${i+1}: ${address}`),
    icon: blockies.create({
        seed: address,
        size: 10,
        scale: 10
    })
}));

window.addEventListener('load', () => {
    addressIcons.forEach(address => {
        const wrapper = document.createElement('div');
        wrapper.appendChild(address.text);
        wrapper.appendChild(address.icon);
        document.body.appendChild(wrapper);
    });
});