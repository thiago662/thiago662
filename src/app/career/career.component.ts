import { Component } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent {
  translate = {
    pt: {
      cardOne: {
        level: 'Estágio',
        company: 'Followize',
        period: '08/2020 - 02/2021 - 6 meses',
        text: 'Iniciei o estafio em meio a pandemia, com um excelente plano de estagio que visava aprender toda a stack que era utilizada e apresentar um sistema utilizando ela, no caso: Php, Laravel, PostgreSql, Typescript, Javascript, Angular e Git.',
      },
      cardTwo: {},
      cardThree: {},
      cardFour: {},
      cardFive: {},
      cardSix: {},
    },
    usa: {
      followizeinternship: '',
      followizejri: '',
      followizejrii: '',
      followizejriii: '',
      followizepli: '',
      dealerspacepli: '',
    },
  };

}
