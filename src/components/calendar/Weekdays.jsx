import moment from 'moment/moment';
import Title from './Title';

// Reto: Generar la fecha actual y mostrar en la interfaz
// Reto: Al dar click, mostrar hora y fecha

const Weekdays = () => {

    const today = new Date();
    const day = today.getDay();

    const getDaysSubstract = (dayParametter) => {
        const isToday = day - dayParametter;
        return isToday;
    }

    const getDay = (dayParametter) => {
        return moment(today).subtract(getDaysSubstract(dayParametter), 'days').format('DD-MM-yyyy')
    }

    return (
        <>
            <Title>Horario</Title>
            <Title today={day === 0 ? 1 : 0}>Lunes <br />{getDay(0)}</Title>
            <Title today={day === 1 ? 1 : 0}>Martes<br />{getDay(1)}</Title>
            <Title today={day === 2 ? 1 : 0}>Miercoles<br />{getDay(2)}</Title>
            <Title today={day === 3 ? 1 : 0}>Jueves<br />{getDay(3)}</Title>
            <Title today={day === 4 ? 1 : 0}>Viernes<br />{getDay(4)}</Title>
            <Title today={day === 5 ? 1 : 0}>Sabado<br />{getDay(5)}</Title>
            <Title today={day === 6 ? 1 : 0}>Domingo<br />{getDay(6)}</Title>
        </>
    )
}

export default Weekdays;