// Импортируем картинки из src/assets
import ChichenImg from '../assets/images/Chichen.jpg';
import RioImg from '../assets/images/Rio.jpg';
import ColosseumImg from '../assets/images/kolizey.jpg';
import GreatWallImg from '../assets/images/wall.jpg';
import MachuImg from '../assets/images/machu-pikchu.jpg';
import PetraImg from '../assets/images/Petr.jpg';
import TajImg from '../assets/images/tadzh_mahal.jpg';

// Импортируем иконки
import piramidaIcon from '../assets/icons/piramida.png';
import christIcon from '../assets/icons/christ.png';
import colosseumIcon from '../assets/icons/colosseum.png';
import wallIcon from '../assets/icons/wall.png';
import machuIcon from '../assets/icons/Machu.png';
import petraIcon from '../assets/icons/petra.png';
import tajIcon from '../assets/icons/Taj.png';

export const wonders  = [
    {
        id: 'chichen_itza',
        name: 'Chichen Itza',
        lat: 20.6843,
        lon: -88.5678,
        image: ChichenImg,
        icon: piramidaIcon,
        description: 'Chichen Itza — древний город майя в Мексике, знаменитый пирамидой Кукулькана.'
    },
    {
        id: 'christ_redeemer',
        name: 'Christ the Redeemer',
        lat: -22.9519,
        lon: -43.2105,
        image: RioImg,
        icon: christIcon,
        description: 'Статуя Христа-Искупителя в Рио-де-Жанейро — символ Бразилии и христианства.'
    },
    {
        id: 'colosseum',
        name: 'Colosseum',
        lat: 41.8902,
        lon: 12.4922,
        image: ColosseumImg,
        icon: colosseumIcon,
        description: 'Колизей в Риме — крупнейший амфитеатр античного мира, символ Римской империи.'
    },
    {
        id: 'great_wall',
        name: 'Great Wall of China',
        lat: 40.4319,
        lon: 116.5704,
        image: GreatWallImg,
        icon: wallIcon,
        description: 'Великая Китайская стена — древнее укрепление длиной более 20 000 км.'
    },
    {
        id: 'machu_picchu',
        name: 'Machu Picchu',
        lat: -13.1631,
        lon: -72.5450,
        image: MachuImg,
        icon: machuIcon,
        description: 'Мачу-Пикчу — затерянный город инков в Перу, одна из главных загадок Южной Америки.'
    },
    {
        id: 'petra',
        name: 'Petra',
        lat: 30.3285,
        lon: 35.4444,
        image: PetraImg,
        icon: petraIcon,
        description: 'Петра — древний город, вырезанный в скалах Иордании, известный своей архитектурой.'
    },
    {
        id: 'taj_mahal',
        name: 'Taj Mahal',
        lat: 27.1751,
        lon: 78.0421,
        image: TajImg,
        icon: tajIcon,
        description: 'Тадж-Махал — мавзолей в Агре (Индия), построенный из белого мрамора в честь любви.'
    }
];