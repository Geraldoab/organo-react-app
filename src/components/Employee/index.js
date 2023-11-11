import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Employee.css'

const Employee = (props) => {

    function onFavorite() {
        props.onClickFavorite(props.id)
    }

    const propsFavorite = {
        size: 32,
        onClick: onFavorite
    }

    return (
        <div className='employee'> 
            <AiFillCloseCircle 
                size={32} 
                className="delete" 
                onClick={() => props.onDeleteEmployee(props.id)} 
            />
            <div className='header' style={{ backgroundColor: props.backgroundColor }}>
                <img src={props.photo} alt={props.name} />
            </div>
            <div className='footer'>
                <h4>{props.name}</h4>
                <h5>{props.role}</h5>
                <div className='favorite'>
                    {props.isFavorite 
                        ? <AiFillHeart {...propsFavorite} color='#FF0000' /> 
                        : <AiOutlineHeart {...propsFavorite} />}
                </div>
            </div>
        </div>
    )
}

export default Employee