const Rect = () => {
    return {
        name: 'rect',
        view: {
            type: 'image',
            src: './rect.png',
            show: true,
            existence: {
                x: 10,
                y: 10,
            },
        },
        move: {
            playerControl: true,
        }
    }
}

export default Rect