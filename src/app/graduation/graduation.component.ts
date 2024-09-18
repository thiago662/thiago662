import { Component } from '@angular/core';

@Component({
  selector: 'app-graduation',
  templateUrl: './graduation.component.html',
  styleUrl: './graduation.component.scss'
})
export class GraduationComponent {
  translate = {
    pt: {
      title: 'Formação',
      cardOne: {
        title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
        institution: 'Ceunsp e Fatec',
        date: '01/2020 - 12/2022 - 3 anos',
        text: 'Iniciei a faculdade em 2020 na instituição de ensino Fatec, no final do segundo semestre tive oportunidade de estágio e por questões de horário mudei para o Ceunsp onde fiquei até concluir o curso.',
      },
      cardTwo: {
        title: 'Técnico em tecnologia da informação',
        institution: 'Etec',
        date: '01/2017 - 12/2019 - 3 anos',
        text: 'Foi um curso técnico integrado ao ensino médio, onde comecei na programação e aprendi o básico.',
      },
    },
    usa:{
      title: 'Graduation',
      cardOne: {
        title: 'Technologist in Systems Analysis and Development',
        institution: 'Ceunsp and Fatec',
        date: '01/2020 - 12/2022 - 3 years',
        text: 'I started college in 2020 at the educational institution Fatec, at the end of the second semester I had an internship opportunity and due to scheduling reasons I moved to Ceunsp where I stayed until I completed the course.',
      },
      cardTwo: {
        title: 'Information technology technician',
        institution: 'Etec',
        date: '01/2017 - 12/2019 - 3 years',
        text: 'It was a technical course integrated into my high school education, where I got my start in programming and learned the basics of it.',
      },
    },
  }

}
