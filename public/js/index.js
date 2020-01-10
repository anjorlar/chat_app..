let socket = io();

socket.on('connect', () => {
    console.log('Connected to server');

    socket.emit('CreateMessage', {
        to: 'wu@example.com',
        text: 'WHAT IS GOING ON'
    });
})

socket.on('disconnect', () => {
    console.log('Disconnected from server');
})

socket.on('newMessage', function (message) {
    console.log('New Message', message);
})