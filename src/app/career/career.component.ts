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
      followizeIntern: {
        level: 'Estágio',
        company: 'Followize',
        period: '08/2020 - 02/2021 - 6 meses',
        text: 'Iniciei o estágio em plena pandemia, com um excelente plano de estágio que visava aprender todo o stack que era utilizado e apresentar um sistema utilizando-o, neste caso: Php, Laravel, PostgreSql, Typescript, Javascript, Angular e Git.',
      },
      followizeJuniorOne: {
        level: 'Desenvolvedor back-end júnior I',
        company: 'Followize',
        period: '02/2021 - 02/2022 - 1 ano',
        text: 'Após efetivado, atuei na resolução de bugs e desenvolvi pequenas funcionalidades no back-end do software principal. Também fui responsável pelo software de gestão interna.',
      },
      followizeJuniorTwo: {
        level: 'Desenvolvedor back-end júnior II',
        company: 'Followize',
        period: '02/2022 - 02/2023 - 1 ano',
        text: 'Depois de um ano recebi uma promoção e com ela tive maior responsabilidade,funcionalidades maiores, bugs mais complexos e também fui responsável pelo software de gestão interna.',
      },
      followizeJuniorThree: {
        level: 'Desenvolvedor full stack júnior III',
        company: 'Followize',
        period: '02/2023 - 10/2023 - 8 meses',
        text: 'Com a nova promoção tive que implementar no meu fluxo de trabalho o desenvolvimento e resolução de tarefas relacionadas ao front-end.',
      },
      followizePlenoOne: {
        level: 'Desenvolvedor back-end pleno I',
        company: 'Followize',
        period: '10/2023 - 08/2024 - 10 meses',
        text: 'Conforme aumenta a senioridade é necessário aumentar as responsabilidades, após passar a pleno tive que ser responsável por outros programadores iniciantes e realizar revisões de código, e claro nessa época foquei em trabalhar na equipe de integrações.',
      },
      dealerspacePlenoOne: {
        level: 'Desenvolvedor full stack pleno I',
        company: 'DealerSpace',
        period: '08/2024 - 02/2025 - 6 meses',
        text: 'Em 2024, a Followize foi unificada com a empresa DealerSite, dando origem a uma nova empresa, a DealerSpace, que mantém o mesmo ambiente mas com objetivos maiores.',
      },
      dealerspacePlenoTwo: {
        level: 'Desenvolvedor full stack pleno II',
        company: 'DealerSpace',
        period: '02/2025 - atualmente',
        text: 'Em fevereiro de 2025 fui promovido ao cargo de pleno II, me tornando responsavel por ajudar outros plenos mais novos.',
      },
    },
    usa: {
      title: 'Career',
      followizeIntern: {
        level: 'Internship',
        company: 'Followize',
        period: '08/2020 - 02/2021 - 6 months',
        text: 'I started the internship in the middle of the pandemic, with an excellent internship plan that aimed to learn the entire stack that was used and present a system using it, in this case: Php, Laravel, PostgreSql, Typescript, Javascript, Angular and Git.',
      },
      followizeJuniorOne: {
        level: 'Junior back-end developer I',
        company: 'Followize',
        period: '02/2021 - 02/2022 - 1 year',
        text: 'Once hired, I worked on resolving bugs and developed minor features in the back-end of the main software. I was also responsible for the internal management software.',
      },
      followizeJuniorTwo: {
        level: 'Junior back-end developer II',
        company: 'Followize',
        period: '02/2022 - 02/2023 - 1 year',
        text: 'After a year I received a promotion and with it I had increased responsibility, bigger features, more complex bugs and was also responsible for the internal management software.',
      },
      followizeJuniorThree: {
        level: 'Junior full stack developer III',
        company: 'Followize',
        period: '02/2023 - 10/2023 - 8 months',
        text: 'With the new promotion I had to implement developing and solving tasks related to the front-end into my workflow.',
      },
      followizePlenoOne: {
        level: 'Full back-end developer I',
        company: 'Followize',
        period: '10/2023 - 08/2024 - 10 months',
        text: 'As seniority increases, it is necessary to increase responsibilities, after becoming full developer I had to be responsible for other beginner programmers and carry out code reviews, and of course at that time I focused on working on the integrations team.',
      },
      dealerspacePlenoOne: {
        level: 'Full full stack developer I',
        company: 'DealerSpace',
        period: '08/2024 - 02/2025 - 6 months',
        text: 'In 2024, Followize was unified with the company DealerSite, giving rise to a new company, DealerSpace, which maintains the same environment but with greater objectives.',
      },
      dealerspacePlenoTwo: {
        level: 'Full full stack developer II',
        company: 'DealerSpace',
        period: '02/2025 - now',
        text: 'In February 2025, I was promoted to the position of full member II, becoming responsible for helping other younger full members.',
      },
    },
  };

}
