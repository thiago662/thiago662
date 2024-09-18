import { Component } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent {
  translate = {
    pt: {
      title: 'Carreira',
      cardOne: {
        level: 'Estágio',
        company: 'Followize',
        period: '08/2020 - 02/2021 - 6 meses',
        text: 'Iniciei o estágio em plena pandemia, com um excelente plano de estágio que visava aprender todo o stack que era utilizado e apresentar um sistema utilizando-o, neste caso: Php, Laravel, PostgreSql, Typescript, Javascript, Angular e Git.',
      },
      cardTwo: {
        level: 'Desenvolvedor back-end júnior I',
        company: 'Followize',
        period: '02/2021 - 02/2022 - 1 ano',
        text: 'Após efetivado, atuei na resolução de bugs e desenvolvi pequenas funcionalidades no back-end do software principal. Também fui responsável pelo software de gestão interna.',
      },
      cardThree: {
        level: 'Desenvolvedor back-end júnior II',
        company: 'Followize',
        period: '02/2022 - 02/2023 - 1 ano',
        text: 'Depois de um ano recebi uma promoção e com ela tive maior responsabilidade,funcionalidades maiores, bugs mais complexos e também fui responsável pelo software de gestão interna.',
      },
      cardFour: {
        level: 'Desenvolvedor full stack júnior III',
        company: 'Followize',
        period: '02/2023 - 10/2023 - 8 meses',
        text: 'Com a nova promoção tive que implementar no meu fluxo de trabalho o desenvolvimento e resolução de tarefas relacionadas ao front-end.',
      },
      cardFive: {
        level: 'Desenvolvedor back-end pleno I',
        company: 'Followize',
        period: '10/2023 - 08/2024 - 10 meses',
        text: 'Conforme aumenta a senioridade é necessário aumentar as responsabilidades, após passar a pleno tive que ser responsável por outros programadores iniciantes e realizar revisões de código, e claro nessa época foquei em trabalhar na equipe de integrações.',
      },
      cardSix: {
        level: 'Desenvolvedor full stack pleno I',
        company: 'DealerSpace',
        period: '08/2024 - atualmente',
        text: 'Em 2024, a Followize foi unificada com a empresa DealerSite, dando origem a uma nova empresa, a DealerSpace, que mantém o mesmo ambiente mas com objetivos maiores.',
      },
    },
    usa: {
      title: 'Career',
      cardOne: {
        level: 'Internship',
        company: 'Followize',
        period: '08/2020 - 02/2021 - 6 months',
        text: 'I started the internship in the middle of the pandemic, with an excellent internship plan that aimed to learn the entire stack that was used and present a system using it, in this case: Php, Laravel, PostgreSql, Typescript, Javascript, Angular and Git.',
      },
      cardTwo: {
        level: 'Junior back-end developer I',
        company: 'Followize',
        period: '02/2021 - 02/2022 - 1 year',
        text: 'Once hired, I worked on resolving bugs and developed minor features in the back-end of the main software. I was also responsible for the internal management software.',
      },
      cardThree: {
        level: 'Junior back-end developer II',
        company: 'Followize',
        period: '02/2022 - 02/2023 - 1 year',
        text: 'After a year I received a promotion and with it I had increased responsibility, bigger features, more complex bugs and was also responsible for the internal management software.',
      },
      cardFour: {
        level: 'Junior full stack developer III',
        company: 'Followize',
        period: '02/2023 - 10/2023 - 8 months',
        text: 'With the new promotion I had to implement developing and solving tasks related to the front-end into my workflow.',
      },
      cardFive: {
        level: 'Full back-end developer I',
        company: 'Followize',
        period: '10/2023 - 08/2024 - 10 months',
        text: 'As seniority increases, it is necessary to increase responsibilities, after becoming full developer I had to be responsible for other beginner programmers and carry out code reviews, and of course at that time I focused on working on the integrations team.',
      },
      cardSix: {
        level: 'Full full stack developer I',
        company: 'DealerSpace',
        period: '08/2024 - now',
        text: 'In 2024, Followize was unified with the company DealerSite, giving rise to a new company, DealerSpace, which maintains the same environment but with greater objectives.',
      },
    },
  };

}
