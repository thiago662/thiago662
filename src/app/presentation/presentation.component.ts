import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {
  translate = {
    pt: {
      header: 'Olá, eu sou Thiago Gonçalves Santos.',
      textOne: 'Sou um desenvolvedor brasileiro, iniciei minha jornada na programação em 2017 quando iniciei meus estudos no ensino médio na instituição de ensino Etec, onde o ensino médio é realizado juntamente com um curso técnico, onde na época optei por ser o curso técnico em computação. Após terminar o ensino médio em 2019, no ano seguinte iniciei a faculdade, no mesmo ano de 2020, em outubro, consegui minha primeira oportunidade de emprego na área com um estágio na empresa Followize.',
      textTwo: 'Na Followize comecei com um estágio que durou 6 meses, após esse período fui efetivado e me tornei desenvolvedor jr I. O ano de 2022 marcou o fim da minha faculdade e com isso atualmente continuo trabalhando na mesma instituição porém ela mudou de nome, o antigo Followize agora se chama DealerSpace.',
    },
    usa: {
      header: 'Hello, I\'m Thiago Gonçalves Santos.',
      textOne: 'I\'m a Brazilian developer, I started my programming journey in 2017 when I started my high school studies at the educational institution Etec, where high school is carried out together with a technical course, where at the time I chose to be the technical course in computing. After finishing high school in 2019, the following year I started college, in the same year of 2020, in October, I got my first job opportunity in the area with an internship at the company Followize.',
      textTwo: 'At Followize I started with an internship that lasted 6 months, after that period I was hired and became a jr I developer. The year 2022 marked the end of my college and with that I currently continue working at the same institution but it changed its name, the former Followize is now called DealerSpace.',
    },
  };

}
