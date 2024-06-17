import {useUser} from "@clerk/clerk-react"
import FinancialRecordForm from "./FinancialRecordForm";
import FinancialRecordList from "./FinancialRecordList";

export default function DashBoard() {
    const {user} = useUser();

    return (
    <div className="dashboard-contaner">
        <h1>Welcome {user?.firstName}! Here are your Finances</h1>
        <FinancialRecordForm/>
        <FinancialRecordList/>
    </div>
    )
}