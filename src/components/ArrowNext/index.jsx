import { useContext } from 'react';

//Context
import { ModalContext } from '../../contexts/ModalContext';

//Interface
// import { ArrowNextProps } from './interfaces'

//Assets
import nextArrow from '../../assets/images/arrow-next.svg';

const ArrowNext = (props) => {
    const { className, style, onClick } = props;
    const { handleChangeCardsPosition } = useContext(ModalContext);

    const handleClick = () => {
        handleChangeCardsPosition();
        onClick();
    }
    return(
        <div
            onClick={() => handleClick()}
        >
            <img 
                style={{...style, width: '1.96875rem', height: '1.9375rem'}}
                className={className}
                src={nextArrow}
                alt="Próximo"
            />
        </div>
    )
}

export default ArrowNext;

// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "red" }}
//       />
//     );
// }