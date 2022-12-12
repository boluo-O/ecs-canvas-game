const Rect = () => {
    return {
        name: 'rect',
        view: {
            type: 'image',
            src: './rect.png',
            hide: false,
            existence: {
                x: 100,
                y: 100,
            },
        },
        move: {
            playerControl: true,
        }
    }
}

export default Rect