import React from 'react';
import './styles.css';
import trashImage from '../../assets/trash.svg';

export function Card(props) {
    const handleRemoveCard = () => {
        // Chama a função de remoção de cartão passada pelos props
        props.onRemove(props.time);
    };

    return (
        <div className="card">
            <strong>{props.name}</strong>
            <div className="container-card">
                <small>{props.time}</small>
                <button className="btn-trash" type="button" onClick={handleRemoveCard}>
                    <img src={trashImage} alt="imagem lixeira" />
                </button>
            </div>
        </div>
    );
}
