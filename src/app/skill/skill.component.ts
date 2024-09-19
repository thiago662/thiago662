import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
  translate = {
    pt: {
      title: 'Habilidades',
      cardOne: {
        title: 'Php',
        text: 'Linguagem de programação criada especificamente para a internet, liderou o mercado web por anos, foi inovadora por ser a primeira linguagem focada na web e continua se atualizando até hoje. Tive meu primeiro contato com PHP quando estava fazendo meu projeto final do curso técnico, desde então se tornou minha principal linguagem de programação e a estudo há 6 anos.',
      },
      cardTwo: {
        title: 'Laravel',
        text: 'Laravel é o framework para PHP mais conhecido e o mais utilizado no mercado. Ele tem como objetivo tornar o desenvolvimento mais rápido e simples, com excelentes soluções já desenvolvidas e permitindo a escalabilidade de projetos. Tive meu primeiro contato com ele no projeto de estágio que participei.',
      },
      cardThree: {
        title: 'Git',
        text: 'Git é o sistema de versionamento de código mais usado e o padrão da indústria. Comecei a usá-lo e estudá-lo quando estava desenvolvendo meu TCC para o curso técnico, na busca por poder salvar o código e facilitar que mais pessoas trabalhassem no mesmo projeto ao mesmo tempo.',
      },
      cardFour: {
        title: 'Postgresql',
        text: 'O PostgreSQL é um dos bancos de dados mais robustos do mercado e é o mais adequado para uso com PHP, pois os dois compõem uma das pilhas mais populares para a web. Tive meu primeiro contato com ele durante meu projeto de estágio, pois fazia parte da pilha usada no sistema.',
      },
      cardFive: {
        title: 'Sql',
        text: 'SQL é uma linguagem de consulta a banco de dados desenvolvida pela IBM em 1970, que auxilia no gerenciamento de bancos de dados relacionados e se tornou um padrão de mercado, sendo até mesmo representada como um tipo de linguagem de banco de dados. Foi a primeira linguagem orientada a banco de dados que aprendi no curso técnico.',
      },
      cardSix: {
        title: 'Javascript',
        text: 'Javascript é uma linguagem de programação voltada para desenvolvimento web. Ela foi desenvolvida inicialmente para permitir que desenvolvedores tivessem mais possibilidades de criar funções na interface e que ela fosse interpretada pelo próprio navegador sem precisar enviá-la para um servidor.',
      },
      cardSeven: {
        title: 'Typescript',
        text: 'Typescript é uma linguagem de programação baseada em Javascript, que possui uma sintaxe mais robusta e complexa, permitindo melhor visualização do código, como a possibilidade de tipagem de variáveis.',
      },
      cardEight: {
        title: 'Angular',
        text: 'Angular é um framework front-end Typescript. Como framework, ele tem a função de fornecer uma estrutura base que auxilia e auxilia o desenvolvedor em suas criações, evitando que ele perca tempo com a parte de escrita e funcionalidades frequentemente utilizadas.',
      },
      cardNine: {
        title: 'Scrum',
        text: 'O Scrum é um framework ágil de gerenciamento de projetos, muito utilizado no universo do desenvolvimento, onde parte de uma premissa básica onde ao invés de tentar concluir o projeto inteiro, que é um processo muito demorado e grande, ele é dividido em pequenas entregas e priorizadas, tornando assim o projeto funcional em menos tempo e melhorando-o gradativamente.',
      },
    },
    usa:{
      title: 'Skills',
      cardOne: {
        title: 'Php',
        text: 'Programming language created specifically for the internet, it led the web market for years, was innovative for being the first language focused on the web and continues to be updated to this day. I had my first contact with PHP when I was doing my final project for the technical course, since then it has become my main programming language and I have been studying it for 6 years.',
      },
      cardTwo: {
        title: 'Laravel',
        text: 'Laravel is the best-known framework for PHP and the most used in the market. It aims to make development faster and simpler, with excellent solutions already developed and allowing the scalability of projects. I had my first contact with it in the internship project I participated in.',
      },
      cardThree: {
        title: 'Git',
        text: 'Git is the most widely used code versioning system and the industry standard. I started using and studying it when I was developing my TCC for the technical course, in the search for being able to save the code and make it easier for more people to work on the same project at the same time.',
      },
      cardFour: {
        title: 'Postgresql',
        text: 'PostgreSQL is one of the most robust databases on the market and is the most suitable for use with PHP, as the two make up one of the most popular stacks for the web. I had my first contact with it during my internship project, as it was part of the stack used in the system.',
      },
      cardFive: {
        title: 'Sql',
        text: 'SQL is a database query language developed by IBM in 1970, which helps in the management of related databases and has become a market standard, even being represented as a type of database language. It was the first database-oriented language that I learned in the technical course.',
      },
      cardSix: {
        title: 'Javascript',
        text: 'Javascript is a programming language aimed at web development. It was initially developed to allow developers to have more possibilities to create functions in the interface and for it to be interpreted by the browser itself without needing to send it to a server.',
      },
      cardSeven: {
        title: 'Typescript',
        text: 'Typescript is a programming language based on Javascript, which has a more robust and complex syntax, allowing better visualization of the code such as the possibility of typing variables.',
      },
      cardEight: {
        title: 'Angular',
        text: 'Angular is a Typescript front-end framework. As a framework, it has the function of providing a base structure that assists and helps the developer in their creations, preventing them from wasting time on the writing part and frequently used functionalities.',
      },
      cardNine: {
        title: 'Scrum',
        text: 'Scrum is an agile project management framework, widely used in the development universe, where it is based on a basic premise where instead of trying to complete the entire project, which is a very time-consuming and large process, it is divided into small deliveries and prioritized, thus making the project functional in less time and improving it gradually.',
      },
    },
  }

}
