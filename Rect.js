const Rect = () => {
    return {
        name: 'rect',
        view: {
            type: 'image',
            src: './rect.png',
            hide: false,
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