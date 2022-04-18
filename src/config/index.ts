import airpods from "../assets/airpods.png";
import iphone from "../assets/iphone.png";
import tablet from "../assets/tablet.png";
import { CarouselItem } from '../types/carousel'

export const imgList:CarouselItem[] = [
    {
        id: 0,
        src: airpods,
        title: 'airpods',
        desc: 'airpods desc no1 ok',
        style: {
            background: '#F1F1F3',
            color: '#111',
            flexShrink: 0,
            width: '100%',
            padding: '100px 0',
            transition: 'all 1s'
        }
    },
    {   
        id: 1,
        src: iphone,
        title: 'iphone',
        desc: 'iphone desc no2 ok',
        style: {
            background: '#111',
            color: '#fff',
            flexShrink: 0,
            width: '100%',
            padding: '100px 0',
            transition: 'all 1s'
        }
    },
    {
        id: 2,
        src: tablet,
        title: 'tablet',
        desc: 'tablet desc no3 ok',
        style: {
            background: '#FAFAFA',
            color: '#111',
            flexShrink: 0,
            width: '100%',
            padding: '100px 0',
            transition: 'all 1s'
        }
    }
]