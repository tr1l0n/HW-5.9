import {Img} from './Sticker.styles'
export const Sticker = ({ img, label }) => {
    console.log(img);
    
    return (
        <Img src={img} alt={label} />
    )
}