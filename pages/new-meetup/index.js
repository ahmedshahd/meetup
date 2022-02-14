import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
const NewMeetupPage = () => {
  const router = useRouter();
  async function addMeetupDateHandler(enteredMeetupDate) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupDate),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    router.push("/");
  }
  return <NewMeetupForm onAddMeetup={addMeetupDateHandler} />;
};
export default NewMeetupPage;
