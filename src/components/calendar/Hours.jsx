import moment from 'moment';
import EventButton from './EventButton';
import Hour from './Hour';

const horario = Array.from(Array(24).keys());

const CreateHours = ({ hour }) => {

    const today = new Date();
    const day = today.getDay();

    const getDaysSubstract = (dayParametter) => {
        const isToday = day - dayParametter;
        return isToday;
    }

    const getDay = (dayParametter) => {
        return moment(today).subtract(getDaysSubstract(dayParametter), 'days')
    }

    const getHour = (hour) => {
        const hourFormat = (String(hour).length === 1 ? `0${hour}` : hour) + `:00`;
        return hourFormat + (hour < 12 ? ' AM' : ' PM');
    }

    return (<>
        <Hour key={hour}>{getHour(hour)}</Hour>
        <EventButton hour={hour} date={getDay(0)}></EventButton>
        <EventButton hour={hour} date={getDay(1)}></EventButton>
        <EventButton hour={hour} date={getDay(2)}></EventButton>
        <EventButton hour={hour} date={getDay(3)}></EventButton>
        <EventButton hour={hour} date={getDay(4)}></EventButton>
        <EventButton hour={hour} date={getDay(5)}></EventButton>
        <EventButton hour={hour} date={getDay(6)}></EventButton>
    </>)
}

export default function Hours() {

    return (
        <>
            {horario.map(hour => <CreateHours hour={hour} key={hour} />)}
        </>
    )
}