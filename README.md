# Projeto de Testes Automatizados com Cypress

Este projeto contém uma suíte de testes automatizados para uma aplicação web de compra de ingressos, utilizando o framework Cypress.  

# Descrição  

Os testes cobrem funcionalidades essenciais do formulário de compra de ingressos, incluindo preenchimento de campos, seleção de opções, validação de e-mail, interações com checkboxes e botões, além de verificar o comportamento do formulário ao resetar os dados.

# Estrutura dos Testes  

Os testes estão organizados dentro do bloco describe("Tickets", () => { ... }) e incluem:  

Visita da página inicial antes de cada teste (beforeEach).  

Preenchimento dos campos de texto: nome, sobrenome, e-mail, pedidos especiais e assinatura.  

Seleção da quantidade de ingressos.  

Seleção do tipo de ingresso (ex: VIP).  

Marcação e desmarcação de checkboxes relacionados a preferências.  

Verificação do cabeçalho da página.  

Validação do formato do e-mail com feedback visual.  

Teste do comportamento do formulário ao preencher e resetar os dados.  

Uso de comando customizado para preencher campos obrigatórios.  



Através de cenários de testes end-to-end, consigo:  

✅ Validar o fluxo completo do usuário  

✅ Detectar falhas antes que cheguem à produção  

✅ Aumentar a confiança nas entregas  

✅ Reduzir retrabalho e acelerar ciclos de desenvolvimento  



https://github.com/user-attachments/assets/b403986d-e1ea-47c5-8188-94743e63646f

