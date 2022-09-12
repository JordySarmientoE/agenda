import moment from 'moment';
import Modal from 'react-modal';
import Input from '../forms/Input';
import 'moment/locale/es';
import styled from 'styled-components';
import Button from '../buttons/Button';
import { useState } from 'react';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const P = styled.p`
    text-transform: capitalize;
`

const Title = styled.p`
    font-weight: bold;
`

const ButtonActions = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    gap: 10px;
`

const Event = ({ date, modalIsOpen, closeModal, hour, assignEvent, event, cancelEvent }) => {

    const [value, setValue] = useState(event.title ?? "");

    date = new Date(date);
    date.setHours(hour, 0, 0);

    const onChange = (value) => {
        setValue(value.target.value);
    }

    const onKeyDown = (key) => {
        if (key.keyCode === 13 && value.length > 0) {
            assignEvent(value);
        }
    }

    return <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
        ariaHideApp={false}
    >
        <div>
            <Title>Asignar evento</Title>
            <Input autoFocus placeholder='Añade un título' value={value} onChange={onChange} onKeyDown={onKeyDown} />
            <P>{moment(date).locale("es").format("LLLL")}</P>
            <ButtonActions>
                {event.hasEvent && <Button theme="secondary" onClick={cancelEvent}>Cancelar</Button>}
                <Button type='submit' onClick={() => assignEvent(value)} disabled={value.length === 0}>Guardar</Button>
            </ButtonActions>
        </div>
    </Modal>
}

export default Event;