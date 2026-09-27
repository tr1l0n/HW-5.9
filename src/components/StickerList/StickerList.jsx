import { Sticker } from "../Sticker/Sticker"
import { List,Item,Title } from './StickerList.styles'
export const StickerList = ({ stickers,handleSticker }) => {
    return (
        <div>
            <Title>Choose your mood</Title>
            <List>{stickers.map(sticker => (
                <Item key={sticker.label} onClick={() => handleSticker(sticker.label)}>
                    <Sticker label={sticker.label} img={sticker.img} />
                </Item>
            ))}</List>
        </div>
    )
}