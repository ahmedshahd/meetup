import NewMeetupForm from "../../components/meetups/NewMeetupForm";
const NewMeetupPage = () => {
  const addMeetupDateHandler = (enteredDate) => {
    console.log(enteredDate);
  };
  return <NewMeetupForm onAddMeetup={addMeetupDateHandler} />;
};
export default NewMeetupPage;
