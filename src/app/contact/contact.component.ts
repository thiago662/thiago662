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
        title: 'Gmail',
        text: 'thiago1santos12@gmail.com',
        link: 'mailto:“thiago1santos12@gmail.com”',
      },
      cardTwo: {
        title: 'LinkedIn',
        text: 'Thiago Gonçalves Santos',
        link: 'https://www.linkedin.com/in/thiago-gon%C3%A7alves-santos-730a74199/',
      },
      cardThree: {
        title: 'GitHub',
        text: 'thiago662',
        link: 'https://github.com/thiago662',
      },
    },
    usa:{
      title: 'Contact',
      cardOne: {
        title: 'Gmail',
        text: 'thiago1santos12&#64;gmail.com',
        link: 'thiago1santos12@gmail.com',
      },
      cardTwo: {
        title: 'LinkedIn',
        text: 'Thiago Gonçalves Santos',
        link: 'https://www.linkedin.com/in/thiago-gon%C3%A7alves-santos-730a74199/',
      },
      cardThree: {
        title: 'GitHub',
        text: 'thiago662',
        link: 'https://github.com/thiago662',
      },
    },
  }

}
