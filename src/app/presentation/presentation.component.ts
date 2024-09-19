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
      textOne: 'Sou um desenvolvedor brasileiro, iniciei minha jornada na programação em 2017 no ensino médio técnico em informática na escola Etec, Em 2020 comecei a faculdade de análise e desenvolvimento de sistemas, no mesmo ano em outubro consegui minha primeira oportunidade de emprego na área com um estágio na empresa Followize. Com 6 meses de estágio fui efetivo e me tornei um desenvolvedor Júnior I, em 2022 conclui a faculdade e atualmente ainda continuo trabalhando na mesma instituição, porém a antiga Followize se fundiu com outra empresa chamada DealerSites, tornando-se assim a DealerSpace.',
    },
    usa: {
      header: 'Hello, I\'m Thiago Gonçalves Santos.',
      textOne: 'I am a Brazilian developer, I started my programming journey in 2017 in high school as a computer technician at Etec school, In 2020 I started college in systems analysis and development, in the same year in October I got my first job opportunity in the area with an internship at the company Followize. After 6 months of internship I was effective and became a Junior I developer, in 2022 I graduated from college and currently still works at the same institution, but the former Followize merged with another company called DealerSites, thus becoming DealerSpace.',
    },
  };

}
