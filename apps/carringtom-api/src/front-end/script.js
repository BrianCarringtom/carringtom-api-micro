// Evita que el formulario se envíe de forma tradicional
document.getElementById('UserForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Obteniene los valores del index
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Crear los datos del usuario a agregar
    const User = {
        name,
        email,
    };

    // Este apartado es para pedir la solicitud en postman
    try {
        const response = await fetch('http://localhost:3001/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(User),
        });

        // Verificar si ya exite en usuario en la base de datos
        if (!response.ok) {
            throw new Error('Pero si tu ya eres parte de nuestra tripulacion');
        }

        // Obteniene la respuesta de postman en JSON
        const data = await response.json();
        showMessage('success', `Bienvenido: ${data.name}`);
    } catch (error) {
        showMessage('error', `${error.message}`);
    }
});

function showMessage(type, message) {
    // Mostrar el mensaje en la página
    const responseDiv = document.getElementById('response');
    responseDiv.innerText = message;
    responseDiv.className = type;

    // Animación para mostrar el mensaje
    responseDiv.style.opacity = '1';
}
