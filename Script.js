const radioInputs = document.querySelectorAll('.radio-input');

radioInputs.forEach(input => {
    input.addEventListener('change', () => {
        // Remove a classe 'selected' de todos os cards
        document.querySelectorAll('.card-bolo').forEach(card => {
            card.classList.remove('selected');
        });

        // Adiciona a classe 'selected' apenas ao card selecionado
        const selectedCard = input.closest('.card-bolo');
        selectedCard.classList.add('selected');
    });
});


     // Adiciona evento de clique ao botão "Adicionar ao Carrinho"
     document.getElementById("adicionar-ao-carrinho").addEventListener("click", function() {
        // Obtém o item selecionado
        var selectedItem = document.querySelector('input[name="bolo"]:checked');
        
        // Verifica se um item foi selecionado
        if (selectedItem) {
            // Obtém os dados do item selecionado
            var itemName = selectedItem.parentElement.querySelector('.info-bolo h2').innerText;
            var itemDescription = selectedItem.parentElement.querySelector('.info-bolo p').innerText;
            var itemPrice = selectedItem.parentElement.querySelector('.preco').innerText;

            // Armazena os dados do item selecionado em localStorage (ou sessionStorage)
            localStorage.setItem('itemName', itemName);
            localStorage.setItem('itemDescription', itemDescription);
            localStorage.setItem('itemPrice', itemPrice);

            // Redireciona o usuário para a segunda tela
            window.location.href = 'Compra.html';
        } else {
            // Se nenhum item foi selecionado, exibe uma mensagem de erro
            alert('Por favor, selecione um item antes de adicionar ao carrinho.');
        }
    });