import { useState } from 'react';

//Styles
import {
    Container
} from './styles';

//Assets
import check from '../../assets/images/check.svg';

const Checkbox = () => {
    const [isCheck, setIsChecked] = useState(false);

    const handleClick = () => {
        setIsChecked(!isCheck);
    }

    return(
        <Container 
            checked={isCheck} 
            onClick={handleClick}
        >
            <img src={check} alt="v"/>
        </Container>
    )
}

export default Checkbox;