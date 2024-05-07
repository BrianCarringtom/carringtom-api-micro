document.getElementById('UserForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    // Obtener valores de los campos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Crear un objeto con los datos del nuevo usuario
    const User = {
        name,
        email,
    };

    // Realizar una solicitud POST a tu backend
    try {
        const response = await fetch('http://localhost:3001/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(User),
        });

        // Verificar si la respuesta no fue exitosa
        if (!response.ok) {
            throw new Error('El usuario ya existe en la base de datos');
        }

        // Obtener la respuesta en formato JSON
        const data = await response.json();
        // Mostrar la respuesta en la página
        showMessage('success', `Usuario creado con éxito: ${data.name}`);
    } catch (error) {
        // Mostrar el error en la página
        showMessage('error', `Error: ${error.message}`);
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
