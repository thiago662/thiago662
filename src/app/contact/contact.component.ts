import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  translate = {
    pt: {
      title: 'Contatos',
      cardOne: {
        title: 'Portfólio',
        text: 'Este projeto foi pensado para que eu pudesse mostrar um pouco do meu trabalho e compartilhar minha experiência de trabalho e estudo.',
        linkGitHubText: 'Link GitHub',
        linkGitHub: 'https://github.com/thiago662/thiago662',
        linkGitHubPagesText: 'Link GitHub Pages',
        linkGitHubPages: 'https://thiago662.github.io/thiago662/',
      },
      cardTwo: {
        title: 'Scrum Truco',
        text: 'O scrum truco é um sistema utilizado para que as equipes consigam estipular o peso das tarefas na metodologia scrum, fazendo com que todos os membros dêem suas notas sem interferência externa e depois comparem.',
        linkGitHubText: 'Link GitHub',
        linkGitHub: 'https://github.com/thiago662/scrum-truco-app',
        linkGitHubPagesText: 'Link GitHub Pages',
        linkGitHubPages: 'https://thiago662.github.io/scrum-truco-app/',
      },
      cardThree: {
        title: 'Notas e médias',
        text: 'Projeto desenvolvido durante a faculdade no terceiro semestre, com o objetivo de ser um sistema para os professores calcularem as médias dos alunos.',
        linkGitHubText: 'Link GitHub',
        linkGitHub: 'https://github.com/thiago662/primeiro-projeto-interdiciplinar',
        linkGitHubPagesText: 'Link GitHub Pages',
        linkGitHubPages: 'https://thiago662.github.io/primeiro-projeto-interdiciplinar/',
      },
    },
    usa:{
      title: 'Contact',
      cardOne: {
        title: 'Portfolio',
        text: 'This project was designed for me to be able to show a little of my work and share my work and study experience.',
        linkGitHubText: 'Link GitHub',
        linkGitHub: 'https://github.com/thiago662/thiago662',
        linkGitHubPagesText: 'Link GitHub Pages',
        linkGitHubPages: 'https://thiago662.github.io/thiago662/',
      },
      cardTwo: {
        title: 'Scrum Truco',
        text: 'The scrum truco is a system used for teams to be able to stipulate the weight of tasks in the scrum methodology, thus getting all members to give their grades without external interference and then compare them.',
        linkGitHubText: 'Link GitHub',
        linkGitHub: 'https://github.com/thiago662/scrum-truco-app',
        linkGitHubPagesText: 'Link GitHub Pages',
        linkGitHubPages: 'https://thiago662.github.io/scrum-truco-app/',
      },
      cardThree: {
        title: 'Grades and averages',
        text: 'Project developed during college in the third semester, with the aim of being a system for teachers to calculate student averages.',
        linkGitHubText: 'Link GitHub',
        linkGitHub: 'https://github.com/thiago662/primeiro-projeto-interdiciplinar',
        linkGitHubPagesText: 'Link GitHub Pages',
        linkGitHubPages: 'https://thiago662.github.io/primeiro-projeto-interdiciplinar/',
      },
    },
  }

}
