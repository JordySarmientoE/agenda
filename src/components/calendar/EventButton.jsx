import styled from "styled-components";
import { useState } from 'react';
import Event from "../modals/Event";
import { colors } from "../../utils";

const Button = styled.div`
    background-color: ${(props) => !props.event ? colors.blue_gray : colors.primary_color};
    height: 100%;
    border: 1px solid #91B6DE;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
`

export default function EventButton({ hour, date }) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [event, setEvent] = useState({
        hasEvent: false,
        title: ""
    })
    const createEvent = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const assignEvent = (value) => {
        setEvent({
            hasEvent: true,
            title: value
        })
        closeModal();
    }

    const cancelEvent = () => {
        setEvent({
            hasEvent: false,
            title: ""
        })
        closeModal();
    }

    return (
        <>
            <Event closeModal={closeModal} date={date} modalIsOpen={modalIsOpen} hour={hour} assignEvent={assignEvent}
                cancelEvent={cancelEvent} event={event} />
            <Button onClick={createEvent} event={event.hasEvent}>{event.hasEvent ? event.title : ""}</Button>
        </>
    )
}