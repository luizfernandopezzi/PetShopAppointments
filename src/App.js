import './App.css';
import { BiCalendar } from 'react-icons/bi';
import Search from './components/Search';
import AddAppointment from './components/AddAppointment';
import AppointmentsInfo from './components/AppointmentsInfo';
// import appointmentList from './data.json';
import { useState, useEffect, useCallback } from 'react';
import Footer from './components/Footer';

function App() {
 const [appointmentApi, setAppointmentApi] = useState([]);

 const fetchData = useCallback(()=>{
  fetch(`./api.json`)
  .then((response) => (response.json()))
  .then(data => setAppointmentApi(data))
 }, [])

 useEffect(()=>{
  fetch(`./api.json`)
  .then((response) => (response.json()))
  .then(data => setAppointmentApi(data))
 }, [fetchData])

 const [search, setSearch] = useState('')
 useEffect(()=>{
   console.log(search)
 })
 
const [sortBy, setSortBy] = useState("petName")
const [orderBy, setOrderBy] = useState("asc")

 const filteredAppointments = appointmentApi.filter(
   item => {
     return(
       item.petName.toLowerCase().includes(search.toLocaleLowerCase()) ||
       item.ownerName.toLowerCase().includes(search.toLocaleLowerCase()) ||
       item.aptNotes.toLowerCase().includes(search.toLocaleLowerCase())
     )
   }
 ).sort((a,b) => {
   let direction = (orderBy === 'asc') ? 1 : -1;
   return(
     a.[sortBy].toLowerCase() < b.[sortBy].toLowerCase()  ? -1 * direction : 1 * direction
   )
 })
 
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
        <BiCalendar className="inline-block text-red-400 align-top"/> PetShop Appointments </h1>
        <AddAppointment onSendAppointment={myAppointment => setAppointmentApi([...appointmentApi, myAppointment])} lastId={appointmentApi.reduce((max,item)=>Number(item.id) > max ? Number(item.id) : max, 0)} />
        <Search searchInput={search} onSearchChange={eventTargetValue => setSearch(eventTargetValue)} orderBy={orderBy} onOrderByChange={mySort => setOrderBy(mySort)} sortBy={sortBy} onSortByChange={mySort => setSortBy(mySort)} />
        {/* <Appointments appointments={appointmentList} /> */}
        {/* <AppointmentsAntigo appointments={filteredAppointments} /> */}

        <ul className="divide-y divide-gray-200">
          {filteredAppointments.map((item) => (
              <AppointmentsInfo key={item.id} appointment={item} onDeleteApt={appointmentId => setAppointmentApi(appointmentApi.filter(appointment => appointment.id !== appointmentId))}/>
          ))}
        </ul>
        <Footer />
    </div>
  );
}

export default App;
