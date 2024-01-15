let listaPalavras = [
    {
        palavra: "python",
        dica: "Cobra famosa nas Monty Python"
    },
    {
        palavra: "javascript",
        dica: "Linguagem web essencial"
    },
    {
        palavra: "java",
        dica: "Café ou código? Ambos!"
    },
    {
        palavra: "ruby",
        dica: "Joia de programação"
    },
    {
        palavra: "html",
        dica: "Estrutura básica da web"
    },
    {
        palavra: "css",
        dica: "Estilizando a web"
    },
    {
        palavra: "php",
        dica: "Hypertext Preprocessor"
    },
    {
        palavra: "csharp",
        dica: "C afiado para desenvolvimento Microsoft"
    },
    {
        palavra: "swift",
        dica: "Linguagem da Apple"
    },
    {
        palavra: "kotlin",
        dica: "Para desenvolvimento Android"
    },
    {
        palavra: "perl",
        dica: "Prática e eficaz para relatórios"
    },
    {
        palavra: "scala",
        dica: "Combinação de funcional e orientada a objetos"
    },
    {
        palavra: "go",
        dica: "Eficiente e escalável pela Google"
    },
    {
        palavra: "rust",
        dica: "Segurança sem garbage collector"
    },
    {
        palavra: "assembly",
        dica: "Linguagem de baixo nível"
    },
    {
        palavra: "sql",
        dica: "Linguagem de consulta estruturada"
    },
    {
        palavra: "cobol",
        dica: "Anciã mas poderosa"
    },
    {
        palavra: "fortran",
        dica: "Primeira linguagem compilada"
    },
    {
        palavra: "lua",
        dica: "Extensível e leve"
    },
    {
        palavra: "matlab",
        dica: "Para computação numérica"
    },
    {
        palavra: "dart",
        dica: "Para desenvolvimento de aplicativos móveis"
    },
    {
        palavra: "elixir",
        dica: "Concorrente e funcional"
    },
    {
        palavra: "groovy",
        dica: "Scripting para a Máquina Virtual Java"
    },
    {
        palavra: "haskell",
        dica: "Programação funcional pura"
    },
    {
        palavra: "lua",
        dica: "Extensível e leve"
    },
    {
        palavra: "objectivec",
        dica: "Para desenvolvimento Apple"
    },
    {
        palavra: "perl",
        dica: "Prática e eficaz para relatórios"
    },
    {
        palavra: "powershell",
        dica: "Shell para automação Microsoft"
    },
    {
        palavra: "racket",
        dica: "Para linguagens específicas de domínio"
    },
    {
        palavra: "smalltalk",
        dica: "Influenciou muitas linguagens modernas"
    },
    {
        palavra: "tcl",
        dica: "Linguagem de script"
    },
    {
        palavra: "verilog",
        dica: "Para descrição de hardware"
    },
    {
        palavra: "wolframlanguage",
        dica: "Para computação simbólica"
    },
    {
        palavra: "xml",
        dica: "Extensible Markup Language"
    },
    {
        palavra: "yacc",
        dica: "Gerador de Analisadores Sintáticos"
    },
    {
        palavra: "zig",
        dica: "Focado em desempenho e segurança"
    },
    {
        palavra: "ada",
        dica: "Desenvolvimento seguro e escalável"
    },
    {
        palavra: "bash",
        dica: "Shell de Born Again"
    },
    {
        palavra: "clojure",
        dica: "Lispy para a Máquina Virtual Java"
    },
    {
        palavra: "d",
        dica: "Eficiente e próximo ao hardware"
    },
    {
        palavra: "erlang",
        dica: "Concorrente e tolerante a falhas"
    },
    {
        palavra: "fsharp",
        dica: "Funcional para .NET"
    },
    {
        palavra: "node",
        dica: "Ambiente de execução JavaScript do lado do servidor"
    },
    {
        palavra: "npm",
        dica: "Gerenciador de pacotes para Node.js"
    },
    {
        palavra: "express",
        dica: "Framework web para Node.js"
    },
    {
        palavra: "react",
        dica: "Biblioteca JavaScript para construção de interfaces de usuário"
    },
    {
        palavra: "angular",
        dica: "Framework front-end mantido pelo Google"
    },
    {
        palavra: "vue",
        dica: "Framework progressivo para construção de interfaces de usuário"
    },
    {
        palavra: "typescript",
        dica: "Superset tipado do JavaScript"
    },
    {
        palavra: "webpack",
        dica: "Empacotador de módulos para JavaScript"
    },
    {
        palavra: "babel",
        dica: "Transcompilador JavaScript"
    },
    {
        palavra: "ajax",
        dica: "Técnica assíncrona em JavaScript"
    },
    {
        palavra: "json",
        dica: "Formato de dados leves para intercâmbio"
    },
    {
        palavra: "callback",
        dica: "Função passada como argumento para outra função"
    },
    {
        palavra: "promise",
        dica: "Objeto que representa a conclusão ou falha de uma operação assíncrona"
    },
    {
        palavra: "async",
        dica: "Palavra-chave para criar funções assíncronas em JavaScript"
    },
    {
        palavra: "await",
        dica: "Palavra-chave que pausa a execução de uma função assíncrona até que a Promise seja resolvida ou rejeitada"
    },
    {
        palavra: "closure",
        dica: "Função que tem acesso às variáveis de seu escopo externo, mesmo após esse escopo ser encerrado"
    },
    {
        palavra: "dom",
        dica: "Modelo de objeto de documento, interface que representa a estrutura de um documento HTML ou XML"
    },
    {
        palavra: "event",
        dica: "Acontecimento que pode ser detectado por JavaScript, como cliques ou teclas pressionadas"
    },
    {
        palavra: "fetch",
        dica: "API para fazer requisições HTTP"
    },
    {
        palavra: "localStorage",
        dica: "API de armazenamento de dados no navegador"
    },
    {
        palavra: "sessionStorage",
        dica: "API de armazenamento de dados na sessão do navegador"
    },
    {
        palavra: "prototype",
        dica: "Mecanismo de herança em JavaScript"
    },
    {
        palavra: "hoisting",
        dica: "Elevação de declarações de variáveis e funções"
    },
    {
        palavra: "immutable",
        dica: "Objetos cujo estado não pode ser alterado após a criação"
    },
    {
        palavra: "map",
        dica: "Estrutura de dados que mapeia chaves para valores"
    },
    {
        palavra: "set",
        dica: "Estrutura de dados que representa uma coleção de valores únicos"
    },
    {
        palavra: "spread",
        dica: "Operador de propagação usado para desempacotar elementos de arrays ou objetos"
    },
    {
        palavra: "rest",
        dica: "Operador de rest usado para empacotar elementos em um array ou objeto"
    },
    {
        palavra: "arrow",
        dica: "Funções de seta (arrow functions) em JavaScript"
    },
    {
        palavra: "callback",
        dica: "Função passada como argumento para outra função"
    },
    {
        palavra: "debounce",
        dica: "Técnica que limita a frequência de execução de uma função"
    },
    {
        palavra: "memoization",
        dica: "Otimização de cache para funções, armazenando resultados de chamadas anteriores"
    },
    {
        palavra: "hoisting",
        dica: "Elevação de declarações de variáveis e funções"
    },
    {
        palavra: "middleware",
        dica: "Função intermediária entre um pedido e uma resposta em aplicações Node.js"
    },
    {
        palavra: "mvc",
        dica: "Padrão de arquitetura de software - Model-View-Controller"
    },
    {
        palavra: "ajax",
        dica: "Técnica assíncrona em JavaScript"
    },
    {
        palavra: "singleton",
        dica: "Padrão de design que garante que uma classe tenha apenas uma instância e fornece um ponto global para essa instância"
    },
    {
        palavra: "webpack",
        dica: "Empacotador de módulos para JavaScript"
    },
    {
        palavra: "babel",
        dica: "Transcompilador JavaScript"
    },
    {
        palavra: "proxy",
        dica: "Objeto que controla o acesso a outro objeto"
    },
    {
        palavra: "xhr",
        dica: "Objeto XMLHttpRequest usado para fazer requisições HTTP assíncronas"
    },
    {
        palavra: "jwt",
        dica: "Token de autenticação JSON"
    },
    {
        palavra: "cookie",
        dica: "Pequeno fragmento de dados armazenado no navegador"
    },
    {
        palavra: "webworker",
        dica: "Script em execução em segundo plano separado da thread principal"
    },
    {
        palavra: "this",
        dica: "Palavra-chave que se refere ao objeto atual em execução"
    },
    {
        palavra: "eventlistener",
        dica: "Mecanismo para tratar eventos em JavaScript"
    },
    {
        palavra: "prototype",
        dica: "Mecanismo de herança em JavaScript"
    },
    {
        palavra: "callback",
        dica: "Função passada como argumento para outra função"
    },
];
