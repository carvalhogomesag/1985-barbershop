// 1. Importação das Imagens
import corte01 from './assets/images/cortes/corte-01.webp';
import corte02 from './assets/images/cortes/corte-02.webp';
import corte03 from './assets/images/cortes/corte-03.webp';
import corte04 from './assets/images/cortes/corte-04.webp';

import loja01 from './assets/images/interior/loja-01.webp';
import loja02 from './assets/images/interior/loja-02.webp';
import loja03 from './assets/images/interior/loja-03.webp';
import loja04 from './assets/images/interior/loja-04.webp';
import loja05 from './assets/images/interior/loja-05.webp';

// 2. Informações do Negócio - 1985 BARBERSHOP
export const BUSINESS_INFO = {
  name: "1985 Barbershop",
  barberName: "Alessandro",
  phone: '+351 917 231 653', 
  address: 'Av. de Madrid 3D, Areeiro',
  city: '1000-193 Lisboa',
  openingHours: 'Segunda a Sábado: 11:00 - 20:00',
  bookingUrl: 'https://wa.me/351917231653', 
  // LINK ATUALIZADO ABAIXO:
  googleMapsUrl: 'https://maps.app.goo.gl/tRd7fZMz7EGjADiKA',
  instagramUrl: 'https://instagram.com/' 
};

// 3. Serviços
export const SERVICES = [
  { id: 1, name: 'Corte Alessandro', description: 'Corte de precisão executado pelo mestre Alessandro.', price: '15€' },
  { id: 2, name: 'Barba 1985', description: 'Tratamento de barba clássico com técnicas tradicionais.', price: '12€' },
  { id: 3, name: 'Combo Completo', description: 'Corte e Barba com tratamento capilar incluído.', price: '25€' }
];

// 4. Críticas
export const REVIEWS = [
  {
    id: 1,
    author: 'David FL 1950',
    date: 'Há 5 meses',
    text: 'Corto com o Alessandro já há quase 2 anos. É o melhor barbeiro de Lisboa! Muito top, amigável e confiável!',
    avatar: 'https://ui-avatars.com/api/?name=David+FL&background=991b1b&color=fff'
  },
  {
    id: 2,
    author: 'Renson Vasconcellos',
    date: 'Há 4 meses',
    text: 'O Alessandro ajudou muito no tratamento do meu cabelo. Indico muito!',
    avatar: 'https://ui-avatars.com/api/?name=Renson+V&background=991b1b&color=fff'
  }
];

// 5. Galeria
export const IMAGES = {
  cortes: [
    { id: 1, url: corte01, alt: 'Corte 1985' },
    { id: 2, url: corte02, alt: 'Estilo Alessandro' },
    { id: 3, url: corte03, alt: 'Barba Alessandro' },
    { id: 4, url: corte04, alt: 'Barbearia Areeiro' },
  ],
  interior: [
    { id: 1, url: loja01, alt: 'Interior 1985' },
    { id: 2, url: loja02, alt: 'Ambiente' },
    { id: 3, url: loja03, alt: 'Espaço' },
    { id: 4, url: loja04, alt: 'Detalhes' },
    { id: 5, url: loja05, alt: 'Decoração Alessandro' },
  ]
};