//Script que realiza as funcoes dos botoes
function showAboutMe() {
    document.getElementById('text').innerHTML = `
        <h2>Sobre Mim:</h2>
        <p>Apaixonado e em uma longa relação com informática! 💻

Desde cedo, lembro de explorar o fascinante mundo da computação e me encantar com as infinitas possibilidades que a tecnologia oferece. Meu nome é Luis Felipe, tenho 18 anos e sou morador de Três Coroas.</p>
    `;
}

function showEducation() {
    document.getElementById('text').innerHTML = `
        <h2>Formação Educacional</h2>
        <ul>
            <li><strong>Curso Superior:</strong> Realizando no momento Análise e Desenv. de Sistemas - UNINTER</li>
            <li><strong>Idiomas:</strong> Inglês e português</li>
        </ul>
    `;
}

function showPortfolio() {
    document.getElementById('text').innerHTML = `
        <h2>Portfólio</h2>
        <p>Aqui está meu portifólio:</p>
        <ul>
        <li><a href="https://github.com/LuisFelipeRiesPereira" target="_blank" style="color: #A6BFFF;; text-decoration: none;">https://github.com/LuisFelipeRiesPereira</a></li>
        </ul>
    `;
}

function showContact() {
    document.getElementById('text').innerHTML = `
        <h2>Contato</h2>
        <form>
            <label for="name">Nome:</label>
            <input type="text" id="name" name="name" required>
            <br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <br>
            <label for="message">Mensagem:</label>
            <textarea id="message" name="message" required></textarea>

            <input type="submit" value="Enviar">
        </form>
    `;
}