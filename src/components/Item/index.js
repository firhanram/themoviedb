import { Poster } from "./style"

const Item = ({imgURL, alt}) => {
    return(
        <>
            <Poster src={imgURL} alt={alt} />
        </>
    )
}

export default Item