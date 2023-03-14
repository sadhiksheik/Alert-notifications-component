// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="bg-container">
    <h1 className="main-heading">Alert Notifications</h1>
    <div className="all-notifications">
      <Notification>
        <AiFillCheckCircle className="icon suc" />
        <div className="content-box">
          <h1 className="success">Success</h1>
          <p className="description">
            You can access all the files in the folder
          </p>
        </div>
      </Notification>
      <Notification>
        <RiErrorWarningFill className="icon err" />
        <div className="content-box">
          <h1 className="error">Error</h1>
          <p className="description">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </Notification>
      <Notification>
        <MdWarning className="icon war" />
        <div className="content-box">
          <h1 className="warning">Warning</h1>
          <p className="description">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </Notification>
      <Notification>
        <MdInfo className="icon inf" />
        <div className="content-box">
          <h1 className="info">Info</h1>
          <p className="description">
            Anyone on the internet can view these files
          </p>
        </div>
      </Notification>
    </div>
  </div>
)

export default AlertNotifications
