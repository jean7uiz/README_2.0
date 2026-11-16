# Portfólio Pessoal

**Aluno:** Jean Luiz Marcelino
**Curso:** Desenvolvimento de Sistemas I

## Descrição do portfólio

Site pessoal de apresentação profissional com seção de Perfil, Habilidades, Projetos e Contato, menu de navegação funcional e layout responsivo (funciona em celular e computador).

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3
- GitHub Pages (publicação)

## Link do site publicado

https://jean7uiz.github.io/README_2.0/

## Como o projeto funciona

- `index.html`: estrutura da página, com menu fixo no topo (navbar do Bootstrap) que leva às seções por âncoras.
- `style.css`: estilos próprios, como cores, fonte e efeitos de hover.
- `script.js`: comportamentos em JavaScript.
- O layout usa o sistema de grid do Bootstrap (`row` e `col-*`), então se adapta a telas pequenas e grandes.

## Recurso novo adicionado

1. **Modo claro/escuro**: um botão no menu alterna o tema do site, e a escolha fica salva no navegador.
2. **Seção Habilidades com barras animadas**: as barras de progresso são preenchidas quando a seção aparece na tela.
3. **Efeitos de hover**: botões e cards de projeto se movem levemente ao passar o mouse.

## Como o recurso foi implementado

- **Tema escuro**: o Bootstrap 5.3 troca as cores usando o atributo `data-bs-theme` na tag `<html>`. O JavaScript alterna esse atributo entre `light` e `dark` ao clicar no botão e guarda a escolha no `localStorage`. As cores de destaque do CSS mudam por meio de variáveis (`--accent`).
- **Barras animadas**: cada barra começa com largura 0 e guarda o valor final em `data-valor`. Um `IntersectionObserver` detecta quando a barra entra na tela e define a largura final, e o CSS (`transition: width 1.2s`) faz a animação.
- **Hover**: regras `:hover` com `transform: translateY()` e `transition` no `style.css`.
- Respeita a preferência `prefers-reduced-motion`, que desativa as animações para quem prefere menos movimento.

## Publicação

O site foi publicado em Settings > Pages, usando a branch `main` e a pasta raiz.
